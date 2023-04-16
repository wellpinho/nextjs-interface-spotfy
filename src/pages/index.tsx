import Navbar from "@/components/aside/navbar";
import Pins from "@/components/aside/pins";
import CardFooter from "@/components/footer/card";
import Controls from "@/components/footer/controls";
import PlayerFooter from "@/components/footer/player";
import ArtistList from "@/components/main/artistList";
import Buttons from "@/components/main/buttons";
import Card from "@/components/main/card";

export default function Home() {
  return (
  <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <aside className="w-64 bg-black p-6">
        <Pins />
        <Navbar />
      </aside>

      <main className="flex-1 bg-zinc-900 text-zinc-50 p-6">
        <Buttons />

        <h1 className="font-semibold text-3xl mt-10">Foco</h1>

        <div className="grid grid-cols-3 gap-4 mt-10">
          <Card image="/album-2.webp" title="Wasting Light" />
          <Card image="/album.jpg" title="Blast Pins" />
          <Card image="/album-3.jpg" title="Was gron" />
          <Card image="/album-4.jpeg" title="The time is now" />
          <Card image="/album-5.png" title="Not prepered" />
          <Card image="/album-6.jpg" title="Leave me now" />
        </div>

        <h2 className="font-semibold text-2xl mt-10">Playlist do Spotify</h2>

        <div className="grid grid-cols-8 gap-4 mt-4">
          <ArtistList title="Daily Mix 1" description="Wallows, COIN, girl in red and more" image="/album.jpg" />
          <ArtistList title="Daily Mix 1" description="Wallows, COIN, girl in red and more" image="/album.jpg" />
          <ArtistList title="Daily Mix 1" description="Wallows, COIN, girl in red and more" image="/album.jpg" />
          <ArtistList title="Daily Mix 1" description="Wallows, COIN, girl in red and more" image="/album.jpg" />
          <ArtistList title="Daily Mix 1" description="Wallows, COIN, girl in red and more" image="/album.jpg" />
        </div>
      </main>
    </div>

    <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <CardFooter />
      <PlayerFooter />
      <Controls />
    </footer>
  </div>
  )
}
