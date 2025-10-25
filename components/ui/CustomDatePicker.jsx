"use client"
import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

export function ShadCnDatePicker({ 
  label = "Date of birth",
  value,
  onChange,
  placeholder = "Select date",
  id = "date"
}) {
  const [internalDate, setInternalDate] = React.useState(value)
  
  const date = value !== undefined ? value : internalDate

  const handleChange = (e) => {
    const newDate = e.target.value ? new Date(e.target.value) : undefined
    if (value === undefined) {
      setInternalDate(newDate)
    }
    if (onChange) {
      onChange(newDate)
    }
  }

  // Format date as YYYY-MM-DD for input
  const formatDateForInput = (date) => {
    if (!date) return ""
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="px-1 text-sm font-medium">
        {label}
      </label>
      <input
        type="date"
        id={id}
        value={formatDateForInput(date)}
        onChange={handleChange}
        className="w-48 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}