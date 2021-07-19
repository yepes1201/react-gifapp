export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=oSpgz3e16QGp058jziazELVtARGGjChR`
    const response = await fetch(url)
    const { data } = await response.json()

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            gif: gif.images.downsized_medium.url,
            user: gif.username
        }
    })
    return gifs
}