import { Play } from "@phosphor-icons/react";

const PlayButton = () => {
    return (
        <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
            <Play size={32} weight="fill" />
        </button>
    )
}

export default PlayButton