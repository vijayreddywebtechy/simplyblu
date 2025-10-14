"use client";

import React, { useState } from "react";
import CustomInput from "../ui/CustomInput";
import ReactSelect from "../ui/ReactSelect";

const PersonalDetails = ({ onNext }) => {
  const [framework, setFramework] = useState(null);
  const [citizenship, setCitizenship] = useState(null);

  const options = [
    { value: "react", label: "React" },
    { value: "nextjs", label: "Next.js" },
    { value: "tailwind", label: "Tailwind CSS" },
  ];

  return (
    <div className="border border-gray-200 rounded-xl">
      <div className="p-4">
        <h3 className="font-bspro text-xl font-medium text-gray-600 mb-8">
          Personal Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              NAME (as per ID) NAME (as per ID){" "}
            </label>
            <CustomInput
              placeholder="Enter your first name"
              // value=""
              // onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              SURNAME (as per ID)
            </label>
            <CustomInput
              placeholder="Enter your surname"
              // value=""
              // onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              ID NUMBER
            </label>
            <CustomInput
              type="number"
              placeholder="Enter your ID number"
              // value=""
              // onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              CELL NUMBER
            </label>
            <CustomInput
              type="number"
              placeholder="Enter your phone number"
              // value=""
              // onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              CELL NUMBER
            </label>
            <CustomInput
              type="email"
              placeholder="Force@gmail.com"
              // value=""
              // onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              NATIONALITY
            </label>
            <ReactSelect
              label="Choose Framework"
              options={options}
              value={framework}
              onChange={setFramework}
              placeholder="Please Select"
              required
            />
          </div>
          <div>
            <label className="font-bspro text-xs font-medium text-gray-500 block mb-1.5">
              COUNTRY OF CITIZENSHIP
            </label>
            <ReactSelect
              label="Choose Framework"
              options={options}
              value={citizenship}
              onChange={setCitizenship}
              placeholder="Please Select"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-6 bg-slate-50 p-4">
        <button
          onClick={onNext}
          className="px-4 py-0.5 text-primary hover:bg-primary font-bspro text-sm leading-normal font-bold rounded transition"
        >
          conti
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;
