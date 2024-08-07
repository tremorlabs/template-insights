"use client"

import React from "react"
import {
  RiArrowRightUpLine,
  RiFacebookCircleFill,
  RiGithubFill,
  RiGoogleFill,
  RiLinkedinFill,
  RiNpmjsLine,
  RiPagesLine,
  RiRedditFill,
  RiSearchLine,
  RiTwitterFill,
  RiYoutubeFill,
} from "@remixicon/react"

import { AreaChart } from "@/components/AreaChart"
import { BarList } from "@/components/BarList"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/Dialog"
import { Input } from "@/components/Input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs"

const data = [
  {
    date: "Aug 01",
    "Page views": 7100,
    "Unique visitors": 4434,
  },
  {
    date: "Aug 02",
    "Page views": 10943,
    "Unique visitors": 6954,
  },
  {
    date: "Aug 03",
    "Page views": 10889,
    "Unique visitors": 7100,
  },
  {
    date: "Aug 04",
    "Page views": 10909,
    "Unique visitors": 7909,
  },
  {
    date: "Aug 05",
    "Page views": 10778,
    "Unique visitors": 7103,
  },
  {
    date: "Aug 06",
    "Page views": 10900,
    "Unique visitors": 7534,
  },
  {
    date: "Aug 07",
    "Page views": 10129,
    "Unique visitors": 7412,
  },
  {
    date: "Aug 08",
    "Page views": 10021,
    "Unique visitors": 7834,
  },
  {
    date: "Aug 09",
    "Page views": 10279,
    "Unique visitors": 7159,
  },
  {
    date: "Aug 10",
    "Page views": 10224,
    "Unique visitors": 8260,
  },
  {
    date: "Aug 11",
    "Page views": 10380,
    "Unique visitors": 4965,
  },
  {
    date: "Aug 12",
    "Page views": 10414,
    "Unique visitors": 4989,
  },
  {
    date: "Aug 13",
    "Page views": 6540,
    "Unique visitors": 4839,
  },
  {
    date: "Aug 14",
    "Page views": 6634,
    "Unique visitors": 4343,
  },
  {
    date: "Aug 15",
    "Page views": 7124,
    "Unique visitors": 4903,
  },
  {
    date: "Aug 16",
    "Page views": 7934,
    "Unique visitors": 5273,
  },
  {
    date: "Aug 17",
    "Page views": 10287,
    "Unique visitors": 6900,
  },
  {
    date: "Aug 18",
    "Page views": 10323,
    "Unique visitors": 6732,
  },
  {
    date: "Aug 19",
    "Page views": 10511,
    "Unique visitors": 6523,
  },
  {
    date: "Aug 20",
    "Page views": 11043,
    "Unique visitors": 7422,
  },
  {
    date: "Aug 21",
    "Page views": 6700,
    "Unique visitors": 4334,
  },
  {
    date: "Aug 22",
    "Page views": 6900,
    "Unique visitors": 4943,
  },
  {
    date: "Aug 23",
    "Page views": 7934,
    "Unique visitors": 7812,
  },
  {
    date: "Aug 24",
    "Page views": 9021,
    "Unique visitors": 7729,
  },
  {
    date: "Aug 25",
    "Page views": 9198,
    "Unique visitors": 7178,
  },
  {
    date: "Aug 26",
    "Page views": 9557,
    "Unique visitors": 7158,
  },
  {
    date: "Aug 27",
    "Page views": 9959,
    "Unique visitors": 7100,
  },
  {
    date: "Aug 28",
    "Page views": 10034,
    "Unique visitors": 7934,
  },
  {
    date: "Aug 29",
    "Page views": 10243,
    "Unique visitors": 7223,
  },
  {
    date: "Aug 30",
    "Page views": 10078,
    "Unique visitors": 8779,
  },
  {
    date: "Aug 31",
    "Page views": 11134,
    "Unique visitors": 8190,
  },
  {
    date: "Sep 01",
    "Page views": 12347,
    "Unique visitors": 4839,
  },
  {
    date: "Sep 02",
    "Page views": 12593,
    "Unique visitors": 5153,
  },
  {
    date: "Sep 03",
    "Page views": 12043,
    "Unique visitors": 5234,
  },
  {
    date: "Sep 04",
    "Page views": 12144,
    "Unique visitors": 5478,
  },
  {
    date: "Sep 05",
    "Page views": 12489,
    "Unique visitors": 5741,
  },
  {
    date: "Sep 06",
    "Page views": 12748,
    "Unique visitors": 6743,
  },
  {
    date: "Sep 07",
    "Page views": 12933,
    "Unique visitors": 7832,
  },
  {
    date: "Sep 08",
    "Page views": 13028,
    "Unique visitors": 8943,
  },
  {
    date: "Sep 09",
    "Page views": 13412,
    "Unique visitors": 9932,
  },
  {
    date: "Sep 10",
    "Page views": 13649,
    "Unique visitors": 10139,
  },
  {
    date: "Sep 11",
    "Page views": 13748,
    "Unique visitors": 10441,
  },
  {
    date: "Sep 12",
    "Page views": 13148,
    "Unique visitors": 10933,
  },
  {
    date: "Sep 13",
    "Page views": 12839,
    "Unique visitors": 10073,
  },
  {
    date: "Sep 14",
    "Page views": 12428,
    "Unique visitors": 10128,
  },
  {
    date: "Sep 15",
    "Page views": 12012,
    "Unique visitors": 10412,
  },
  {
    date: "Sep 16",
    "Page views": 11801,
    "Unique visitors": 9501,
  },
  {
    date: "Sep 17",
    "Page views": 10102,
    "Unique visitors": 7923,
  },
  {
    date: "Sep 18",
    "Page views": 12132,
    "Unique visitors": 10212,
  },
  {
    date: "Sep 19",
    "Page views": 12901,
    "Unique visitors": 10101,
  },
  {
    date: "Sep 20",
    "Page views": 13132,
    "Unique visitors": 10132,
  },
  {
    date: "Sep 21",
    "Page views": 14132,
    "Unique visitors": 10212,
  },
  {
    date: "Sep 22",
    "Page views": 14245,
    "Unique visitors": 12163,
  },
  {
    date: "Sep 23",
    "Page views": 14328,
    "Unique visitors": 10036,
  },
  {
    date: "Sep 24",
    "Page views": 14949,
    "Unique visitors": 8985,
  },
  {
    date: "Sep 25",
    "Page views": 15967,
    "Unique visitors": 9700,
  },
  {
    date: "Sep 26",
    "Page views": 17349,
    "Unique visitors": 10943,
  },
]

