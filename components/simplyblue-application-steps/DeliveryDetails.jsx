import React from 'react'

const DeliveryDetails = ({ onNext, onBack }) => {
  return (
        <div className="space-y-4">
      <div>
        <label className="text-sm font-medium block mb-2">Ad Group Name</label>
        <input
          type="text"
          placeholder="Enter ad group name"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={onBack}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default DeliveryDetails