import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const onAdd = () =>{
    console.log("Producto agregado");
  }
  
  
  
  return (
    <>
      <Navbar />
      <ItemListContainer bienvenida="¡Bienvenido/a a Black and Wine!" />
      <ItemCount stock={15} onAdd={onAdd}/>
      <Footer/>
    </>
  );
}

export default App;
