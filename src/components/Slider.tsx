"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cx, focusRing } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, value = [0], ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cx(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-200">
      <SliderPrimitive.Range className="absolute h-full bg-blue-500" />
    </SliderPrimitive.Track>

    <SliderPrimitive.Thumb
      className={cx(
        "block size-4 rounded-full border-2 border-white bg-blue-500 shadow transition-colors disabled:pointer-events-none disabled:opacity-50",
        focusRing,
      )}
    />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
