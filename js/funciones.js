
// // declaracion de funcion

// function saludar(){
//     console.log('hola');
// }

// saludar();


// // funcion exprecion
// const suma = function(){
//     console.log(1  +  2);
// } 

// suma();


// // FUNCIONES CON PARAMETROS

// function operacion(num1,num2){
//     var res = num1+num2;
//     console.log("res",res);
// }

// operacion(5,8);
// operacion(10,5);
// operacion(5,7);


// // FUNCIONES DE RETORNO SIN PARAMETROS

// Function retorno1(){
//     var numero=5;
//     return numero;
// }
// retorno1();
// var retorno=retorno1();
// console.log("sin retorno"+retorno);
// console.log("sin retorno"+retorno1());


// function calcular(base,exp){
//     var result= Math.pow(base,exp);
//     return result;
    
// }
// var m= calcular(8,5);
// let basenum = prompt("ingrese la base");
// let expnum = prompt("ingrese el exponenete");
// console.log("el resultado es"+m);
// console.log("el resultado es "+calcular(basenum,expnum));

































//                                     //PARAMETROS OPCIONALES


// function operaciones(num1,num2,activo = false){
// if (!activo) {
//     console.log("Suma:"+(num1+num2));
//     console.log("Resta:"+(num1-num2));
//     console.log("Division:"+(num1/num2));
//     console.log("Producto:"+(num1*num2));
//     console.log("Activo:"+activo);
//     console.log("**************************");
// } else {
//     document.write("Suma"+(num1+num2)+"</br>");
//     document.write("Resta:"+(num1-num2)+"</br>");
//     document.write("Division:"+(num1/num2)+"</br>");
//     document.write("Producto:"+(num1*num2)+"</br>");
//     document.write("Activo:"+activo+"</br>");
//     document.write("************************");
// }
// operaciones(2,3);
// operaciones(3,5,true);
// }




// function conocerTrabajo(nombre,trabajo="no esta trabajando"){
//     document.write("hola"+nombre+"tu trabajo es: "+trabajo);
// }
// conocerTrabajo("alberto","Desarrollador web");
// conocerTrabajo("rafael",true);




// FUNCIONES IIF


// (function(){
//     console.log('AQUI ESTOY!!');
// }
// )();


// FUNCIONES CON PARAMETROS REST Y SPREAD

// function listarFrutas(fruta1,fruta2,...restFrutas){
//     console.log("fruta1",fruta1);
//     console.log("fruta2",fruta2);
//     console.log("restFrutas",restFrutas);
// }
// listandoFrutas("Naranja","Manzana","Sandia","pera","Durazno","coco");




                      // PARAMETROS TIPO SPREAD



// function listarFrutas2(fruta1,fruta2,...restFrutas){
//     console.log("fruta1",fruta1);
//     console.log("fruta2",fruta2);
//     console.log("restFrutas",restFrutas);
// }
// var frutas = ["Melon","Uva","Kiwi"];
// listandoFrutas2(...frutas,"Naranja","Manzana","Sandia","pera","Durazno","coco");



// //FUNCIONES NORMALES

// function sumar (num1,num2){
//     var res = num1 + num2;
//     return res;
// }
// var resultado = sumar(2,5);
// console.log("resultado de sumar con la funcion",resultado);


// //FUNCIONES ANONIMAS


// var resultado = function(num1,num2){
//     var res =num1 + num2;
//     return res;
// }



// //FUNCIONES LANDA

// console.log("resultado de sumar con la funcion anonima",resultado(10,20));
// var resultado = (num1,num2) => {
//     var res = num1+num2;
//     return res;
// }
// console.log("resultado de sumar con la funcion lamda",resultado(90,30));





// function viajarMundo (destino){
//     let viajar = "viajando por " + destino ;
//     return viajar;
// }

// let destino = viajarMundo("londres");
// console.log(destino);

// let destino2 = function(destino){
//     let viajar ="viajando por "+destino;
//     return viajar;

// }

// let destino3 = (destino) => "viajando por"+destino;




// //FUNCIONES COUVA

// function adicion(num1,num2,suma,prod,resta){
//     console.log("num1",num1);
//     console.log("num2",num2);
//     var res = num1+num2;
//     suma(res);
//     prod(res);
//     resta(num1,num2);

// }

// adicion(5,7,function(total){
//     console.log("la suma es:" +total);
// },function(total){
//     console.log("el doble de "+total+"es: "+total*2);
// },function(n1,n2){
//     console.log("la resta de"+n1+"-"+n2+"="+(n1-n2));
// });

// ????????





var pendientes = ["planear","proyectar","ejecutar","presupuestar","liquidar"];
console.log("arreglo pendientes"+pendientes);

var carrito = [

    {id:1,
    articulo:"guantes"
    },{id:2,
    articulo:"chaglas"
    },{id:3,
    articulo:"esponja"
    },{id:4,
    articulo:"plato"
    },{id:5,
    articulo:"losa"
    }
];

var automovil = {marca:"chevrolet",
                 modelo:"camaro",
                 color:"amarillo",
                 anio:2019
}

document.write("<h1>Recorriendo el arreglo de pendientes</h1>");
document.write("<ul>");
for (let index = 0; index < pendientes.length; index++) {
    document.write("<li>"+ pendientes [index] +"</li>")

}
document.write("</ul>");




document.write("<h1>Recorriendo el arreglo de pendientescon forin</h1>")
document.write("<ul>");
for (const key in pendientes) {
        document.write("<li>" + pendientes[key]+ "</li>")
}
document.write("</ul>");




document.write("<h1>Recorriendo el arreglo de pendientes con foreach</h1>")
document.write("<ul>");
pendientes.forEach(Element => {
    document.write("<li>"+Element+"</li>")
});
document.write("</ul>");



document.write("<h1>Recorriendo el arreglo de pendientes con forof</h1>")
document.write("<ul>");
for (const iterator of pendientes) {
    document.write("<li>"+iterator+"</li>");
}document.write("</ul>");




document.write("<h1>Recorriendo el objeto automovil con forin</h1>");
document.write("<ul>");
for (const key in automovil) {
    document.write("<li>"+key+":"+ automovil[key]+ "</li>")
}
document.write("</ul>");



document.write("<h1>Recorriendo el objeto de automovil con forof</h1>")
document.write("<ul>");
for (const iterator of Object.values(automovil)) {
    document.write("<li>"+iterator+"</li>");
}document.write("</ul>");



document.write("<h1>Recorriendo el objeto de automovil con for each</h1>")
document.write("<ul>");
Object.values(automovil).forEach(Element =>{
    document.write("<li>"+Element+"</li>");
})

document.write("</ul>");


document.write("<h1>Recorriendo el objeto automovil con for in</h1>");
document.write("<ul>");

for (const key in carrito) {
    document.write("<li>"+"Elemento "+key+" del carrito");
    document.write("<ul>");

    Object.values(carrito[key]).forEach(element =>{
        document.write("<li>"+element+"</li>");
    });
    document.write("</ul>");
    document.write("</li>");
}
document.write("</ul>");






