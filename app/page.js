"use client";

import { useState } from "react";
import CustomDialog from "@/components/dynamic/CustomDialog";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      Welcome

      {/* External Button */}
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-primary text-white rounded-lg"
      >
        Open Dialog
      </button>

      {/* Dialog */}
      <CustomDialog
        open={open}
        setOpen={setOpen}
        title="Confirm Action"
        confirmText="Yes, Delete"
        cancelText="No, Keep"
        onConfirm={() => {
          console.log("Confirmed!");
          setOpen(false);
        }}
      >
        <p>Are you sure you want to delete this item?</p>
      </CustomDialog>

    </div>
  );
}
