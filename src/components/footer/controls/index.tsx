import { ArrowsOutSimple, Laptop, Microphone, Queue, SpeakerHigh } from "@phosphor-icons/react"

const Controls = () => {
    return (
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
    )
}

export default Controls