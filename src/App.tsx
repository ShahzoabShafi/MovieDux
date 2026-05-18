// import { useState } from "react";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div className="container">
          <Header></Header>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
