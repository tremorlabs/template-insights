"use client"
import { Checkbox } from "@/components/Checkbox"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import React from "react"

import { badgeVariants } from "@/components/Badge"
import { Label } from "@/components/Label"
import { cx, focusInput } from "@/lib/utils"

interface Category {
  id: string
  title: string
  subcategories: string[]
}

interface CheckedItems {
  [categoryId: string]: boolean
}

interface CategoryItemProps {
  category: Category
  checked: boolean
  onCheckedChange: (categoryId: string, checked: boolean) => void
}

const categories: Category[] = [
  {
    id: "1",
    title: "User Analytics",
    subcategories: [
      "User Segmentation",
      "Cohort Analysis",
      "Retention Analysis",
    ],
  },
  {
    id: "2",
    title: "Event Tracking",
    subcategories: ["Custom Events", "Automated Events", "Event Funnels"],
  },
  {
    id: "3",
    title: "A/B Testing",
    subcategories: ["Experiment Setup", "Variant Analysis", "Reporting"],
  },
  {
    id: "4",
    title: "User Journeys",
    subcategories: ["Journey Mapping", "Conversion Paths", "Drop-off Analysis"],
  },
  {
    id: "5",
    title: "Engagement Tracking",
    subcategories: ["Email Campaigns", "Push Notifications", "In-app Messages"],
  },
  {
    id: "6",
    title: "Data Management",
    subcategories: ["Data Import", "Data Export", "Integrations"],
  },
  {
    id: "7",
    title: "Security & Compliance",
    subcategories: ["Data Encryption", "User Permissions", "GDPR Compliance"],
  },
]

const CategoryItem = ({
  category,
  checked,
  onCheckedChange,
}: CategoryItemProps) => {
  return (
    <Card
      asChild
      className={cx(
        "cursor-pointer p-5 transition-all active:scale-[99%]",
        "border-gray-300 focus:outline-none dark:border-gray-800",
        "has-[:checked]:border-blue-500",
        "has-[:checked]:dark:border-blue-500",
        focusInput,
      )}
      tabIndex={0}
    >
      <Label className="block" htmlFor={category.id}>
        <div className="mb-2 flex items-center gap-2">
          <Checkbox
            id={category.id}
            name={category.title}
            checked={checked}
            onCheckedChange={(isChecked) =>
              onCheckedChange(category.id, isChecked === true)
            }
          />
          <span className="font-medium">{category.title}</span>
        </div>
        {category.subcategories.length > 0 && (
          <ul className="ml-6 mt-2 flex flex-wrap gap-1.5">
            {category.subcategories.map((subcategory) => (
              <li
                className={badgeVariants({ variant: "neutral" })}
                key={subcategory}
              >
                {subcategory}
              </li>
            ))}
          </ul>
        )}
      </Label>
    </Card>
  )
}

export default function Products() {
  const [checkedItems, setCheckedItems] = React.useState<CheckedItems>({})

  const handleCheckedChange = (categoryId: string, isChecked: boolean) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [categoryId]: isChecked,
    }))
  }

  const isAnyItemChecked = Object.values(checkedItems).some(Boolean)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", checkedItems)
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">
        Which products are you interested in?
      </h1>
      <p className="mt-6">
        You can choose multiple. This will help us customize the experience to
        you.
      </p>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="space-y-2">
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
              checked={checkedItems[category.id] || false}
              onCheckedChange={handleCheckedChange}
            />
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <Button type="button" variant="ghost">
            Skip to dashboard
          </Button>
          <Button type="submit" disabled={!isAnyItemChecked}>
            Continue
          </Button>
        </div>
      </form>
    </main>
  )
}
