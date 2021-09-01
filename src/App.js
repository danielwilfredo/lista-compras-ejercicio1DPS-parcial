import React, { useState, useEffect} from "react";
import Form from "./components/Form";
import Listado from './components/Listado'
//import Data from './assets/Data'
import Data from './assets/productos.json'

function App() {
  const [productolista, setProductoLista]=useState([]);
  const [productoid, setProductoId]=useState(0)

  //agregar el producto al state
  const agregarProducto = (id) => {
    const exist = productolista.find((x) => x.id == productoid);
    if (id === 0) {
      alert("Seleccione un producto");
      return;
    }
    if (exist) {
        setProductoLista(
          productolista.map((x) =>
            x.id == productoid ? { ...exist, cantidad: exist.cantidad + 1 } : x
          )
        );
      
    } else {
      alert("llego aqui")
      const producto=Data.find(producto=>producto.id == productoid);
      console.log(producto)
      setProductoLista([...productolista, { ...producto, cantidad: 1 }]);
    }
  };

  const onRemove = (product) => {
  
      setProductoLista(productolista.filter((x) => x.id != product)); //eliminando el producto cuando la cantidad es 0
    }


  /// para modificar la cantidad
  const modifyQuantity = (index, quantity) => {//index es el index del array que vas a modificar
    const localCopy = [...productolista]; //Se hace esto para no modificar el state directamente porque te puede dar pedos
    localCopy[index].cantidad = quantity;// el index lo sacar cuando estes renderizando cada elemento mandas en el onClick(index, value)
    setProductoLista(localCopy);
    if(localCopy[index].cantidad === 0)
    {
      alert("AQUII ELIMINARNDO" + localCopy[index].id)
      onRemove(localCopy[index].id);
    }
    
  }
 
  console.log(productolista)
  return (
    <>
       <Form
       Data={Data}
       setProductoLista={setProductoLista}
       agregarProducto={agregarProducto}
       setProductoId={setProductoId}
       productoid={productoid}
       />
        <Listado
        productolista={productolista}
        modifyQuantity={modifyQuantity}
        />
      </>
  );
}

export default App;
