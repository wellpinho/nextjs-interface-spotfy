export default function Home() {
  return (
    // h-screen fax o container ocupar todo o height da tela = o v-height
  <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <aside className="w-64 bg-zinc-950 p-6">
        sidebar
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
