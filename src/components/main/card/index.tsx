import PlayButton from "@/components/button"
import Image from "next/image"

interface ICard {
    title: string
}

const Card = ({ title }: ICard) => {
    return (
        <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/album.jpg" width={104} height={104} alt="Capa do album full fighters"/>
            <strong>{ title }</strong>
            <PlayButton />
        </a>
    )
}

export default Card