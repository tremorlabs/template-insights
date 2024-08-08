import React, { useState, useEffect, useMemo } from "react"
import { useQueryState } from "nuqs"
import { Checkbox } from "@/components/Checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover"
import { Button } from "@/components/Button"
import { Label } from "@/components/Label"
import { Input } from "@/components/Input"
import { locations } from "@/data/schema"

interface Country {
  name: string
  selected: boolean
}

interface Continent {
  name: string
  countries: Country[]
}

interface ContinentCheckboxProps {
  continent: Continent
  onSelectionChange: (continent: string, countries: string[]) => void
}

const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

const ContinentCheckbox = ({
  continent,
  onSelectionChange,
}: ContinentCheckboxProps) => {
  const allSelected = continent.countries.every((country) => country.selected)
  const someSelected = continent.countries.some((country) => country.selected)

  const handleContinentChange = (checked: boolean) => {
    const updatedCountries = continent.countries.map((country) => country.name)
    onSelectionChange(continent.name, checked ? updatedCountries : [])
  }

  const handleCountryChange = (countryName: string, checked: boolean) => {
    const updatedCountries = continent.countries
      .filter((country) => country.selected || country.name === countryName)
      .map((country) => country.name)

    if (!checked) {
      const index = updatedCountries.indexOf(countryName)
      if (index > -1) updatedCountries.splice(index, 1)
    }

    onSelectionChange(continent.name, updatedCountries)
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Checkbox
          id={continent.name}
          checked={allSelected ? true : someSelected ? "indeterminate" : false}
          onCheckedChange={handleContinentChange}
        />
        <Label className="w-full font-medium" htmlFor={continent.name}>
          {continent.name}
        </Label>
      </div>
      <div className="ml-4 flex flex-col gap-1">
        {continent.countries.map((country) => (
          <div key={country.name} className="flex items-center gap-2">
            <Checkbox
              id={country.name}
              checked={country.selected}
              onCheckedChange={(checked: boolean) =>
                handleCountryChange(country.name, checked)
              }
            />
            <Label className="w-full" htmlFor={country.name}>
              {country.name}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}

const LocationSelect = () => {
  const [selectedCountries, setSelectedCountries] = useQueryState<string[]>(
    "countries",
    {
      defaultValue: [],
      parse: (value: string) => (value ? value.split("+") : []),
      serialize: (value: string[]) => value.join("+"),
    },
  )

  const [searchTerm, setSearchTerm] = useState("")
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  const continents = useMemo(() => {
    return locations.map((location) => ({
      name: location.name,
      countries: location.countries.map((country) => ({
        name: country,
        selected: selectedCountries.includes(country),
      })),
    }))
  }, [selectedCountries])

  const filteredContinents = useMemo(() => {
    return continents
      .map((continent) => ({
        ...continent,
        countries: continent.countries.filter((country) =>
          country.name
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase()),
        ),
      }))
      .filter(
        (continent) =>
          continent.name
            .toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase()) ||
          continent.countries.length > 0,
      )
  }, [continents, debouncedSearchTerm])

  const handleSelectionChange = (continent: string, countries: string[]) => {
    const otherSelectedCountries = selectedCountries.filter(
      (country) =>
        !locations
          .find((loc) => loc.name === continent)
          ?.countries.includes(country),
    )
    setSelectedCountries([...otherSelectedCountries, ...countries])
  }

  return (
    <div>
      <Label className="block font-medium">Locations</Label>
      <Popover>
        <PopoverTrigger asChild className="mt-3 w-full md:w-fit">
          <Button
            variant="secondary"
            className="flex gap-1.5 font-normal dark:bg-[#090E1A] hover:dark:bg-gray-950/50"
          >
            Selected Locations{" "}
            <span className="flex shrink-0 items-center justify-center rounded bg-gray-100 px-1 text-sm text-gray-700">
              {selectedCountries.length}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="z-50 max-h-96 overflow-y-scroll p-4"
          align="end"
        >
          <div className="flex flex-col gap-4">
            <Input
              placeholder="Search for continent or country"
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
            />
            {filteredContinents.map((continent) => (
              <ContinentCheckbox
                key={continent.name}
                continent={continent}
                onSelectionChange={handleSelectionChange}
              />
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { LocationSelect }
