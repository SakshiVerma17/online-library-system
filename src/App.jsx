import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import BrowseBooks from "./pages/BrowseBooks.jsx";
import AddBook from "./pages/AddBook.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";




function App() {
  return (
    <BrowserRouter>
      <Navbar />

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/browse" element={<BrowseBooks />} />
  <Route path="/books/:category" element={<BrowseBooks />} />
  <Route path="/add" element={<AddBook />} />
  <Route path="/book/:id" element={<BookDetails />} />
  <Route path="*" element={<PageNotFound />} />
</Routes>

    </BrowserRouter>
  );
}

export default App;
