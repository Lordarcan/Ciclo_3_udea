import React, { Component } from "react";
import { render } from "react-dom";

class AppBdVentas extends Component {
  constructor() {
    super();
    this.state = {
      nombreCliente: "",
      cedulaCliente: "",
      valorTotalVenta: "",
      ventas: [],
      _id: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.addProducto = this.addProducto.bind(this);
  }

  addProducto(e) {
    if (this.state._id) {
      fetch("http://localhost:3000/api/ventas/" + this.state._id, {
        method: "PUT",
        body: JSON.stringify(this.state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          M.toast({ html: "Venta actualizada correctamente" });
          this.setState({
            nombreCliente: "",
            cedulaCliente: "",
            valorTotalVenta: "",
            _id: "",
          });
          this.obtenerVentas();
        });
    } else {
      M.toast({ html: "Solo se puede editar o eliminar" });
    }
    e.preventDefault();
  }

  componentDidMount() {
    this.obtenerVentas();
  }

  obtenerVentas() {
    fetch("http://localhost:3000/api/ventas")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ ventas: data, productoBackup: data });
      });
  }

  deleteVentas(id) {
    if (confirm("¿Está seguro de eliminar la Venta?")) {
      fetch("http://localhost:3000/api/ventas/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          M.toast({ html: "Venta eliminada" });
          this.obtenerVentas();
        });
    }
  }

  editVentas(id) {
    fetch("http://localhost:3000/api/ventas/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          nombreCliente: data.nombreCliente,
          cedulaCliente: data.cedulaCliente,
          valorTotalVenta: data.valorTotalVenta,
          _id: data._id,
        });
      });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <nav class="light-green darken-1">
          <a class="brand-logo center">VENTAS</a>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col s5">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.addProducto}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          value={this.state.nombreCliente}
                          name="nombreCliente"
                          onChange={this.handleChange}
                          type="text"
                          placeholder="Nombre del Cliente"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea
                          value={this.state.cedulaCliente}
                          name="cedulaCliente"
                          onChange={this.handleChange}
                          placeholder="Cedula del Cliente"
                          className="materialize-textarea"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          value={this.state.valorTotalVenta}
                          name="valorTotalVenta"
                          onChange={this.handleChange}
                          type="number"
                          placeholder="Precio total de la venta"
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn green darken-3">
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col s7">
              <table>
                <thead>
                  <th>Cliente</th>
                  <th>Cedula</th>
                  <th>Valor de la venta</th>
                </thead>
                <tbody>
                  {this.state.ventas.map((ventas) => {
                    return (
                      <tr key={ventas._id}>
                        <td>{ventas.nombreCliente}</td>
                        <td>{ventas.cedulaCliente}</td>
                        <td>{ventas.valorTotalVenta}</td>
                        <td>
                          <button
                            className="btn red"
                            onClick={() => this.deleteVentas(ventas._id)}
                          >
                            <i className="material-icons">delete</i>
                          </button>
                          <></>
                          <button
                            className="btn yellow darken-3"
                            onClick={() => this.editVentas(ventas._id)}
                          >
                            <i className="material-icons">edit</i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppBdVentas;
