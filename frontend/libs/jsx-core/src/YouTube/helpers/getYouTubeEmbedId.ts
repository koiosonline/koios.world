export const getYoutubeEmbedId = (url: string) => {
    try {
        return url.split('v=')[1].split('&')[0];
    } catch (error) {
        console.log(`Could not get YouTube embed ID from URL: ${url}`);
    }
};