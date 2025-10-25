"use client";

import dynamic from "next/dynamic";

// Dynamically import react-select (client-side only)
const Select = dynamic(() => import("react-select"), { ssr: false });

export default function ReactSelectWrapper(props) {
  return <Select {...props} />;
}
