export const getRandomImage = (fact) => {
    const firstWord = fact.split(" ")[0];
    return fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
        .then((res) => res.json())
        .then((data) => {
            const { url } = data;
            return url
        });
}