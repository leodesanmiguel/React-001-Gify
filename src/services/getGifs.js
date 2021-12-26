const apiKey = 'XBXAw6y6bjgTEFBWeS5oAj2dNvquIrTv'


export default function getGifs({ keyword = 'morty' } = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data = [] } = response;
            if (Array.isArray(data)) {
                const gifs = data.map(imagenes => imagenes.images.downsized_medium.url);
                //setGifs(gifs);
                return gifs;
            }
        })
}