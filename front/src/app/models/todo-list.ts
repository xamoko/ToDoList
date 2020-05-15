export class TodoList {

    constructor(_id='', nombre="",especialidad="",consultorio="",numerotelefono=0){
        this._id = _id;
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.consultorio = consultorio;
        this.numerotelefono = numerotelefono;
    }

    _id:string;
    nombre:string;
    especialidad:string;
    consultorio:string;
    numerotelefono:number;
}
