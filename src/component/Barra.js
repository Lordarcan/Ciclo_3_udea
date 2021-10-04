import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Table, 
    Button, 
    Container, 
    Modal, 
    ModalBody,
    ModalHeader, 
    Form, 
    FormGroup, 
    ModalFooter,
} from 'reactstrap';

const data =[
  {Id:1111, Cantidad:4, Precio_Unitario:12222, Fecha:"27/4/21" , CC: 10213923232, Cliente:"Juan", Vendedor:"Daniel" },
  {Id:2222, Cantidad:1, Precio_Unitario:49300, Fecha:"29/10/21" , CC: 1213423412, Cliente:"Pedro", Vendedor:"Laura"},
  {Id:3333, Cantidad:5, Precio_Unitario:54000, Fecha:"11/8/21" , CC: 10230300030, Cliente:"React", Vendedor:"Daniel" },
  {Id:4444, Cantidad:2, Precio_Unitario:4500, Fecha:"03/7/21" , CC: 52015026, Cliente:"Putin", Vendedor:"Jorge" },
  {Id:5555, Cantidad:7, Precio_Unitario:45333, Fecha:"12/5/21" , CC: 45021912, Cliente:"Radamel", Vendedor:"Daniel"},
  {Id:6666, Cantidad:8, Precio_Unitario:45000, Fecha:"21/5/12" , CC: 10213932, Cliente:"Julian", Vendedor:"Jorge"},
  {Id:7777, Cantidad:9, Precio_Unitario:8999, Fecha:"12/2/12" , CC: 1021392, Cliente:"Carrusel", Vendedor:"Laura"},

];

class Barra extends Component{
    state={
         data:data,
         modalActualizar: false,
         modalInsertar: false,
         modalEditar:false,
         form:{
             Id:'',
             Cantidad:'',
             Precio_Unitario:'',
             Fecha:'',
             CC:'',
             Cliente:'',
             Vendedor:'',
             Valor_Total:'',
            
         },
         
    };

    mostrarModalEditar=(registro)=>{
        this.setState({modalEditar:true, form:registro});
    }

