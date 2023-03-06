import { useThema } from "../context/ThemaContext";
import Button from "./Button";
import Profile from "./Profile";

function Container() {
  const data = useThema();

  return (
    <div className={`${data.thema}`}>
      <Button />
      <hr />
      <Profile />
    </div>
  );
}

export default Container;
