import React from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

const CustomInput = ({
  type = 'text',
  placeholder = '',
  prefix,
  prefixType = 'text', // 'text', 'icon', 'image'
  error = '',
  success = '',
  value,
  onChange,
  className = '',
  ...props 
}) => {

    const baseInputStyles = `w-full px-3 py-2.5 border border-gray-300 rounded-lg 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
    bg-white text-gray-900 placeholder:text-gray-500
    font-bspro text-sm transition-all duration-200
    disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
    ${prefix ? 'pl-10' : ''}
    ${error ? 'border-red-500 focus:ring-red-500' : ''}
    ${success && !error ? 'border-green-500 focus:ring-green-500' : ''}`;

  const renderPrefix = () => {
    if (!prefix) return null;

    switch (prefixType) {
      case 'icon':
        const IconComponent = prefix;
        return <IconComponent className="w-4 h-4 text-gray-400" />;
      case 'image':
        return <img src={prefix} alt="" className="w-4 h-4 object-contain" />;
      case 'text':
      default:
        return <span className="text-gray-400 text-sm">{prefix}</span>;
    }
  };

  return (
    <div className="w-full">
      <div className="relative w-full">
        {prefix && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center pointer-events-none">
            {renderPrefix()}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${baseInputStyles} ${className}`}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />
      </div>
      
      {error && (
        <div className="flex items-center gap-1.5 mt-1.5">
          <AlertCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
          <p className="text-xs text-red-500 font-bspro">{error}</p>
        </div>
      )}
      
      {success && !error && (
        <div className="flex items-center gap-1.5 mt-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
          <p className="text-xs text-green-500 font-bspro">{success}</p>
        </div>
      )}
    </div>
  )
}

export default CustomInput