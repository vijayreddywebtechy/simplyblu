import React, { useState } from 'react';
import { Search, X, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const CountryPickerDropdown = ({ 
  isOpen: externalIsOpen, 
  onOpenChange: externalOnOpenChange,
  triggerButton = true,
  selectedCountry: externalSelectedCountry,
  onCountryChange
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [internalSelectedCountry, setInternalSelectedCountry] = useState({
    name: 'South Africa',
    flag: 'https://flagcdn.com/w80/za.png',
    code: 'ZA'
  });

  // Use external state if provided, otherwise use internal state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = externalOnOpenChange !== undefined ? externalOnOpenChange : setInternalIsOpen;
  const selectedCountry = externalSelectedCountry !== undefined ? externalSelectedCountry : internalSelectedCountry;

  const countries = {
    Africa: [
      { name: 'Angola', flag: 'https://flagcdn.com/w80/ao.png', code: 'AO' },
      { name: 'Botswana', flag: 'https://flagcdn.com/w80/bw.png', code: 'BW' },
      { name: "Côte-d'Ivoire", flag: 'https://flagcdn.com/w80/ci.png', code: 'CI' },
      { name: 'DRC', flag: 'https://flagcdn.com/w80/cd.png', code: 'CD' },
      { name: 'Egypt', flag: 'https://flagcdn.com/w80/eg.png', code: 'EG' },
      { name: 'Eswatini', flag: 'https://flagcdn.com/w80/sz.png', code: 'SZ' },
      { name: 'Ghana', flag: 'https://flagcdn.com/w80/gh.png', code: 'GH' },
      { name: 'Kenya', flag: 'https://flagcdn.com/w80/ke.png', code: 'KE' },
      { name: 'Lesotho', flag: 'https://flagcdn.com/w80/ls.png', code: 'LS' },
      { name: 'Malawi', flag: 'https://flagcdn.com/w80/mw.png', code: 'MW' },
      { name: 'Mauritius', flag: 'https://flagcdn.com/w80/mu.png', code: 'MU' },
      { name: 'Mozambique', flag: 'https://flagcdn.com/w80/mz.png', code: 'MZ' },
      { name: 'Namibia', flag: 'https://flagcdn.com/w80/na.png', code: 'NA' },
      { name: 'Nigeria', flag: 'https://flagcdn.com/w80/ng.png', code: 'NG' },
      { name: 'South Africa', flag: 'https://flagcdn.com/w80/za.png', code: 'ZA' },
      { name: 'Tanzania', flag: 'https://flagcdn.com/w80/tz.png', code: 'TZ' },
      { name: 'Uganda', flag: 'https://flagcdn.com/w80/ug.png', code: 'UG' },
      { name: 'Zambia', flag: 'https://flagcdn.com/w80/zm.png', code: 'ZM' },
      { name: 'Zimbabwe', flag: 'https://flagcdn.com/w80/zw.png', code: 'ZW' }
    ],
    Europe: [
      { name: 'Isle of Man', flag: 'https://flagcdn.com/w80/im.png', code: 'IM' },
      { name: 'Jersey', flag: 'https://flagcdn.com/w80/je.png', code: 'JE' },
      { name: 'United Kingdom', flag: 'https://flagcdn.com/w80/gb.png', code: 'GB' }
    ],
    'Asia Middle East': [
      { name: 'China', flag: 'https://flagcdn.com/w80/cn.png', code: 'CN' },
      { name: 'United Arab Emirates', flag: 'https://flagcdn.com/w80/ae.png', code: 'AE' }
    ],
    Americas: [
      { name: 'United States of America', flag: 'https://flagcdn.com/w80/us.png', code: 'US' }
    ]
  };

  const filterCountries = () => {
    if (!searchQuery.trim()) return countries;

    const filtered = {};
    Object.keys(countries).forEach(region => {
      const matchedCountries = countries[region].filter(country =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (matchedCountries.length > 0) {
        filtered[region] = matchedCountries;
      }
    });
    return filtered;
  };

  const handleCountrySelect = (country) => {
    if (onCountryChange) {
      onCountryChange(country);
    } else {
      setInternalSelectedCountry(country);
    }
    setIsOpen(false);
    setSearchQuery('');
  };

  const filteredCountries = filterCountries();

  return (
    <>
      {/* Trigger Button - Only render if triggerButton prop is true */}
      {triggerButton && (
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="flex items-center gap-2 cursor-pointer text-sm text-secondary"
        >
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden relative flex items-center justify-center bg-white border border-gray-200">
            <img
              src={selectedCountry.flag}
              alt={`${selectedCountry.name} Flag`}
              className="w-full h-full object-cover"
            />
          </div>
          <span>Change country</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      )}

      {/* Sheet Component */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent 
          side="top" 
          className="w-full h-full overflow-y-auto p-0 sm:max-w-none"
        >
          <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <SheetHeader className="py-4">
                <div className="flex items-center justify-between">
                  <SheetTitle className="text-xl sm:text-2xl font-normal text-gray-900">
                    Choose your country or region
                  </SheetTitle>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setSearchQuery('');
                    }}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              </SheetHeader>

              {/* Search Bar */}
              <div className="pb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Start typing the country name here"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Countries List */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {Object.keys(filteredCountries).length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                No countries found matching "{searchQuery}"
              </div>
            ) : (
              Object.keys(filteredCountries).map((region) => (
                <div key={region} className="mb-8">
                  <h3 className="text-lg font-normal text-gray-700 mb-4">
                    {region}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {filteredCountries[region].map((country) => (
                      <button
                        key={country.code}
                        onClick={() => handleCountrySelect(country)}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left border border-transparent hover:border-gray-200"
                      >
                        <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
                          <img
                            src={country.flag}
                            alt={`${country.name} Flag`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-sm text-gray-900 truncate">
                          {country.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CountryPickerDropdown;