const data1 = [
  {
    name: "/",
    value: 20874,
  },
  {
    name: "/components",
    value: 19188,
  },
  {
    name: "/docs/getting-started/installation",
    value: 17922,
  },
  {
    name: "/docs/visualizations/area-chart",
    value: 10067,
  },
  {
    name: "/docs/visualizations/bar-chart",
    value: 9067,
  },
  {
    name: "/docs/visualizations/line-chart",
    value: 9067,
  },
  {
    name: "/docs/visualizations/donut-chart",
    value: 8066,
  },
  {
    name: "/docs/visualizations/spark-charts",
    value: 6677,
  },
  {
    name: "/docs/visualizations/barlist",
    value: 6604,
  },
  {
    name: "/docs/ui/table",
    value: 6604,
  },
  {
    name: "/docs/ui/button",
    value: 6109,
  },
  {
    name: "/docs/ui/select",
    value: 4237,
  },
  {
    name: "/docs/ui/card",
    value: 1261,
  },
]

const data2 = [
  {
    name: "google.com",
    value: 9882,
    icon: RiGoogleFill,
  },
  {
    name: "twitter.com",
    value: 1904,
    icon: RiTwitterFill,
  },
  {
    name: "github.com",
    value: 1904,
    icon: RiGithubFill,
  },
  {
    name: "youtube.com",
    value: 1118,
    icon: RiYoutubeFill,
  },
  {
    name: "reddit.com",
    value: 396,
    icon: RiRedditFill,
  },
  {
    name: "bing.com",
    value: 302,
    icon: RiSearchLine,
  },
  {
    name: "duckduckgo.com",
    value: 281,
    icon: RiSearchLine,
  },
  {
    name: "npmjs.com",
    value: 98,
    icon: RiNpmjsLine,
  },
  {
    name: "linkedin.com",
    value: 71,
    icon: RiLinkedinFill,
  },
  {
    name: "news.ycombinator.com",
    value: 60,
    icon: RiPagesLine,
  },
  {
    name: "facebook.com",
    value: 51,
    icon: RiFacebookCircleFill,
  },
]

