"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import * as TooltipPrimitives from "@radix-ui/react-tooltip"

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

    <TooltipPrimitives.Provider>
      <TooltipPrimitives.Root open>
        <TooltipPrimitives.Trigger asChild>
          <SliderPrimitive.Thumb
            className={cx(
              "block size-4 rounded-full border-2 border-white bg-blue-500 shadow transition-colors disabled:pointer-events-none disabled:opacity-50",
              focusRing,
            )}
          />
        </TooltipPrimitives.Trigger>
        <TooltipPrimitives.Portal>
          <TooltipPrimitives.Content
            side="right"
            sideOffset={5}
            align="center"
            className={cx(
              // base
              "max-w-60 select-none rounded-md px-2.5 py-1.5 text-sm leading-5 shadow-md",
              // text color
              "text-gray-50 dark:text-gray-900",
              // background color
              "bg-gray-900 dark:bg-gray-50",
              // transition
              "will-change-[transform,opacity]",
              "data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideLeftAndFade data-[side=right]:animate-slideRightAndFade data-[side=top]:animate-slideUpAndFade data-[state=closed]:animate-hide",
            )}
          >
            {value && value[0] !== undefined ? value[0] : 0}

            <TooltipPrimitives.Arrow
              className="border-none fill-gray-900 dark:fill-gray-50"
              width={12}
              height={7}
              aria-hidden="true"
            />
          </TooltipPrimitives.Content>
        </TooltipPrimitives.Portal>
      </TooltipPrimitives.Root>
    </TooltipPrimitives.Provider>
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
