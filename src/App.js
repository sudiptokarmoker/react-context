import BookLists from "./components/BookLists";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar/>
        <BookLists/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
