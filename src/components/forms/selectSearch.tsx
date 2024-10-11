"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Define the types for the option and props
interface Option {
  id: string;
  name: string;
}

interface ComboboxProps {
  options: Option[];           
  value: string;               
  setValue: (value: string) => void;
  placeholder?: string;       
}

export const ComboboxDemo: React.FC<ComboboxProps> = ({
  options,
  value,
  setValue,
  placeholder = "Select ...", 
}) => {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="max-w-[300px]  h-[45px] w-full  justify-between style-select-btn"
        >
          {value
            ? options.find((option) => option.id === value)?.name
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[300px] p-0  style-select-list bg-[#fff]">
        <Command className="">
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>No found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.id}
                  onSelect={(currentValue) => {
                    const newValue = currentValue === value ? "" : currentValue
                    setValue(newValue)
                    setOpen(false)
                  }}
                  className="relative p-0"
                >
                  <label className={`flex items-center min-h-[30px] w-full button ${value === option.id ? 'active' : ''}`}>
                    <input
                      type="radio"
                      value={option.id}
                      checked={value === option.id}
                      onChange={() => {
                        setValue(option.id)
                        setOpen(false)
                      }}
                      style={{ display: 'none' }} // Hide the native radio button
                    />
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {option.name}
                  </label>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
