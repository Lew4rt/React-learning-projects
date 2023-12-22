const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export const getRandomFact = () => {
    return fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            const { fact } = data;
            return fact
        });
}