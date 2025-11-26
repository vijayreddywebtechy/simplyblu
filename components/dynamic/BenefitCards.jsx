import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const BenefitCards = ({ 
  cards = [], 
  columns = 4,
  gapX = "gap-x-6 lg:gap-x-0",
  gapY = "gap-y-16",
  containerClassName = "",
  cardClassName = "",
  iconSize = { width: 72, height: 86 },
  innerIconSize = { width: 32, height: 32 }
}) => {
  const gridColsClass = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
  };

  return (
    <div 
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2",
        gridColsClass[columns] || "lg:grid-cols-4",
        gapX,
        gapY,
        "mb-8 sm:mb-12 md:mb-16",
        containerClassName
      )}
    >
      {cards.map((card, index) => {
        const isHighlighted = card.highlighted || false;
        const bgClass = isHighlighted 
          ? "bg-primary-dark border border-primary text-white" 
          : "bg-white border border-neutral-300 text-secondary";
        const textClass = isHighlighted ? "text-white" : "text-secondary";

        return (
          <div 
            key={card.id || index} 
            className={cn(
              "text-center p-5",
              bgClass,
              cardClassName
            )}
          >
            <div 
              className="-mt-14 mx-auto relative"
              style={{ 
                width: `${iconSize.width}px`, 
                height: `${iconSize.height}px` 
              }}
            >
              <Image
                src={card.bgIcon}
                alt={card.title}
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                  src={card.icon} 
                  alt="" 
                  width={innerIconSize.width} 
                  height={innerIconSize.height} 
                />
              </div>
            </div>
            <div className="mt-7">
              <h4 className={cn(
                "text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-3",
                textClass
              )}>
                {card.title}
              </h4>
              <p className={cn("text-base mb-4", textClass)}>
                {card.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BenefitCards;
