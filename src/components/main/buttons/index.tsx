import { CaretLeft, CaretRight } from "@phosphor-icons/react"

const Buttons = () => {
    return (
        <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
                <CaretLeft size={32} weight="thin" />
            </button>
            <button className="rounded-full bg-black/40 p-1">
                <CaretRight size={32} weight="thin" />
            </button>
        </div>
    )
}

export default Buttons