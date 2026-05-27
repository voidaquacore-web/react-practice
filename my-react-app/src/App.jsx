import Header from "./Header.jsx"
import Food from "./Food.jsx";
import Footer from "./Footer.jsx";

function App() {
  return(
    <>
    <Header></Header>
    <Food isAlive={false} />
    <Footer />
    </>
  );
}

export default App
