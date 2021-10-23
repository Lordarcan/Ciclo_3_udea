import React, { Component } from "react";
import ReactDOM from "react-dom";

let carrito = [];
let subtot;
let ventas;

const AppVentas = () => {
  const [productos, setProductos] = React.useState([]);
  const [productosCarrito, setProductosCarrito] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
      });
  }, [addProductoCart]);

  const addProductoCart = (id) => {
    let cant = prompt("Cantidad");
    for (let i in productos) {
      for (let j in productos[i]) {
        if (productos[i][j] == id) {
          subtot = Number(cant) * productos[i].precio;
          carrito.push({
            _id: productos[i]._id,
            nombre: productos[i].nombre,
            precio: productos[i].precio,
            cantidad: cant,
            subtotal: subtot,
          });
          setProductosCarrito(carrito);
          setTotal(total + subtot);
        }
      }
    }
    console.log("carrito", carrito);
  };

  const delProductoCarrito = (id) => {
    for (let i in productosCarrito) {
      for (let j in productosCarrito[i]) {
        if (productosCarrito[i][j] == id) {
          let sub = productosCarrito[i].subtotal;
          carrito.splice(i, 1);
          setTotal(total - sub);
        }
      }
    }
  };

  const addVenta = () => {
    let nombre = prompt("Nombre del cliente");
    let cedula = prompt("Cedula del client");
    ventas = {
      nombreCliente: nombre,
      cedulaCliente: cedula,
      valorTotalVenta: total,
    };
    fetch("http://localhost:3000/api/ventas", {
      method: "POST",
      body: JSON.stringify(ventas),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        M.toast({ html: "Venta Realizada Exitosamente" });
        carrito = [];
        subtot = 0;
        ventas = [];
        setProductosCarrito([]);
        setTotal(0);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div>
        <nav class="light-green darken-1">
          <a href="#" class="brand-logo center">
            REALIZAR VENTA
          </a>
        </nav>
      </div>
      <div>
        <div className="row">
          <div className="col s5">
            <div className="card">
              <div className="card-content">
                <td>
                  <button className="btn green darken-3" onClick={() => addVenta()}>
                    REALIZAR VENTA
                  </button>
                </td>
                <hr />
                <h5>TOTAL</h5>
                <hr />
                <h4>{total}</h4>
              </div>
            </div>
            <div className="col s7">
              <table>
                <thead>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                </thead>
                <tbody>
                  {productosCarrito.map((productosCarrito) => {
                    return (
                      <tr key={productosCarrito._id}>
                        <td>{productosCarrito.nombre}</td>
                        <td>{productosCarrito.precio}</td>
                        <td>{productosCarrito.cantidad}</td>
                        <td>{productosCarrito.subtotal}</td>
                        <td>
                          <button
                            className="btn red"
                            onClick={() =>
                              delProductoCarrito(productosCarrito._id)
                            }
                          >
                            <i className="material-icons">delete</i>
                          </button>
                          <></>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col s7">
            <table>
              <thead>
                <th>Nombre producto</th>
                <th>Descripcion producto</th>
                <th>Precio producto</th>
              </thead>
              <tbody>
                {productos.map((productos) => {
                  return (
                    <tr key={productos._id}>
                      <td>{productos.nombre}</td>
                      <td>{productos.descripcion}</td>
                      <td>{productos.precio}</td>
                      <td>
                        <button
                          className="btn blue"
                          onClick={() => addProductoCart(productos._id)}
                        >
                          <i className="material-icons">shopping_cart</i>
                        </button>
                        <></>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppVentas;
