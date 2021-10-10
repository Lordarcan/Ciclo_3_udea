import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super();
        this.state ={
            nombre:'',
            descripcion:'',
            precio:'',
            productos: [], 
            _id:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addProducto = this.addProducto.bind(this);
    }

    addProducto(e){
        if(this.state._id){
            fetch(`/api/products/${this.state._id}`, {
                method: 'PUT',
                body:JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html:'Producto actualizado correctamente'});
                this.setState({nombre:'', descripcion:'', precio:''});
                this.obtenerProductos();
            });
        } else{
            fetch('/api/products',{
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    M.toast({html:'Producto Guardado Exitosamente'});
                    this.setState({nombre:'', descripcion:'', precio:''});
                    this.obtenerProductos();
                })
                .catch(err => console.error(err));
        }
        e.preventDefault();
    }

    componentDidMount() {
        this.obtenerProductos();
    }

    obtenerProductos(){
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                this.setState({productos: data});
            });
    }

    deleteProducto(id){
        if (confirm('¿Está seguro de eliminar el producto?')){
            fetch('/api/products/'+id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html:'Producto eliminado'});
                this.obtenerProductos();
            });
        }
    }

    editProducto(id){
        fetch('/api/products/'+id)
            .then(res => res.json())
            .then(
                data =>{
                    console.log(data)
                    this.setState({
                       nombre: data.nombre,
                       descripcion: data.descripcion,
                       precio: data.precio,
                       _id: data._id
                })
            });
            
    }

    handleChange(e) {
        const{name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    

    render(){
        return(
            <div>
                <nav className="green darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">PRODUCTOS</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                  <div className="card-content">
                                      <form onSubmit={this.addProducto}>
                                          <div className="row">
                                              <div className='input-field col s12'>
                                                  <input value={this.state.nombre} name="nombre" onChange={this.handleChange} type="text" placeholder="Nombre del producto"/>
                                              </div>
                                          </div>
                                          <div className="row">
                                              <div className='input-field col s12'>
                                                  <textarea value={this.state.descripcion} name="descripcion" onChange={this.handleChange} placeholder="Descripcion del producto" className="materialize-textarea"></textarea>
                                              </div>
                                          </div>
                                          <div className="row">
                                              <div className='input-field col s12'>
                                                  <input value={this.state.precio} name="precio" onChange={this.handleChange} type="number" placeholder="Precio del producto"/>
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
                                    <th>Nombre producto</th>
                                    <th>Descripcion producto</th>
                                    <th>Precio producto</th>
                                </thead>
                                <tbody>
                                    {
                                        this.state.productos.map(productos =>{
                                            return(
                                                <tr key ={productos._id}>
                                                    <td>{productos.nombre}</td>
                                                    <td>{productos.descripcion}</td>
                                                    <td>{productos.precio}</td>
                                                    <td>
                                                        <button className="btn red" onClick={()=>this.deleteProducto(productos._id)}>
                                                            <i className="material-icons" >
                                                                delete
                                                            </i>                                                            
                                                        </button>
                                                        <></>
                                                        <button className="btn yellow darken-3"onClick={()=>this.editProducto(productos._id)}>
                                                        <i className="material-icons">
                                                                edit
                                                            </i>  
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;