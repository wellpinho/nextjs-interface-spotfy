import { Books, House, MagnifyingGlass } from "@phosphor-icons/react"

const Navbar = () => {
    return (
        <>
            <nav className="space-y-5 mt-8">
                <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <House size={22} />
                    Home
                </a>
                <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <MagnifyingGlass size={22} />
                    Search
                </a>
                <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <Books size={22} />
                    Your library
                </a>
            </nav>

            <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hits Brasil</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Aniver Funk</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My Playlist #13</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>
            </nav>
        </>
    )
}

export default Navbar