const data3 = [
  {
    name: "/components",
    value: 60874,
  },
  {
    name: "/",
    value: 51188,
  },
  {
    name: "/docs/getting-started/installation",
    value: 38922,
  },
  {
    name: "/docs/visualizations/area-chart",
    value: 20067,
  },
  {
    name: "/docs/visualizations/bar-chart",
    value: 19067,
  },
  {
    name: "/docs/visualizations/line-chart",
    value: 18131,
  },
  {
    name: "/docs/visualizations/donut-chart",
    value: 15107,
  },
  {
    name: "/docs/visualizations/spark-charts",
    value: 13103,
  },
  {
    name: "/docs/visualizations/data-bars",
    value: 9701,
  },
  {
    name: "/docs/visualizations/barlist",
    value: 6502,
  },
  {
    name: "/docs/ui/table",
    value: 6401,
  },
  {
    name: "/docs/ui/card",
    value: 5929,
  },
  {
    name: "/docs/ui/button",
    value: 5710,
  },
  {
    name: "/docs/ui/select",
    value: 4109,
  },
]

const data4 = [
  {
    name: "google.com",
    value: 12892,
    icon: RiGoogleFill,
  },
  {
    name: "twitter.com",
    value: 2070,
    icon: RiTwitterFill,
  },
  {
    name: "github.com",
    value: 1296,
    icon: RiGithubFill,
  },
  {
    name: "youtube.com",
    value: 779,
    icon: RiYoutubeFill,
  },
  {
    name: "reddit.com",
    value: 621,
    icon: RiRedditFill,
  },
  {
    name: "bing.com",
    value: 573,
    icon: RiSearchLine,
  },
  {
    name: "duckduckgo.com",
    value: 381,
    icon: RiSearchLine,
  },
  {
    name: "npmjs.com",
    value: 302,
    icon: RiNpmjsLine,
  },
  {
    name: "linkedin.com",
    value: 199,
    icon: RiLinkedinFill,
  },
  {
    name: "news.ycombinator.com",
    value: 181,
    icon: RiPagesLine,
  },
  {
    name: "facebook.com",
    value: 170,
    icon: RiFacebookCircleFill,
  },
]

