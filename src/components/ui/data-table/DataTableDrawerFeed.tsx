import { RiAttachment2, RiCheckboxCircleFill } from "@remixicon/react"
import Image from "next/image"
import { Button } from "@/components/Button"
import { focusRing } from "@/lib/utils"
import { cx } from "@/lib/utils"

const activity = [
    { id: 1, type: 'submitted', person: { name: 'Emily Ross' }, date: '2d ago', dateTime: '2024-07-13T10:32' },
    { id: 2, type: 'added', person: { name: 'Emily Ross' }, date: '1d ago', dateTime: '2024-07-14T11:03' },
    {
        id: 3,
        type: 'commented',
        person: {
            name: 'Chelsea Hagon',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        comment: 'Re-classified expense from category "Consultation services" to "Coffee shop"',
        date: '3d ago',
        dateTime: '2023-01-23T15:56',
    },
    { id: 4, type: 'approved', person: { name: 'Maxime River' }, date: '10min ago', dateTime: '2024-07-15T09:01' },
]

export function DataTableDrawerFeed() {
    return (
        <>
            <ul role="list" className="space-y-6">
                {activity.map((activityItem, activityItemIdx) => (
                    <li key={activityItem.id} className="relative flex gap-x-4">
                        <div
                            className={cx(
                                activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6',
                                'absolute left-0 top-0 flex w-6 justify-center',
                            )}
                        >
                            <div className="w-px bg-gray-200" />
                        </div>
                        {activityItem.type === 'submitted' || activityItem.type === 'added' ? (
                            <>
                                <div className="relative flex size-6 flex-none items-center justify-center bg-white">
                                    <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                                </div>
                                <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                                    <span className="font-medium text-gray-900">{activityItem.person.name}</span>
                                    {activityItem.type === 'submitted' ? (
                                        <>
                                            {" "}{activityItem.type} expense
                                        </>
                                    ) : (
                                        <>
                                            {" "}{activityItem.type} receipt to expense
                                        </>
                                    )}
                                </p>
                                <time dateTime={activityItem.dateTime} className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                                    {activityItem.date}
                                </time>
                            </>
                        ) : activityItem.type === 'commented' ? (
                            <>
                                <img
                                    alt=""
                                    src={activityItem.person.imageUrl}
                                    className="relative mt-3 size-6 flex-none rounded-full bg-gray-50"
                                />
                                <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                                    <div className="flex justify-between gap-x-4">
                                        <div className="py-0.5 text-xs leading-5 text-gray-500">
                                            <span className="font-medium text-gray-900">{activityItem.person.name}</span> commented
                                        </div>
                                        <time dateTime={activityItem.dateTime} className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                                            {activityItem.date}
                                        </time>
                                    </div>
                                    <p className="text-sm leading-6 text-gray-500">{activityItem.comment}</p>
                                </div>
                            </>
                        ) : activityItem.type === 'approved' ? (
                            <>
                                <div className="relative flex size-6 flex-none items-center justify-center bg-white">
                                    <RiCheckboxCircleFill aria-hidden="true" className="size-5 text-blue-500" />
                                </div>
                                <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                                    <span className="font-medium text-gray-900">{activityItem.person.name}</span> {activityItem.type} the
                                    audit.
                                </p>
                                <time dateTime={activityItem.dateTime} className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                                    {activityItem.date}
                                </time>
                            </>

                        ) : null}
                    </li>
                ))}
            </ul>

            <div className="flex gap-x-3">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-6 flex-none rounded-full bg-gray-50"
                />
                <form action="#" className="relative flex-auto">
                    <div className={cx(
                        "overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300",
                        focusRing
                    )}>
                        <label htmlFor="comment" className="sr-only">
                            Add your comment
                        </label>
                        <textarea
                            id="comment"
                            name="comment"
                            rows={2}
                            placeholder="Add your comment..."
                            className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            defaultValue={''}
                        />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                        <div className="flex items-center space-x-5">
                            <div className="flex items-center">
                                <button
                                    type="button"
                                    className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                                >
                                    <RiAttachment2 aria-hidden="true" className="h-5 w-5" />
                                    <span className="sr-only">Attach a file</span>
                                </button>
                            </div>
                        </div>
                        {/* <Button
                            variant="secondary"
                            type="submit"
                        >
                            Comment
                        </Button> */}
                    </div>
                </form>
            </div>
        </>
    )
}
