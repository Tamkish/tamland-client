export const RandomLoadingGif = () => {
    const randomGifUrl = GifUrls[Math.floor(Math.random()*GifUrls.length)]
    return <img src={randomGifUrl} height={"150px"} alt={"funny loading gif"}/>
}

const GifUrls = [
    "https://media1.tenor.com/m/7Glf51FDQZQAAAAC/monkey-annoying.gif", //monkey cymbal
    "https://media1.tenor.com/m/jvM7s2tiUWsAAAAC/rat-spin.gif", //rat spin
    "https://media1.tenor.com/m/yqxW6xzgR6UAAAAC/cat-jumpy.gif", //cat jump
    "https://media1.tenor.com/m/4qvlogyx568AAAAd/moistcritikal-charlie.gif", //charlie dance,
    "https://media1.tenor.com/m/-VG9cLwSYTcAAAAC/dancing-triangle-dancing.gif" //triangle dance
]