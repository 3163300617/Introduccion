//*definicion de objetos 

let persona = {
    nombre:"carlos",
    edad:56,
    apellido:"Mancipe",
    trabajo:true,
    musica:["Rock","Pop","Metal","Tropical"],
    casas:{
        ciudad:"Medellin",
        departamento:"antioquia"
    },
    anioNacimiento:function(){
        
        return new Date().getFullYear()- this.edad;
    }

}

document.write("<ul>");
for (const key in persona) {
    document.write("<li>"+key+":"+ persona[key]+ "</li>")
}
document.write("</ul>");

document.write(`<h2>Tercer elemento del arreglo musica del objeto persona:</h2> ${persona.musica[3]}`);

document.write(`<h2>primer elemento del objeto casas del objeto persona:</h2> ${persona.casas.ciudad}`);

document.write(`<h2>segundo elemento del objeto casas del objeto persona:</h2> ${persona.casas.departamento}`);

let anioNacimiento = persona.anioNacimiento();
document.write(`<h2>funcion anionacimiento del objeto persona:</h2> ${anioNacimiento}`);

document.write("<h2>Reproductor musical</h2>");
let music ={
    play:function(cancion){
        document.write(`Play => ${cancion}<br>`);
    },
    pausar:function(){
        document.write('Paused <br>');
    },
    parar:function(){
        document.write('Stop !!!! <br>');
    }
}

music.play("amnesia");
music.pausar();
music.parar();
music.play("Testimonio");
music.parar();
music.play("Vida");





//*************************************CONSTRUCTORES***********************************/


//**forma literal */
let tarea = {
    nombre:"aprendiendo",
    tecnologia:"javascript"
}

//**fofotma constructor */
function Tarea(nombre,tecnoligia){
    this.nombre = nombre;
    this.tecnoligia = tecnoligia;
}

let fecha = new Date
let nTarea = new Tarea("estudiar","javascript");
let nTarea1 = new Tarea("estudiar","php");
let nTarea2 = new Tarea("estudiar","java");
console.log(nTarea);
console.log(nTarea.nombre,nTarea.tecnoligia);
console.log(nTarea1.nombre,nTarea1.tecnoligia);
console.log(nTarea2.nombre,nTarea2.tecnoligia);

//**nueva forma */

class Tarea3{
    constructor(ojos,pelo,peso){
        this.peso = peso;
        this.ojos = ojos;
        this.pelo = pelo;
    }
}

let tarea3 = new Tarea3("verdes","negro",60);
console.log(tarea3);
let tarea4 = new Tarea3(80,6,60);
console.log(tarea4);


//***crear un arreglo llamado personas denntro de ese objeto quiero que esten 5 objetos*/

const personas =[
    {nombre: 'Juan', edad: 20},
    {nombre: 'Pablo', edad: 50},
    {nombre: 'Alejandro', edad: 23},
    {nombre: 'Karen', edad: 28},
    {nombre: 'Miguel', edad: 33},
]

//**obtener las personas que sean mayores de 25 años */

const mayores = personas.filter(persona => persona.edad > 25);
console.log(mayores);

const alejandro = personas.find(persona => persona.nombre === 'Alejandro');
console.log(alejandro);

let total = personas.reduce((edadTotal,persona) => edadTotal+persona.edad,0);
console.log(total);