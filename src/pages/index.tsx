import PlayButton from "@/components/button";
import { ArrowsOutSimple, Books, CaretLeft, CaretRight, House, Laptop, MagnifyingGlass, Microphone, Play, Queue, Repeat, Shuffle, SkipBack, SkipForward, SpeakerHigh } from "@phosphor-icons/react";
import Image from "next/image";

export default function Home() {
  return (
    // h-screen fax o container ocupar todo o height da tela = o v-height
  <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <aside className="w-72 bg-zinc-950 p-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded flex items-center-full"></div>
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
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-black/40 p-1">
            <CaretLeft size={32} weight="thin" />
          </button>
          <button className="rounded-full bg-black/40 p-1">
            <CaretRight size={32} weight="thin" />
          </button>
        </div>

        <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

        <div className="grid grid-cols-3 gap-4 mt-10">
          <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/album.jpg" width={104} height={104} alt="Capa do album full fighters"/>
            <strong>Wasting Light</strong>
              <PlayButton />
          </a>
          <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/album.jpg" width={104} height={104} alt="Capa do album full fighters"/>
            <strong>Wasting Light</strong>
            <PlayButton />
          </a>
          <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/album.jpg" width={104} height={104} alt="Capa do album full fighters"/>
            <strong>Wasting Light</strong>
            <PlayButton />
          </a>
          <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/album.jpg" width={104} height={104} alt="Capa do album full fighters"/>
            <strong>Wasting Light</strong>
            <PlayButton />
          </a>
          <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/album.jpg" width={104} height={104} alt="Capa do album full fighters"/>
            <strong>Wasting Light</strong>
            <PlayButton />
          </a>
          <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/album.jpg" width={104} height={104} alt="Capa do album full fighters"/>
            <strong>Wasting Light</strong>
            <PlayButton />
          </a>
        </div>

        <h2 className="font-semibold text-2xl mt-10">Made For Diego Schell Fernandes</h2>

        <div className="grid grid-cols-8 gap-4 mt-4">
          <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
            <Image src="/album.jpg" className="w-full" width={104} height={104} alt="Capa do album full fighters"/>
            <strong className="font-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
          </a>
          <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
            <Image src="/album.jpg" className="w-full" width={104} height={104} alt="Capa do album full fighters"/>
            <strong className="font-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
          </a>
          <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
            <Image src="/album.jpg" className="w-full" width={104} height={104} alt="Capa do album full fighters"/>
            <strong className="font-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
          </a>
          <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
            <Image src="/album.jpg" className="w-full" width={104} height={104} alt="Capa do album full fighters"/>
            <strong className="font-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
          </a>
          <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
            <Image src="/album.jpg" className="w-full" width={104} height={104} alt="Capa do album full fighters"/>
            <strong className="font-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-500">Wallows, COIN, girl in red and more</span>
          </a>
        </div>
      </main>
    </div>

    <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src="/album.jpg" className="w-full" width={56} height={56} alt="Capa do album full fighters"/>
        <div className="flex flex-col">
          <strong className="font-normal">Rope</strong>
          <span className="text-xs text-zinc-400">Foo Fighters</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200"/>
          <SkipBack size={20} className="text-zinc-200" />
          <Play size={26} weight="fill" className="p-1 rounded-full bg-white text-black" />
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-zinc-200">
        <Microphone size={20} />
        <Queue size={20} />
        <Laptop size={20} />
        <SpeakerHigh size={20} />

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h1 rounded-full w-20 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
        </div>

        <ArrowsOutSimple size={20} />
      </div>
    </footer>
  </div>
  )
}
