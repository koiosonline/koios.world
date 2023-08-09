export const getYoutubeEmbedId = (url: string) => {
    try {
        if (url.includes('/v/')) {
            return url.split('/v/')[1];
        } else if (url.includes('v=')) {
            return url.split('v=')[1].split('&')[0];
        } else if (url.includes('youtu.be/')) {
            return url.split('youtu.be/')[1];
        } else {
            console.log(`Invalid YouTube URL: ${url}`);
            return null;
        }
    } catch (error) {
        console.log(`Could not get YouTube embed ID from URL: ${url}`);
        return null;
    }
};
