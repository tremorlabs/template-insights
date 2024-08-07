const fs = require("fs");
const path = require("path");

function generateRandomCount(min, max, average) {
  let randomValue = min + (max - min) * Math.random();
  let drift = (Math.random() - 0.5) * (max - min);
  randomValue += drift;

  // Adjusting towards the average
  randomValue = (randomValue + average) / 2;

  // Ensure the value stays within the specified min and max bounds
  if (randomValue < min) {
    randomValue = min;
  } else if (randomValue > max) {
    randomValue = max;
  }

  return Math.round(randomValue);
}

function generateDailyCounts(startDate, endDate) {
  const data = [];
  let currentDate = new Date(startDate);
  const endDateObj = new Date(endDate);

  const minCount = 40;
  const maxCount = 270;
  const averageCount = 75;

  while (currentDate <= endDateObj) {
    const count = generateRandomCount(minCount, maxCount, averageCount);

    // Split count into 5 buckets
    const bucketSize = (maxCount - minCount) / 5;
    let level;
    if (count < minCount + bucketSize) {
      level = 0;
    } else if (count < minCount + 2 * bucketSize) {
      level = 1;
    } else if (count < minCount + 3 * bucketSize) {
      level = 2;
    } else if (count < minCount + 4 * bucketSize) {
      level = 3;
    } else {
      level = 4;
    }

    const dataEntry = {
      count: count,
      date: currentDate.toISOString().split("T")[0],
      level: level,
    };

    data.push(dataEntry);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return data;
}

const startDate = "2023-08-01";
const endDate = "2024-08-07";

const dailyCounts = generateDailyCounts(startDate, endDate);

const dataString = `import { DailyTransaction } from "./schema";

export const dailyTransactions: DailyTransaction[] = ${JSON.stringify(dailyCounts, null, 2)}`;

const outputPath = path.join(__dirname, "dailyTransactions.ts");

fs.writeFile(outputPath, dataString, (err) => {
  if (err) throw err;
  console.log(`Data has been written to ${outputPath}`);
});
