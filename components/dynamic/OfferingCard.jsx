import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const OfferingCard = ({ 
  title,
  titleSuperscript = "",
  description,
  primaryButtonText = "Apply now",
  primaryButtonHref = "#",
  secondaryButtonText = "Tell me more",
  secondaryButtonHref = "#",
  showLine = true,
  containerClassName = "",
  onPrimaryClick,
  onSecondaryClick
}) => {
  return (
    <div className={cn(
      'bg-white border border-neutral-300 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 min-h-[280px] sm:min-h-[320px] md:min-h-[340px] flex flex-col',
      containerClassName
    )}>
        <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-secondary mb-4 sm:mb-5 md:mb-6 relative'>
          {title}
          {titleSuperscript && (
            <sup className='text-xs sm:text-sm -top-2 sm:-top-3'>{titleSuperscript}</sup>
          )}
          {showLine && (
            <span className='absolute w-10 sm:w-12 h-0.5 bg-primary -bottom-1.5 sm:-bottom-2 left-0'></span>
          )}
        </h3>
        
        <p className='text-xs sm:text-sm md:text-base text-secondary mb-4 sm:mb-5 md:mb-6 leading-relaxed'>
          {description}
        </p>
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-7 items-stretch sm:items-center mt-auto'>
            <Button 
              className="uppercase h-11 sm:h-12 md:h-[50px] w-full sm:w-1/2 text-xs sm:text-sm"
              onClick={onPrimaryClick}
              asChild={!!primaryButtonHref && !onPrimaryClick}
            >
              {primaryButtonHref && !onPrimaryClick ? (
                <a href={primaryButtonHref}>{primaryButtonText}</a>
              ) : (
                primaryButtonText
              )}
            </Button>
            <Button 
              variant="outline" 
              className="uppercase h-11 sm:h-12 md:h-[50px] w-full sm:w-1/2 text-xs sm:text-sm"
              onClick={onSecondaryClick}
              asChild={!!secondaryButtonHref && !onSecondaryClick}
            >
              {secondaryButtonHref && !onSecondaryClick ? (
                <a href={secondaryButtonHref}>{secondaryButtonText}</a>
              ) : (
                secondaryButtonText
              )}
            </Button>
        </div>
    </div>
  )
}

export default OfferingCard