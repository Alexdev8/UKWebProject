import './styles/style.css';
import {Header, Footer, Menu} from './shared_components';

function App() {
  return (
    <div className="App">
        <main class="parallax-main">
            <Header></Header>
            <Menu></Menu>
            <Footer></Footer>
        </main>
    </div>
  );
}

export default App;
