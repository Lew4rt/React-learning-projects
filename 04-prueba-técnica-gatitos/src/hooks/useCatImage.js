import { useState, useEffect } from "react";
import { getRandomImage } from "../services/images";
const CAT_ENDPOINT_BASE = 'https://cataas.com';

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        if (!fact) return;
        getRandomImage(fact).then(newUrl => setImageUrl(newUrl))
        console.log(imageUrl)
    }, [fact]);

    return { imageUrl: `${CAT_ENDPOINT_BASE}${imageUrl}` }
}