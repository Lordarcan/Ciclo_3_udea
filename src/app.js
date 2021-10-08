import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter} from "reactstrap";

const data = [
  { Documento: 1059730127, Nombres: "Jairo", Apellidos: "Combariza", Estado: "Autorizado", Rol: "Administrador" , Correo: "a.a@gmail.com"},
  { Documento: 1152739936, Nombres: "Pedro", Apellidos: "Perez" , Estado: "Autorizado", Rol: "Administrador" , Correo: "a.a@gmail.com"},
  { Documento: 118125678, Nombres: "Juan", Apellidos: "Gonzalez", Estado: "Pendiente", Rol: "" , Correo: "a.a@gmail.com"},
  { Documento: 30209876, Nombres: " ", Apellidos: "ruiz" , Estado: "Autorizado", Rol: "Administrador" , Correo: "a.a@gmail.com"},
  { Documento: 53765456, Nombres: "supervisor", Apellidos: "", Estado: "No autorizado", Rol: "Vendedor" , Correo: "a.a@gmail.com"},
  { Documento: 7890766, Nombres: "luisa", Apellidos: "beltran" , Estado: "Pendiente", Rol: "" , Correo: "a.a@gmail.com" },
];

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    form: {
      Documento: "",
      Nombres: "",
      Apellidos: "",
      Estado: "",
      Rol: "",
      Correo: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.Documento == registro.Documento) {
        arreglo[contador].Nombres = dato.Nombres;
        arreglo[contador].Apellidos = dato.Apellidos;
        arreglo[contador].Estado = dato.Estado;
        arreglo[contador].Rol = dato.Rol;
        arreglo[contador].Correo = dato.Correo;
      }
      contador++;
       }); 
    this.setState({ data: arreglo, modalActualizar: false });
  };


  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render(){
      return(
      <>
      <Container>
      <br />  
      <Button color="secondary" >VENTAS</Button> <Button color="secondary" >PRODUCTOS</Button> <Button color="warning" >USUARIOS</Button>
      <br /><br />

        <Table hover>
          <thead><tr><th>Documento</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Estado</th>
          <th>Rol</th>
          <th>Correo</th>
          <th>{""} </th></tr></thead>
          <tbody>
            {this.state.data.map((dato)=>(
              <tr key={dato.Documento}>
                <td>{dato.Documento}</td>
                <td>{dato.Nombres}</td>
                <td>{dato.Apellidos}</td>
                <td>{dato.Estado}</td>
                <td>{dato.Rol}</td>
                <td>{dato.Correo}</td>

                <td><Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Actualizar
                    </Button></td>
                </tr>
            ))}


           </tbody> 

        </Table>
      
      
      </Container>

<Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Actualizar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
              Documento:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.Documento}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombres: 
              </label>
              <input
                className="form-control"
                name="Nombres"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Nombres}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Apellidos: 
              </label>
              <input
                className="form-control"
                name="Apellidos"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Apellidos}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Estado: 
              </label>
              <input
                className="form-control"
                name="Estado"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Estado}
              />
            </FormGroup>

              <FormGroup>
              <label>
                Rol: 
              </label>
              <input
                className="form-control"
                name="Rol"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Rol}
              />
            </FormGroup>

              <FormGroup>
              <label>
                Correo: 
              </label>
              <input
                className="form-control"
                name="Correo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Correo}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button
              color="success"
              onClick={() => this.editar(this.state.form)}
            >
              Aceptar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>




      </>)
  }
}

export default App;