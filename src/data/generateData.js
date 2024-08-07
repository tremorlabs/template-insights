const fs = require("fs")
const path = require("path")

function generateRandomValue(min, max, variance, isWeekend, weekendReduction) {
  let randomValue = min + (max - min) * Math.random()
  let drift = (Math.random() - 0.5) * 2 * variance * randomValue
  randomValue += drift

  if (isWeekend && weekendReduction) {
    const reductionFactor = 1 - (Math.random() * 0.15 + 0.1) // Reduce by 10-25%
    randomValue *= reductionFactor
  }

  // Ensure the value stays within the specified min and max bounds
  if (randomValue < min) {
    randomValue = min
  } else if (randomValue > max) {
    randomValue = max
  }

  return Math.round(randomValue)
}

function generateData(startDate, endDate, amountCategory) {
  const overviews = []
  let currentDate = new Date(startDate)
  const endDateObj = new Date(endDate)

  while (currentDate <= endDateObj) {
    const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6 // 0 = Sunday, 6 = Saturday

    // Generate approved amount with its own randomness
    const approvedAmount = generateRandomValue(
      amountCategory.min,
      amountCategory.max,
      amountCategory.variance,
      isWeekend,
      amountCategory.weekendReduction,
    )
    const blockedMin = approvedAmount * 0.005 // Minimum 0.5% of approved
    const blockedMax = approvedAmount * 0.015 // Maximum 1.5% of approved

    const blockedAmount = generateRandomValue(
      blockedMin,
      blockedMax,
      amountCategory.variance,
      isWeekend,
      amountCategory.weekendReduction,
    )

    // Calculate total amount
    const totalAmount = approvedAmount + blockedAmount

    const dataEntry = {
      date: currentDate.toISOString().split("T")[0] + "T00:00:00",
      amounts: [
        { amount: totalAmount, status: "total" },
        { amount: approvedAmount, status: "approved" },
        { amount: blockedAmount, status: "blocked" },
      ],
    }

    overviews.push(dataEntry)
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return overviews
}

const amountCategory = {
  name: "amount",
  type: "numeric",
  min: 20000,
  max: 90000,
  variance: 0.2,
  weekendReduction: true,
}

const startDate = "2023-08-01";
const endDate = "2024-08-07";

const overviews = generateData(startDate, endDate, amountCategory)

const dataString = `export const aggregatedReport = ${JSON.stringify(overviews, null, 2)}`

const outputPath = path.join(__dirname, "report.ts")

fs.writeFile(outputPath, dataString, (err) => {
  if (err) throw err
  console.log(`Data has been written to ${outputPath}`)
})
