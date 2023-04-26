import './App.css';
import {Header, Footer, Menu} from './shared_components';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Order from "./Order";

function App() {
  return (
      <BrowserRouter>
        <main className="parallax-main">
            <Header></Header>
            <Menu></Menu>
            <Routes>
                <Route path="/"/>
                <Route path="/order" element={<Order/>}/>
                <Route path="/attractions"/>
            </Routes>
            <Footer></Footer>
        </main>
    </BrowserRouter>
  );
}

export default App;
