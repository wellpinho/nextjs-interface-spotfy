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

      <main className="flex-1 bg-zinc-800 text-zinc-50 p-6">
        <Buttons />

        <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

        <div className="grid grid-cols-3 gap-4 mt-10">
          <Card title="Wasting Light" />
          <Card title="Blast Pins" />
          <Card title="Was gron" />
          <Card title="The time is now" />
          <Card title="Not prepered" />
          <Card title="Leave me now" />
        </div>

        <h2 className="font-semibold text-2xl mt-10">Made For Diego Schell Fernandes</h2>

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
