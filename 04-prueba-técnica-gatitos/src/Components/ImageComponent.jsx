import { useCatImage } from "../hooks/useCatImage";

export function ImageComponent() {
  const { imageUrl } = useCatImage({ fact: "cat" });
  return (
    <>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted by an API of cats with a text implemented`}
        ></img>
      )}
    </>
  );
}
