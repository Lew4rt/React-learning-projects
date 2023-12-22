import "./App.css";
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";
import { ImageComponent } from "./Components/ImageComponent";

export default function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new cat fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted by an API of cats with a text implemented using the first words from ${fact}`}
        ></img>
      )}
    </main>
  );
}
