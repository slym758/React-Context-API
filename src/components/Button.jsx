import { useThema } from "../context/ThemaContext";

function Button() {
  const data = useThema();

  return (
    <div>
      active thema:{data.thema}
      <br />
      <br />
      <button
        onClick={() => data.setThema(data.thema === "light" ? "dark" : "light")}
      >
        Button
      </button>
    </div>
  );
}

export default Button;
