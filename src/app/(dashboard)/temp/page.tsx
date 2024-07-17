"use client"

import React from "react"

import { Button } from "@/components/Button"
import {
    Drawer,
    DrawerBody,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/Drawer"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from "@/components/Table"

type StateType = [boolean, () => void, () => void, () => void] & {
    state: boolean
    open: () => void
    close: () => void
    toggle: () => void
}

const useToggleState = (initial = false) => {
    const [state, setState] = React.useState<boolean>(initial)

    const close = () => {
        setState(false)
    }

    const open = () => {
        setState(true)
    }

    const toggle = () => {
        setState((state) => !state)
    }

    const hookData = [state, open, close, toggle] as StateType
    hookData.state = state
    hookData.open = open
    hookData.close = close
    hookData.toggle = toggle
    return hookData
}

interface Book {
    title: string
    author: string
    year: number
    genre: string
    sold: string
    summary: string
}

const books: Book[] = [
    {
        title: "Twenty Thousand Leagues Under the Sea",
        author: "Maxime Le River",
        year: 1870,
        genre: "Science Fiction",
        sold: "100,232,232",
        summary:
            "The novel chronicles the adventures of Captain Nemo and his submarine, the Nautilus, as seen by Professor Pierre Aronnax. After being captured by the mysterious captain, Aronnax, his servant Conseil, and a Canadian whaler named Ned Land, experience the wonders of the underwater world. Throughout their journey, they encounter various marine life, explore underwater forests, and discover the lost city of Atlantis. They also face dangers, such as giant squids and treacherous underwater tunnels. Ultimately, they must decide whether to remain with Captain Nemo or attempt to escape his obsessive quest for revenge against the surface world.",
    },
    {
        title: "Journey to the Center of the Earth",
        author: "Jules Verne",
        year: 1864,
        genre: "Science Fiction",
        sold: "78,000,79",
        summary:
            "Professor Otto Lidenbrock discovers an ancient manuscript that points to a passage to the center of the Earth. Accompanied by his nephew Axel and their guide, Hans Belker, they embark on an expedition to Iceland to find the entrance to the subterranean world. They descend through volcanic tubes and encounter a series of remarkable underground environments, including vast caverns, subterranean seas, and prehistoric creatures. Along the way, they face numerous challenges and near-death experiences. Their journey is not only a physical adventure but also a scientific quest to understand the Earth's inner layers, ultimately returning to the surface with a wealth of knowledge and a new perspective on the natural world.",
    },
    {
        title: "Around the World in Eighty Days",
        author: "Friedrich Dürrenmatt",
        year: 1873,
        genre: "Adventure",
        sold: "90,100,132",
        summary:
            "Phileas Fogg, an English gentleman, wagers that he can circumnavigate the globe in just eighty days. Accompanied by his loyal French valet, Passepartout, Fogg sets off on a whirlwind adventure across various countries and continents. Their journey is filled with obstacles, including delays, natural disasters, and relentless pursuit by a detective named Fix, who mistakenly believes Fogg is a bank robber. Despite these challenges, Fogg remains calm and determined to win the bet. In the end, Fogg's meticulous planning and resourcefulness, along with some unexpected help, allow him to complete the journey just in time, proving that with determination and ingenuity, anything is possible.",
    },
    {
        title: "The Mysterious Island",
        author: "Thomas Schaefli",
        year: 1874,
        genre: "Adventure",
        sold: "121,130,019",
        summary:
            "During the American Civil War, five prisoners escape in a hot air balloon, only to crash on an uncharted island in the Pacific. They must use their ingenuity and knowledge to survive and explore their new home, which they name Lincoln Island. The castaways discover that the island is rich in natural resources, enabling them to build a new society from scratch. They face various challenges, including wild animals, pirates, and mysterious occurrences that suggest they are not alone. Throughout their adventures, they uncover the island's secrets, including the presence of Captain Nemo, who has been living in seclusion. The story highlights themes of survival, cooperation, and the triumph of human spirit and intelligence.",
    },
    {
        title: "The Mysterious Island",
        author: "Anna Handler",
        year: 1874,
        genre: "Adventure",
        sold: "93,165,893",
        summary:
            "During the American Civil War, five prisoners escape in a hot air balloon, only to crash on an uncharted island in the Pacific. They must use their ingenuity and knowledge to survive and explore their new home, which they name Lincoln Island. The castaways discover that the island is rich in natural resources, enabling them to build a new society from scratch. They face various challenges, including wild animals, pirates, and mysterious occurrences that suggest they are not alone. Throughout their adventures, they uncover the island's secrets, including the presence of Captain Nemo, who has been living in seclusion. The story highlights themes of survival, cooperation, and the triumph of human spirit and intelligence.",
    },
    {
        title: "The Mysterious Island",
        author: "Michael Dure",
        year: 1874,
        genre: "Adventure",
        sold: "29,021,012",
        summary:
            "During the American Civil War, five prisoners escape in a hot air balloon, only to crash on an uncharted island in the Pacific. They must use their ingenuity and knowledge to survive and explore their new home, which they name Lincoln Island. The castaways discover that the island is rich in natural resources, enabling them to build a new society from scratch. They face various challenges, including wild animals, pirates, and mysterious occurrences that suggest they are not alone. Throughout their adventures, they uncover the island's secrets, including the presence of Captain Nemo, who has been living in seclusion. The story highlights themes of survival, cooperation, and the triumph of human spirit and intelligence.",
    },
    {
        title: "The Mysterious Island",
        author: "Nelly Ross",
        year: 1874,
        genre: "Adventure",
        sold: "130,320",
        summary:
            "During the American Civil War, five prisoners escape in a hot air balloon, only to crash on an uncharted island in the Pacific. They must use their ingenuity and knowledge to survive and explore their new home, which they name Lincoln Island. The castaways discover that the island is rich in natural resources, enabling them to build a new society from scratch. They face various challenges, including wild animals, pirates, and mysterious occurrences that suggest they are not alone. Throughout their adventures, they uncover the island's secrets, including the presence of Captain Nemo, who has been living in seclusion. The story highlights themes of survival, cooperation, and the triumph of human spirit and intelligence.",
    },
]

export default function DrawerExample() {
    const [editOpen, showEdit, closeEdit] = useToggleState()
    const [bookToEdit, setBookToEdit] = React.useState<Book | null>(null)

    const editBook = (book: Book) => {
        setBookToEdit(book)
        showEdit()
    }

    const onSave = () => {
        // update
        closeEdit()
    }

    return (
        <>
            <Table className="overflow-scroll">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Title</TableHeaderCell>
                        <TableHeaderCell>Author</TableHeaderCell>
                        <TableHeaderCell>Year</TableHeaderCell>
                        <TableHeaderCell className="text-right">Sold items</TableHeaderCell>
                        <TableHeaderCell className="text-right">Actions</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books.map((book, index) => (
                        <TableRow key={index}>
                            <TableCell>{book.title}</TableCell>
                            <TableCell className="whitespace-nowrap">{book.author}</TableCell>
                            <TableCell>{book.year}</TableCell>
                            <TableCell className="text-right">{book.sold}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="secondary" onClick={() => editBook(book)}>
                                    More info
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex justify-center">
                <Drawer
                    open={editOpen}
                    onOpenChange={(modalOpened) => {
                        if (!modalOpened) {
                            closeEdit()
                        }
                    }}
                >
                    <DrawerContent className="sm:max-w-lg">
                        <DrawerHeader>
                            <DrawerTitle>{bookToEdit?.title}</DrawerTitle>
                            <DrawerDescription className="mt-1 text-sm">
                                {bookToEdit?.author} - {bookToEdit?.year}
                            </DrawerDescription>
                        </DrawerHeader>
                        <DrawerBody>
                            <p>{bookToEdit?.summary}</p>
                        </DrawerBody>
                        <DrawerFooter className="mt-6">
                            <DrawerClose asChild>
                                <Button
                                    className="mt-2 w-full sm:mt-0 sm:w-fit"
                                    variant="secondary"
                                >
                                    Go back
                                </Button>
                            </DrawerClose>
                            <Button className="w-full sm:w-fit" onClick={() => onSave()}>
                                Edit page
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        </>
    )
}