    ocultarModalEditar=()=>{
        this.setState({modalEditar:false});
    }

handleChange=e=>{
  this.setState({
       form:{
       ...this.state.form,
        [e.target.name]:e.target.value,

       }

  });
};

mostrarModalActualizar = (dato) => {
 this.setState({
     form:dato,
     modaActualizar: true,
 });

};


cerrarModalActualizar =() =>{
    this.setState({modalActualizar:false});
};

mostrarModalInsertar=()=>{
  this.setState({
      modalInsertar:true,
    });
};

cerrarModalInsertar=()=>{
    this.setState({modalInsertar:false});
  };

editar=(dato)=>{
    var contador =0;
    var lista = this.state.data;
    lista.map((registro)=>{
         if(dato.Id==registro.Id){
             lista[contador].Id= dato.Id;
             lista[contador].Cantidad= dato.Cantidad;
             lista[contador].Precio_Unitario= dato.Precio_Unitario;
             lista[contador].Fecha=dato.Fecha;
             lista[contador].CC= dato.CC;
             lista[contador].Cliente=dato.Cliente;
             lista[contador].Vendedor=dato.Vendedor;
         }
         contador++;

    });
    this.setState({data: lista, modalEditar:false});
};

eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el dato "+dato.Id);
    if (opcion) {
      var contador = 0;
      var lista = this.state.data;
      lista.map((registro) => {
        if (registro.Id==dato.Id) {
          lista.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: lista });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.Id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({data:lista, modalInsertar: false});
  }



    render(){
           return(
               <> 
           
        <Container>

                   <br />
                   <Button color="success" onClick={() => this.mostrarModalInsertar()}> Inserte Venta</Button>
                   <br /><br />

                   <Table>
                       <thead>
                           <tr>
                               <th>id</th>
                               <th>Cantidad</th>
                               <th>Precio Unitario</th>
                               <th>Fecha</th>
                               <th>CC</th>
                               <th>Cliente</th>
                               <th>Vendedor</th>
                               <th>Valor Total</th>
                               <th>Acciones</th></tr></thead>

                       <tbody>
                           {this.state.data.map((elemento) => (
                               <tr>
                                   <td>{elemento.Id}</td>
                                   <td>{elemento.Cantidad}</td>
                                   <td>{elemento.Precio_Unitario}</td>
                                   <td>{elemento.Fecha}</td>
                                   <td>{elemento.CC}</td>
                                   <td>{elemento.Cliente}</td>
                                   <td>{elemento.Vendedor}</td>
                                   <td>{elemento.Valor_Total}</td>
                                   <td> <Button color="primary"
                                       onClick={() => this.mostrarModalEditar(elemento)}
                                       >
                                           Editar 

                                        </Button>{" "}
                                       <Button color="danger" onClick={() => this.eliminar(elemento)}>Eliminar</Button></td>
                               </tr>

                           ))}
                       </tbody>
                   </Table>
               </Container>
                   <Modal isOpen={this.state.modalEditar}>
                       <ModalHeader>
                           <div><h3>Editar Registro</h3></div>
                       </ModalHeader>

                       <ModalBody>
                           <FormGroup>
                               <label>
                                   Id:
                               </label>

                               <input
                                   className="form-control"
                                   name="Id"
                                   type="number"
                                   onChange={this.handleChange}
                                   value={this.state.form.Id} />
                           </FormGroup>

                           <FormGroup>
                               <label>
                                   Cantidad:
                               </label>

                               <input
                                   className="form-control"
                                   name="Cantidad"
                                   type="number"
                                   onChange={this.handleChange}
                                   value={this.state.form.Cantidad} />
                           </FormGroup>

                           <FormGroup>
                               <label>
                                   Precio_Unitario:
                               </label>

                               <input
                                   className="form-control"
                                   name="Precio_Unitario"
                                   type="number"
                                   onChange={this.handleChange}
                                   value={this.state.form.Precio_Unitario} />
                           </FormGroup>

                           <FormGroup>
                               <label>
                                   Fecha:
                               </label>

                               <input
                                   className="form-control"
                                   name="Fecha"
                                   type="text"
                                   onChange={this.handleChange}
                                   value={this.state.form.Fecha} />
                           </FormGroup>

                           <FormGroup>
                               <label>
                                   CC:
                               </label>

                               <input
                                   className="form-control"
                                   name="CC"
                                   type="number"
                                   onChange={this.handleChange}
                                   value={this.state.form.CC} />
                           </FormGroup>

                           <FormGroup>
                               <label>
                                   Cliente:
                               </label>

                               <input
                                   className="form-control"
                                   name="Cliente"
                                   type="text"
                                   onChange={this.handleChange}
                                   value={this.state.form.Cliente} />
                           </FormGroup>

                           <FormGroup>
                               <label>
                                   Vendedor:
                               </label>

                               <input
                                   className="form-control"
                                   name="Vendedor"
                                   type="text"
                                   onChange={this.handleChange}
                                   value={this.state.form.Vendedor} />
                           </FormGroup>
                       </ModalBody>

                       <ModalFooter>
                           <Button  color="primary"onClick={() => this.editar(this.state.form)}>Editar</Button>
                           <Button color="danger" onClick={() => this.ocultarModalEditar()}>Cancelar</Button>
                 </ModalFooter>
                 </Modal>





               <Modal isOpen={this.state.modalInsertar}>
                       <ModalHeader>
                           <div>
                               <h3>Insertar Registro</h3>
                           </div>
                       </ModalHeader>

                       <ModalBody>
                           <FormGroup>
                               <label>Id</label>
                               <input 
                               className="form-control" 
                               name="Id" 
                               type="number" 
                               onChange={this.handleChange} 
                               />
                           </FormGroup>

                           <FormGroup>
                               <label>Cantidad</label>
                               <input className="form-control" name="Cantidad" type="number" onChange={this.handleChange} />
                           </FormGroup>

                           <FormGroup>
                               <label>Precio_Unitario</label>
                               <input className="form-control" name="Precio_Unitario" type="number" onChange={this.handleChange} />
                           </FormGroup>

                           <FormGroup>
                               <label>Fecha</label>
                               <input className="form-control" name="Fecha" type="text" onChange={this.handleChange} />
                           </FormGroup>

                           <FormGroup>
                               <label>CC</label>
                               <input className="form-control" name="CC" type="number" onChange={this.handleChange} />
                           </FormGroup>


                           <FormGroup>
                               <label>Cliente</label>
                               <input className="form-control" name="Cliente" type="text" onChange={this.handleChange} />
                           </FormGroup>

                           <FormGroup>
                               <label>Vendedor</label>
                               <input className="form-control" name="Vendedor" type="text" onChange={this.handleChange} />
                           </FormGroup>

                           
                       </ModalBody>

                       <ModalFooter>
                           <Button color="primary" onClick={()=> this.insertar()}>Insertar</Button>
                           <Button className="btn btn-danger" 
                           onClick={() => this.cerrarModalInsertar()}
                           >Cancelar
                           </Button>
                       </ModalFooter>
                   </Modal>
              </>
         );
    }
}

export default Barra;