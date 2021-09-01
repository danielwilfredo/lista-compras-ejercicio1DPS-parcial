import React from 'react';
import Listado from './Listado'

const Form = ({Data, setProductoLista, agregarProducto, setProductoId, productoid}) => {
    return ( 
          <>
          <select
          onChange={(e)=>setProductoId(e.target.value)}>
            <option value={0}>
              Seleccione una opcion...
            </option>
            {
              Data.map((producto)=>(
                <option key={producto.id} value={producto.id}>
                  {`${producto.nombre}: $${producto.precio.toFixed(2)} `}
                </option>
              ))
            }
            </select>
        
        <button onClick={()=>{agregarProducto(productoid)}}>Agregar Producto</button>
        </>
       

     );
}
 
export default Form;

