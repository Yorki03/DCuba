export class Registro{
    id_usuario: number;
    nombre: string;
    apellidos: string;
    email: string;
    telefono: string;
    password:string;

    constructor( data: any){
        this.id_usuario = data.id_usuario;
        this.nombre = data.nombre;
        this.apellidos = data.apellidos;
        this.email = data.email;
        this.telefono = data.telefono;
        this.password = data.password;
    }
}