import Image from "next/image"

const Pins = () => {
    return (
        <div className="flex items-center gap-2">
            <Image width={120} style={{ marginLeft: '-12px'}} height={120} src="/spotify.png" alt="Logo Spotify" />
        </div>
    )
}

export default Pins