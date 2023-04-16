import Image from "next/image"

interface IAlbum {
    title: string
    description: string
    image: string
}

const ArtistList = ({ title, description, image }: IAlbum) => {
    return (
        <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
            <Image src={image} className="w-full" width={104} height={104} alt="Capa do album full fighters"/>
            <strong className="font-semibold">{ title }</strong>
            <span className="text-sm text-zinc-500">{ description }</span>
        </a>
    )
}

export default ArtistList