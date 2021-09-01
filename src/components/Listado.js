import React from 'react';
import NumericInput from 'react-numeric-input';

const Listado = ({productolista, modifyQuantity}) => {

    const itemsPrice = productolista.reduce((a, c) => a + c.cantidad * c.precio, 0);
    return (  
        <>
        <p>HOLAA</p>
         {productolista.length === 0 && <div>La lista esta vacia</div>}

        {
            productolista.map(({nombre, cantidad, precio},index)=>(

                <div key={index} className="row">
                    <p>
                    nombre: {nombre}
                    </p>
                    <p>
                    cantidad: {cantidad}
                    </p>
                    <p>
                    precio: {precio}
                    </p>
                    <NumericInput mobile min={0} max={100} value={cantidad}
                    onChange={(value)=>modifyQuantity(index, value)}
                    />
                </div>
            ))
        }

        <div>
            <p>
                TOTAL PRECIO: {itemsPrice.toFixed(2)}
            </p>
        </div>



        </>
    );
}
 
export default Listado;