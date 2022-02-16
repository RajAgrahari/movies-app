import "./components/styles/App.scss";
import "./components/styles/Loading.scss";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Category from "./pages/Category";

import Home from "./pages/Home";
import Query from "./pages/Query";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movie" element={<Query key="movie" type="movie" />}>
          <Route path=":id" element={<div>Hello World! I am breathing</div>} />
        </Route>

        <Route path="/tv" element={<Query key="tv-shows" type="tv" />}>
          <Route path=":id" element={<div>Hello World! I am breathing</div>} />
        </Route>

        <Route path="category/:query" element={<Category />}>
          <Route path=":categoryId" element={<Category />} />
        </Route>

        <Route path="*" element={<div>It nothing here</div>} />
      </Routes>
    </div>
  );
};

export default App;
