interface Alumno{
    matricula:number;
    nombre: string;
    email:string;
    edad:number;
    
    }
    
    const alumno:Alumno={
    matricula: 123,
    nombre: 'Karen',
    email:'karen@gmail.com',
    edad: 20
    }
    
    //definir un arreglo
    let mascotas=['perro', 'gato', 'perico']
    console.table(mascotas);
mascotas[1]='Otro gato';
mascotas.push('perico verde');
console.table(mascotas);

let nuevoArre:(number|string)[]=[]
nuevoArre.push('RCR');
nuevoArre.push(45789);

