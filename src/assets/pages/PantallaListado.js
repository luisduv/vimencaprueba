import react , {Component} from "react";
import PantallaEditar from './PantallaEditar';
import PantallaAgregar from './PantallaAgregar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'reactstrap';


const data = [
    {id:1,nombre:"luis",apellido:"paulino",segundoApellido:"mari",tipoIdentificacion:"cedula",numeroIdentificacion:"40215628013",fecha:'25/10/2019'},
    {id:2,nombre:"pedro",apellido:"marichal",segundoApellido:"perla",tipoIdentificacion:"pasaporte",numeroIdentificacion:"0012356025",fecha:'15/10/2019'},
    {id:3,nombre:"juan",apellido:"fernandez",segundoApellido:"jose",tipoIdentificacion:"cedula",numeroIdentificacion:"4025689456",fecha:'10/10/2019'},
    {id:4,nombre:"marcos",apellido:"alejandro",segundoApellido:"santos",tipoIdentificacion:"pasaporte",numeroIdentificacion:"001215465",fecha:'18/10/2019'},
    {id:5,nombre:"victor",apellido:"rosa",segundoApellido:"manuel",tipoIdentificacion:"cedula",numeroIdentificacion:"40245689515",fecha:'13/10/2019'},
    {id:6,nombre:"alan",apellido:"diaz",segundoApellido:"enrique",tipoIdentificacion:"pasaporte",numeroIdentificacion:"00145456",fecha:'12/10/2019'},
    {id:7,nombre:"pablo",apellido:"perez",segundoApellido:"alexander",tipoIdentificacion:"cedula",numeroIdentificacion:"4025687569",fecha:'16/10/2019'},

]



export default class PantallaListado extends Component{
    constructor(props){
        super(props);
        this.state={
            data:data,
                form:{
                    id:'',
                    nombre:'',
                    apellido:'',
                    segundoApellido:'',
                    tipoIdentificacion:'', 
                    numeroIdentificacion:'',
                    fecha:''},
            divInsertar:false,
            divEditar:false,
        }
    }

    

    handleChange=e=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    MostrarPantallaAgregar=()=>{
        this.setState({divInsertar:true});
    }

    MostrarPantallaEditar=(registro)=>{
        this.setState({divEditar:true,form:registro});
    }

    OcultarPantallaEditar=()=>{
        this.setState({divEditar:false});
    }

    OcultarPantallaAgregar=()=>{
        this.setState({divInsertar:false});
    }

    insertar=()=>{
        var valorNuevo = {...this.state.form};
        valorNuevo.id = this.state.data.length+1;
        var lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({data:lista,/* divInsertar:false */});
        console.log(data)

        /* ---- */
       var formulario =new FormData( document.getElementById('formulario'));

        fetch('registrar.php',{
            method:'POST',
            body:formulario
        })

        .then(res =>res.json())
        .then(data=>{
            if(data=='true'){
                this.setState({divInsertar:false});
            }else{
                console.log(data)
            }
        })





    }

    editar=(dato)=>{
       var contador = 0;
       var lista =this.state.data;
       lista.map(registro=>{
           if(dato.id==registro.id){
                lista[contador].nombre=dato.nombre;
                lista[contador].apellido=dato.apellido;
                lista[contador].segundoApellido=dato.segundoApellido;
                lista[contador].tipoIdentificacion=dato.tipoIdentificacion;
                lista[contador].numeroIdentificacion=dato.numeroIdentificacion;
                lista[contador].fecha=dato.fecha;
           }
           contador++;
       })

       this.setState({data:lista,divEditar:false});
    }

    eliminar=(dato)=>{
        var opcion=window.confirm("Esta seguro de eliminar el cliente " + dato.id);
        if(opcion){
            var contador=0;
            var lista = this.state.data;
            lista.map((registro)=>{
                if(registro.id==dato.id){
                    lista.splice(contador,1)
                }
                contador++;
            });
            this.setState({data:lista});
        }
    }

