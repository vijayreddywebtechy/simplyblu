import React, { useState } from 'react';

// Reusable Radio Button Component
const CustomRadio = ({ 
  id, 
  name, 
  value, 
  checked, 
  onChange, 
  label,
  disabled = false 
}) => {
  return (
    <label 
      htmlFor={id} 
      className={`inline-flex items-center cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="sr-only"
      />
      <span 
        className={`
          relative flex items-center justify-center
          w-6 h-6 rounded-full border-2 transition-all
          ${checked 
            ? 'border-blue-500 bg-white' 
            : 'border-gray-300 bg-white hover:border-gray-400'
          }
          ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        {checked && (
          <span className="w-3.5 h-3.5 rounded-full bg-primary transition-transform scale-100"></span>
        )}
      </span>
      {label && (
        <span className="ml-2 text-base font-bspro leading-normal text-gray-700 select-none">
          {label}
        </span>
      )}
    </label>
  );
};

export default CustomRadio;

// Demo Component
// export default function RadioButtonDemo() {
//   const [selectedOption, setSelectedOption] = useState('option1');
//   const [selectedColor, setSelectedColor] = useState('blue');

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-2xl mx-auto space-y-8">
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <h2 className="text-xl font-semibold mb-4 text-gray-800">
//             Select an Option
//           </h2>
//           <div className="space-y-3">
//             <CustomRadio
//               id="option1"
//               name="options"
//               value="option1"
//               label="Option 1"
//               checked={selectedOption === 'option1'}
//               onChange={(e) => setSelectedOption(e.target.value)}
//             />
//             <CustomRadio
//               id="option2"
//               name="options"
//               value="option2"
//               label="Option 2"
//               checked={selectedOption === 'option2'}
//               onChange={(e) => setSelectedOption(e.target.value)}
//             />
//             <CustomRadio
//               id="option3"
//               name="options"
//               value="option3"
//               label="Option 3"
//               checked={selectedOption === 'option3'}
//               onChange={(e) => setSelectedOption(e.target.value)}
//             />
//             <CustomRadio
//               id="option4"
//               name="options"
//               value="option4"
//               label="Disabled Option"
//               checked={selectedOption === 'option4'}
//               onChange={(e) => setSelectedOption(e.target.value)}
//               disabled
//             />
//           </div>
//           <p className="mt-4 text-sm text-gray-600">
//             Selected: <span className="font-medium">{selectedOption}</span>
//           </p>
//         </div>

//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <h2 className="text-xl font-semibold mb-4 text-gray-800">
//             Choose a Color
//           </h2>
//           <div className="space-y-3">
//             <CustomRadio
//               id="blue"
//               name="color"
//               value="blue"
//               label="Blue"
//               checked={selectedColor === 'blue'}
//               onChange={(e) => setSelectedColor(e.target.value)}
//             />
//             <CustomRadio
//               id="red"
//               name="color"
//               value="red"
//               label="Red"
//               checked={selectedColor === 'red'}
//               onChange={(e) => setSelectedColor(e.target.value)}
//             />
//             <CustomRadio
//               id="green"
//               name="color"
//               value="green"
//               label="Green"
//               checked={selectedColor === 'green'}
//               onChange={(e) => setSelectedColor(e.target.value)}
//             />
//           </div>
//           <p className="mt-4 text-sm text-gray-600">
//             Selected: <span className="font-medium">{selectedColor}</span>
//           </p>
//         </div>

//         <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//           <h3 className="font-semibold text-blue-900 mb-2">Usage Example:</h3>
//           <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
// {`<CustomRadio
//   id="option1"
//   name="options"
//   value="option1"
//   label="Option 1"
//   checked={selectedValue === 'option1'}
//   onChange={(e) => setSelectedValue(e.target.value)}
// />`}
//           </pre>
//         </div>
//       </div>
//     </div>
//   );
// }