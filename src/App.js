import { Container, GlobalStyle } from "./styles/globalStyles";
import { Routes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Routes />
      </Container>
      <ToastContainer />
    </>
  );
}

export default App;
