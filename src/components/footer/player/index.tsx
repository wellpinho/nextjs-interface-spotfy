import { Play, Repeat, Shuffle, SkipBack, SkipForward } from "@phosphor-icons/react"

const PlayerFooter = () => {
    return (
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
    )
}

export default PlayerFooter