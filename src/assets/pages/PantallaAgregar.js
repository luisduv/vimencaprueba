import react, {Component} from "react";

export default function PantallaAgregar (props){


        return(
            <div>
                
                <div class="card text-center">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="true">Registrar Colector</a>
                        </li>
                        
                        </ul>
                    </div>

                        <form className="form-grup">
                            <div className="d-flex justify-content-start form-group ">
                                Informacion Colector
                            </div>
                            <hr></hr>
                            <div class="form-group row" >
                                <label for="Codigo" class="col-sm-2 col-form-label ">Codigo Celector</label>
                                <div class="col-sm-10">
                                <input type="email" class="form-control" id="Codigo" /* value={this.state.data.length+1} */ placeholder="Codigo"></input>
                                </div>
                            </div>
                         
                            <div class="form-group row">
                                <label for="Identificacion" class="col-sm-2 col-form-label ">Numero Identificacion</label>
                                <div class="col-sm-10">
                                <input type="email" class="form-control" id="Identificacion" placeholder="Numero Identificacion"></input>
                                </div>
                            </div>
                           
                            <div class="form-group row">
                                <label for="Nombre" class="col-sm-2 col-form-label ">Nombre</label>
                                <div class="col-sm-10">
                                <input type="email" class="form-control" id="Nombre" placeholder="Nombre"></input>
                                </div>
                            </div>
                           
                            <div class="form-group row">
                                <label for="Apellido" class="col-sm-2 col-form-label ">Apellido</label>
                                <div class="col-sm-10">
                                <input type="email" class="form-control" id="Apellido" placeholder="Apellido"></input>
                                </div>
                            </div>
                           
                            <div class="form-group row">
                                <label for="Segundo_Apellido" class="col-sm-2 col-form-label ">Segundo Apellido</label>
                                <div class="col-sm-10">
                                <input type="email" class="form-control" id="Segundo_Apellido" placeholder="Segundo Apellido"></input>
                                </div>
                            </div>
                           
                            <div class="form-group row">
                                <label for="Fecha" class="col-sm-2 col-form-label ">Fecha Inicio</label>
                                <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail3" placeholder="Fecha"></input>
                                </div>
                            </div>
                         
                            <div class="form-group row">
                                <label for="Visualizacion" class="col-sm-2 col-form-label ">Visualizacion</label>
                                <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail3" placeholder="Visualizacion"></input>
                                </div>
                            </div>
                           
                        
                            </form>
                        

                        
                    
                </div>

            </div>
        )
    }


    PantallaAgregar.defaultProps={
        fecha:'15'
    }

