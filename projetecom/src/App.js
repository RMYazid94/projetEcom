import './App.css';
import ProductList from './ProductList';
import Menu from './Menu';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <>
     <Menu/>
    <div className="App">
      <ProductList/>
    </div></>
  );
}

export default App;
