import Image from "next/image"

const CardFooter = () => {
    return (
        <div className="flex items-center gap-3">
            <Image src="/album.jpg" className="w-full" width={56} height={56} alt="Capa do album full fighters"/>
            <div className="flex flex-col text-zinc-400">
            <strong className="font-normal">Rope</strong>
            <span className="text-xs">Foo Fighters</span>
            </div>
        </div>
    )
}

export default CardFooter