
import React from 'react';
import './assets/css/App.css';
import Barra from './component/Barra';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody,ModalHeader, Form, FormGroup, ModalFooter} from 'reactstrap';
//Importar componentes 



function App() {

  return (
    <div>
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <div className="navbar-brand " style={{ color: 'white', textAlign:'center' , width: '100%',  }} id="Title"  ><h1>Gamer Team </h1> </div>
 
</header>


<div className="container-fluid">
  <div className="row">
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" >
              <span data-feather="home"></span>
              Iniciar Sesion
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >
              <span data-feather="file"></span>
              Registrarme
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >
              <span data-feather="shopping-cart"></span>
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >
              <span data-feather="users"></span>
              Ventas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >
              <span data-feather="bar-chart-2"></span>
              Roles
            </a>
          </li>
          
        </ul>

        
      </div>
    </nav>

    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 >Ventas</h1>
      </div>

      <section className="componente">

      <Barra/>
      </section>
      
      <div className="table-responsive">
       
      </div>
    </main>
  </div>
</div>


    <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

      <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossorigin="anonymous"></script><script src="dashboard.js"></script>

    </div>
  );
}

export default App;
