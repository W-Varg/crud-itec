// modelo que se va almcenar en la base de datos
export class CatModel {
  //identificador unico
  id?: number; // 1 , 3 ,4, 5

  nombre: string;

  raza: string;

  edad: number;

  esBebe: boolean;

  estaAutorizado: boolean;

  fechaCreacion: Date;
  usuarioCreadorId: number;

  fechaActualizacion?: Date;
  usuarioActualizadorId?: number;
}
