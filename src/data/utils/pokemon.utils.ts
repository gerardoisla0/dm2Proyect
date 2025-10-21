export const getId = (url: string) => {
        return url.split('/').slice(-2,-1)[0];
}

export const getPhoto = (url: string) => {
    const id = getId(url);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;
}