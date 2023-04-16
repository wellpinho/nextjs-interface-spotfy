import { Books, Heart, House, MagnifyingGlass, Plus } from "@phosphor-icons/react"

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

            <nav className="space-y-5 mt-16">
                <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <Plus size={22} className="p-1 bg-zinc-400 text-zinc-900" />
                    Criar Playlist
                </a>
                <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <Heart size={22} weight="fill" className="p-1 bg-gradient-to-r from-indigo-500 to-indigo-300" />
                    Músicas curtidas
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