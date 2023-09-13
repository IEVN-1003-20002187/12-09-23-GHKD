function sumar():void{
    console.log(3+7);
}

sumar()

function sumar2(a:number, b:number):number{
    return(a+b)
    //console.log(a+b);
}

const resultado=sumar2(4,89)
console.log(resultado);

interface Mascotas{
    nombre: string;
    edad: number;
    mostrarEdad:()=>void;
}

function calcular(mascota:Mascotas, x:number):void{
mascota.edad+=x;
console.log(mascota);
}

const nuevaMascota:Mascotas={
    nombre:"Pio",
    edad: 2,
    mostrarEdad():void{
        console.log('la edad es:', this.edad);
    }
}
calcular(nuevaMascota,3);
