import { calcularIVA2,Producto } from "./5-desestructura-funciones";

const carrito:Producto[]=[
    {
        desc:'Telefono1',
        precio:1200
    },
    {
        desc:'Telefono1',
        precio:1200
    },
    {
        desc:'Telefono1',
        precio:1200
    },
]
const [total,iva]=calcularIVA2(carrito);
console.log(`Total ${total}`);
console.log(`IVA ${iva}`);