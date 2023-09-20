
class Persona{
 nombre:string;
 numero:number;

 constructor(a:number, b:string){
    this.nombre = b;
    this.numero = a;
 }

 imprimir(){
    console.log(`Nombre: ${this.nombre} y edad: ${this.numero}`);

 }
}
let persona:Persona;
persona= new Persona(22, 'Mario');
persona.imprimir();

class Dado{
    private valor:number= 0;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1
    }
    public imprimir(){
        console.log(`Salio el valor ${this.valor}`);
    }
}
let dado1=new Dado();
dado1.tirar();
dado1.imprimir();

class Persona2{
    constructor(public nombre:string, public numero:number){}
    imprimir(){
        console.log(`Nombre: ${this.nombre} y edad: ${this.numero}`);
    }
}
let humano:Persona2;
persona= new Persona2('Delia', 33);
persona.imprimir();
