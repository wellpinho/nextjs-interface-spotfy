import { BookBookmark, Books, House, MagnifyingGlass } from "@phosphor-icons/react";

export default function Home() {
  return (
    // h-screen fax o container ocupar todo o height da tela = o v-height
  <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <aside className="w-72 bg-zinc-950 p-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

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
      </aside>
      <main className="flex-1 bg-zinc-800 text-zinc-50 p-6">
        main
      </main>
    </div>
    <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
      footer
    </footer>
  </div>
  )
}
