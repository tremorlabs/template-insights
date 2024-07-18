"use client"
import { Checkbox } from "@/components/Checkbox"
import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import React from "react"

import { badgeVariants } from "@/components/Badge"
import { Label } from "@/components/Label"

interface Category {
  id: string
  title: string
  subcategories: string[]
}

interface CheckedItems {
  [categoryTitle: string]: { [subcategory: string]: boolean }
}

interface CategoryItemProps {
  category: Category
  checkedItems: CheckedItems
  onCheckedChange: (categoryTitle: string, subcategory: string) => void
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
];


const CategoryItem = ({
  category,
}: CategoryItemProps) => {

  return (
    <Card
      asChild
      className="cursor-pointer p-4 transition-colors hover:bg-gray-100"
    >
      <Label className="block" htmlFor={category.id}>
        <div className="mb-2 flex items-center">
          <Checkbox
            id={category.id}
            name={category.title}
            className="mr-2"
          />
          <span className="font-medium">{category.title}</span>
        </div>
        {category.subcategories.length > 0 && (
          <ul className="ml-6 flex flex-wrap gap-1">
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

const Products = () => {
  const [checkedItems, setCheckedItems] = React.useState<CheckedItems>({})

  const handleCheckedChange = (categoryTitle: string, subcategory: string) => {
    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = { ...prevCheckedItems }
      if (!newCheckedItems[categoryTitle]) {
        newCheckedItems[categoryTitle] = {}
      }
      newCheckedItems[categoryTitle][subcategory] =
        !newCheckedItems[categoryTitle][subcategory]
      return newCheckedItems
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", checkedItems)
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">
        Which products are you interested in?
      </h1>
      <p className="mb-6">
        The more we know about which products you're interested in, the more
        helpful we can be.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {categories.map((category) => (
            <CategoryItem
              key={category.title}
              category={category}
              checkedItems={checkedItems}
              onCheckedChange={handleCheckedChange}
            />
          ))}
        </div>
        <div className="mt-6 space-x-4">
          <Button type="submit">Continue</Button>
          <Button type="button" variant="secondary">
            Back
          </Button>
        </div>
      </form>
    </main>
  )
}

export default Products
