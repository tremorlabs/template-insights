import React, { useState, useEffect } from "react";
import { useQueryState } from "nuqs";
import { Checkbox } from "@/components/Checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import { locations } from "@/data/schema";
import { Input } from "@/components/Input";

interface ContinentCheckboxProps {
  continent: string;
  countries: string[];
  selectedCountries: string[];
  onChange: (selectedCountries: string[]) => void;
  searchTerm: string;
}

const ContinentCheckbox = ({
  continent,
  countries,
  selectedCountries,
  onChange,
  searchTerm,
}: ContinentCheckboxProps) => {
  const allSelected = countries.every((country) =>
    selectedCountries.includes(country)
  );
  const someSelected = countries.some((country) =>
    selectedCountries.includes(country)
  );

  const handleContinentChange = (checked: boolean) => {
    if (checked) {
      onChange([...selectedCountries, ...countries]);
    } else {
      onChange(
        selectedCountries.filter((country) => !countries.includes(country))
      );
    }
  };

  const handleCountryChange = (country: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedCountries, country]);
    } else {
      onChange(
        selectedCountries.filter(
          (selectedCountry) => selectedCountry !== country
        )
      );
    }
  };

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Checkbox
          id={continent}
          checked={allSelected ? true : someSelected ? "indeterminate" : false}
          onCheckedChange={handleContinentChange}
        />
        <Label className="w-full font-medium" htmlFor={continent}>
          {continent}
        </Label>
      </div>
      <div className="ml-4 flex flex-col gap-1">
        {filteredCountries.map((country) => (
          <div key={country} className="flex items-center gap-2">
            <Checkbox
              id={country}
              checked={selectedCountries.includes(country)}
              onCheckedChange={(checked: boolean) =>
                handleCountryChange(country, checked)
              }
            />
            <Label className="w-full" htmlFor={country}>
              {country}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

const LocationSelect = () => {
  const [selectedCountries, setSelectedCountries] = useQueryState<string[]>(
    "countries",
    {
      defaultValue: [],
      parse: (value: string) => (value ? value.split("+") : []),
      serialize: (value: string[]) => value.join("+"),
    }
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const handleSelectionChange = (newSelectedCountries: string[]) => {
    setSelectedCountries(newSelectedCountries);
  };

  const filteredLocations = locations
    .map((location) => {
      const filteredCountries = location.countries.filter((country) =>
        country.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      if (
        location.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      ) {
        return location;
      }
      if (filteredCountries.length > 0) {
        return { ...location, countries: filteredCountries };
      }
      return null;
    })
    .filter((location) => location !== null);


  // <Select value={status} onValueChange={handleValueChange}>
  //   <SelectTrigger className="mt-2 w-full md:w-32">

  return (
    <div>
      <Label className="font-medium block">Locations</Label>
      <Popover>
        <PopoverTrigger asChild className="mt-3 w-full md:w-fit">
          <Button variant="secondary" className="font-normal dark:bg-[#090E1A] hover:dark:bg-gray-950/50">
            Select Locations ({selectedCountries.length})
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
            {filteredLocations.map((location) => (
              <ContinentCheckbox
                key={location.name}
                continent={location.name}
                countries={location.countries}
                selectedCountries={selectedCountries}
                onChange={handleSelectionChange}
                searchTerm={debouncedSearchTerm}
              />
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export { LocationSelect };