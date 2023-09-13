interface Reproductor{
    volumen:number;
    segundos: number;
    cancion:string;
    detalles:Detalles;
}
//interfaz son herencias de detalles y no importa el orden
interface Detalles{
    cantante:string;
    year:number;
}

//let matricula:number; no se puede copilar ya que existe en otro archivo
const reproductor:Reproductor={
    volumen: 90,
    segundos:60,
    cancion:'Save',
    detalles:{
        cantante: 'Dove Cameron',
        year: 2022
    }
}
//esto es lo normal

//console.log(`El volumen actual es: ${reproductor.volumen}`);
//console.log(`El cantante es: ${reproductor.detalles.cantante}`);

//esto es la desustructuracion de objectos
const{volumen,detalles}=reproductor
const{cantante}=detalles

console.log(`El volumen actual es: ${volumen}`);
console.log(`El cantante es: ${cantante}`);

//areglos
const colores:string[]=['red', 'blue','green', 'violet'];
console.log(`El color 1: ${colores[0]}`);
console.log(`El color 2: ${colores[1]}`);
console.log(`El color 3: ${colores[2]}`);
console.log(`El color 4: ${colores[3]}`);

const[a,,,b]=colores;
console.log(`El color 1: ${a}`);
console.log(`El color 2: ${b}`);