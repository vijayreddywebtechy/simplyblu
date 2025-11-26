"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CustomDialog({ 
  open, 
  setOpen, 
  title = "Dialog Title",
  children,
  footer,
  size = "md",
  showHeader = true,
  showFooter = true,
  headerClassName = "",
  contentClassName = "",
  footerClassName = "",
  onConfirm,
  onCancel,
  confirmText = "Save changes",
  cancelText = "Cancel",
  showCancel = true,
  showConfirm = true,
}) {
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    full: "max-w-full",
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent 
        className={cn(
          "w-full p-0 overflow-hidden border-none rounded-xl shadow-xl gap-0 [&>button]:hidden",
          sizeClasses[size]
        )}
      >
        {/* Header */}
        {showHeader && (
          <div className={cn("bg-primary-dark flex items-center justify-between p-4 relative", headerClassName)}>
            <DialogHeader>
              <DialogTitle className="text-lg md:text-xl font-normal text-white pr-4">
                {title}
              </DialogTitle>
            </DialogHeader>
            {/* Custom Close Button */}
            <DialogClose asChild>
              <button 
                className="ml-1 p-1 rounded-md hover:bg-white/20 transition"
                aria-label="Close dialog"
              >
                <X className="w-6 h-6 text-white" strokeWidth={1.5} />
              </button>
            </DialogClose>
          </div>
        )}

        {/* Body */}
        <div className={cn("p-4", contentClassName)}>
          {children}
        </div>

        {/* Footer */}
        {showFooter && (
          <DialogFooter className={cn("bg-gray-50 py-3 px-4 flex justify-end gap-2", footerClassName)}>
            {footer || (
              <>
                {showCancel && (
                  <DialogClose asChild>
                    <Button variant="outline" className="w-full rounded-lg uppercase" onClick={onCancel}>
                      {cancelText}
                    </Button>
                  </DialogClose>
                )}

                {showConfirm && (
                  <Button 
                    type="submit" 
                    className="w-full rounded-lg uppercase"
                    onClick={onConfirm}
                  >
                    {confirmText}
                  </Button>
                )}
              </>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
