import BookLists from "./components/BookLists";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar/>
        <BookLists/>
        <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