    render(){
        return(
            <div >
                <div className="card ">
                    <div className="card-header">
                        
                        <ul className="nav nav-tabs card-header-tabs d-flex justify-content-between">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="true" >Lista de Colector</a>
                            

                        </li>
                        <li><button onClick={()=>this.MostrarPantallaAgregar()} className="btn btn-success">Agregar Nuevo Cliente</button>
                        </li>
                        </ul>
                    </div>
                    <table className="table table-bordered ">
                            <thead>
                                <tr>
                                <th scope="col">Codigo Celector</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Segundo Apellido</th>
                                <th scope="col">Tipo de Identificacion</th>
                                <th scope="col">Numero Identificacion</th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                {console.log(data)}
                                {this.state.data.map((e)=>(
                                    <tr>
                                        
                                        <td>{e.id}</td>
                                        <td>{e.nombre}</td>
                                        <td>{e.apellido}</td>
                                        <td>{e.segundoApellido}</td>
                                        <td>{e.tipoIdentificacion}</td>
                                        <td>{e.numeroIdentificacion}</td> 
                                        <td><button onClick={()=>this.MostrarPantallaEditar(e)} className="btn btn-primary">Editar</button>{"  "}
                                        <button onClick={()=>this.eliminar(e)} className="btn btn-danger">Eliminar</button></td>

                                    </tr>
                                 ))}
                            </tbody>
                            </table>
                    </div>

                    

                    <Modal isOpen={this.state.divInsertar}>
                        <div  className="card text-center">
                            <div className="card-header">
                                <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="true">Registrar Colector</a>
                                </li>
                                
                                </ul>
                            </div>

                            <form method="Post" id="formulario"  className="form-grup">
                                <div className="d-flex justify-content-start form-group ">
                                    Informacion Colector
                                </div>
                                <hr></hr>
                                <div className="form-group row" >
                                    <label for="id" className="col-sm-2 col-form-label ">Codigo Celector</label>
                                    <div className="col-sm-10">
                                    <input type="text" className="form-control" name="id" id="id"  value={this.state.data.length+1}  placeholder="Codigo"></input>
                                    </div>
                                </div>
                            
                                <div className="form-group row">
                                    <label for="numeroIdentificacion" className="col-sm-2 col-form-label ">Numero Identificacion</label>
                                    <div class="col-sm-10">
                                    <input type="text" className="form-control" name="numeroIdentificacion" id="numeroIdentificacion" onChange={this.handleChange} placeholder="Numero Identificacion"></input>
                                    </div>
                                </div>
                            
                                <div className="form-group row">
                                    <label for="nombre" className="col-sm-2 col-form-label ">Nombre</label>
                                    <div className="col-sm-10">
                                    <input type="text" className="form-control" name="nombre"  onChange={this.handleChange} id="nombre" placeholder="Nombre"></input>
                                    </div>
                                </div>
                            
                                <div className="form-group row">
                                    <label for="apellido" className="col-sm-2 col-form-label ">Apellido</label>
                                    <div className="col-sm-10">
                                    <input type="text" className="form-control" name="apellido"  onChange={this.handleChange} id="apellido" placeholder="Apellido"></input>
                                    </div>
                                </div>
                            
                                <div className="form-group row">
                                    <label for="segundoApellido" className="col-sm-2 col-form-label ">Segundo Apellido</label>
                                    <div className="col-sm-10">
                                    <input type="text" className="form-control" name="segundoApellido"  onChange={this.handleChange} id="segundoApellido" placeholder="Segundo Apellido"></input>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="tipoIdentificacion" className="col-sm-2 col-form-label ">tipoIdentificacion</label>
                                    <div className="col-sm-10">
                                    <input type="text" className="form-control" name="tipoIdentificacion"  onChange={this.handleChange} id="tipoIdentificacion" placeholder="Segundo Apellido"></input>
                                    </div>
                                </div>
                            
                                <div className="form-group row">
                                    <label for="fecha" className="col-sm-2 col-form-label ">Fecha Inicio</label>
                                    <div className="col-sm-10">
                                    <input type="date" className="form-control" name="fecha" onChange={this.handleChange}  id="fecha" placeholder="Fecha"></input>
                                    </div>
                                </div>

                                <button type="button"  onClick={ ()=>this.insertar()} className="btn btn-success" >Agregar Cliente</button>{"  "}
                                <button type="button" className="btn btn-danger" onClick={()=>this.OcultarPantallaAgregar()}>Cancelar</button>

                            
                            
                            </form>
                        </div>
                    </Modal>

                    {/* --- */}






                    <Modal isOpen={this.state.divEditar}>
                        <div  className="card text-center">
                            <div className="card-header">
                                <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="true">Editar Colector</a>
                                </li>
                                
                                </ul>
                            </div>

                            <form method="Post"  className="form-grup">
                                <div className="d-flex justify-content-start form-group ">
                                    Informacion Colector
                                </div>
                                <hr></hr>
                                <div className="form-group row" >
                                    <label for="id" className="col-sm-2 col-form-label ">Codigo Celector</label>
                                    <div className="col-sm-10">
                                    <input type="text" className="form-control" name="id" id="id" value={this.state.form.id}  placeholder="Codigo"></input>
                                    </div>
                                </div>
                            
                                <div className="form-group row">
                                    <label for="numeroIdentificacion" className="col-sm-2 col-form-label ">Numero Identificacion</label>
                                    <div class="col-sm-10">
                                    <input type="text" className="form-control" value={this.state.form.numeroIdentificacion} name="numeroIdentificacion" id="numeroIdentificacion" onChange={this.handleChange} placeholder="Numero Identificacion"></input>
                                    </div>
                                </div>
                            
                                <div className="form-group row">
                                    <label for="nombre" className="col-sm-2 col-form-label ">Nombre</label>
                                    <div className="col-sm-10">
                                    <input type="text" className="form-control" value={this.state.form.nombre} name="nombre"  onChange={this.handleChange} id="nombre" placeholder="Nombre"></input>
                                    </div>
                                </div>
                            
                                <div className="form-group row">
                                    <label for="apellido" className="col-sm-2 col-form-label ">Apellido</label>
                                    <div className="col-sm-10">
                                    <input type="text" className="form-control" name="apellido" value={this.state.form.apellido}  onChange={this.handleChange} id="apellido" placeholder="Apellido"></input>
                                    </div>
                                </div>
                            
                                <div className="form-group row">
                                    <label for="segundoApellido" className="col-sm-2 col-form-label ">Segundo Apellido</label>
                                    <div className="col-sm-10">
                                    <input type="text" className="form-control" name="segundoApellido" value={this.state.form.segundoApellido}  onChange={this.handleChange} id="segundoApellido" placeholder="Segundo Apellido"></input>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="tipoIdentificacion" className="col-sm-2 col-form-label ">tipoIdentificacion</label>
                                    <div className="col-sm-10">
                                    <input type="text" className="form-control" name="tipoIdentificacion" value={this.state.form.tipoIdentificacion}  onChange={this.handleChange} id="tipoIdentificacion" placeholder="Segundo Apellido"></input>
                                    </div>
                                </div>
                            
                                <div className="form-group row">
                                    <label for="fecha" className="col-sm-2 col-form-label ">Fecha Inicio</label>
                                    <div className="col-sm-10">
                                    <input type="date" className="form-control" name="fecha" value={this.state.form.fecha} onChange={this.handleChange}  id="fecha" placeholder="Fecha"></input>
                                    </div>
                                </div>

                                <button type="button"  onClick={ ()=>this.editar(this.state.form)} className="btn btn-success" >Completar Edicion</button>{"  "}
                                <button type="button" className="btn btn-danger" onClick={()=>this.OcultarPantallaEditar()}>Cancelar</button>

                            
                            
                            </form>
                        </div>
                    </Modal>




                    

        
            </div>

            
        )
    }
}