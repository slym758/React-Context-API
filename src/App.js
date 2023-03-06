import "./App.css";
import { ThemaProvider } from "./context/ThemaContext";
import { UserProvider } from "./context/UserContext";
import Container from "./components/Container";

function App() {
  return (
    <ThemaProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemaProvider>
  );
}

export default App;