const summary = [
  {
    name: "Unique visitors",
    type: "Visitors",
    value: "216.8K",
    categories: [
      {
        name: "Top Spenders",
        data: data1,
      },
      {
        name: "Top Vendors",
        data: data2,
      },
    ],
  },
  {
    name: "Page views",
    type: "Views",
    value: "271K",
    categories: [
      {
        name: "Top Spenders",
        data: data3,
      },
      {
        name: "Top Vendors",
        data: data4,
      },
    ],
  },
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

function useResizeObserver(
  elementRef: React.RefObject<Element>,
): ResizeObserverEntry | undefined {
  const [entry, setEntry] = React.useState<ResizeObserverEntry>()

  const updateEntry = ([entry]: ResizeObserverEntry[]): void => {
    setEntry(entry)
  }

  React.useEffect(() => {
    const node = elementRef?.current
    if (!node) return

    const observer = new ResizeObserver(updateEntry)

    observer.observe(node)

    return () => observer.disconnect()
  }, [elementRef])

  return entry
}

const FilterScroll = React.forwardRef(
  ({ children }: React.PropsWithChildren, forwardedRef) => {
    const ref = React.useRef<HTMLDivElement>(null)
    React.useImperativeHandle(forwardedRef, () => ref.current)

    const [scrollProgress, setScrollProgress] = React.useState(1)

    const updateScrollProgress = React.useCallback(() => {
      if (!ref.current) return
      const { scrollTop, scrollHeight, clientHeight } = ref.current

      setScrollProgress(
        scrollHeight === clientHeight
          ? 1
          : scrollTop / (scrollHeight - clientHeight),
      )
    }, [])

    const resizeObserverEntry = useResizeObserver(ref)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(updateScrollProgress, [resizeObserverEntry])

    return (
      <>
        <div
          className="h-96 overflow-y-scroll py-4"
          ref={ref}
          onScroll={updateScrollProgress}
        >
          {children}
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-white"
          style={{ opacity: 1 - Math.pow(scrollProgress, 2) }}
        />
      </>
    )
  },
)

FilterScroll.displayName = "FilterScroll"

export default function UsageOverview() {
  const [selectedIndex, setSelectedIndex] = React.useState("Unique visitors")

  const handleIndexChange = (index: string) => {
    setSelectedIndex(index)
  }

  const [dialog, setDialog] = React.useState({
    open: false,
    index: 0,
  })
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredItems =
    summary
      .find((tab) => tab.name === selectedIndex)
      ?.categories[
        dialog.index
      ].data.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
    []

  const mainListContainer = React.useRef<HTMLDivElement>(null)

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {summary
          .find((tab) => tab.name === selectedIndex)
          ?.categories.map((category, index) => (
            <div key={category.name} className="relative">
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-gray-900 dark:text-gray-50">
                  {category.name}
                </p>
                <span className="text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                  {summary.find((tab) => tab.name === selectedIndex)?.type}
                </span>
              </div>
              <BarList
                data={category.data.slice(0, 5)}
                valueFormatter={valueFormatter}
                className="mt-4"
              />
              <div className="absolute inset-x-0 bottom-0 flex justify-center rounded-b-sm bg-gradient-to-t from-white to-transparent py-7 dark:from-gray-950">
                <Button
                  variant="secondary"
                  className="gap-1.5 rounded-full px-2.5 py-1.5 text-xs"
                  onClick={() =>
                    setDialog({
                      open: true,
                      index: index,
                    })
                  }
                >
                  Show more
                  <RiArrowRightUpLine
                    className="-mr-px size-4 shrink-0"
                    aria-hidden={true}
                  />
                </Button>
              </div>
            </div>
          ))}
      </div>

      <Dialog
        open={dialog.open}
        onOpenChange={(open) => setDialog({ ...dialog, open })}
      >
        <DialogContent className="p-0">
          <DialogHeader className="border-b border-gray-200 px-6 pb-4 pt-6 dark:border-gray-900">
            <DialogTitle className="flex items-center justify-between">
              <p className="text-base font-medium text-gray-900 dark:text-gray-50">
                Pages
              </p>
              <p className="text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                {summary.find((tab) => tab.name === selectedIndex)?.type}
              </p>
            </DialogTitle>
            <Input
              type="search"
              placeholder="Search page..."
              className="mt-2"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </DialogHeader>
          {/* only left padding used in parent to align scrollbar all the way to the right */}
          <div className="relative pl-6">
            <FilterScroll ref={mainListContainer}>
              {filteredItems.length > 0 ? (
                <BarList
                  data={filteredItems}
                  valueFormatter={valueFormatter}
                  className="pr-6"
                />
              ) : (
                <p className="flex h-full items-center justify-center text-sm text-gray-900 dark:text-gray-50">
                  No results.
                </p>
              )}
            </FilterScroll>
          </div>
          <DialogFooter className="border-t border-gray-200 bg-gray-50 px-6 py-6 dark:border-gray-900 dark:bg-[#090E1A]">
            <DialogClose asChild>
              <Button
                onClick={() => setSearchQuery("")}
                className="w-full"
                variant="secondary"
              >
                Go back
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
