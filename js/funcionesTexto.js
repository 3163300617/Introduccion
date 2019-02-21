
var numero =0;
var txt1="Metodos para procesar textos";
var txt2="Utiles en archivos de texto";
var ciudades=["Tunja","Jenesano","Bogota","Cali","Medellin"]
var email=""
//**Longitud de string */
document.write("La longitud de la variable num es: "+String(numero).length+"<br>");
document.write("La longitud de txt1 es: "+txt1.length+"<br>");
document.write("La longitud de txt2 es: "+txt2.length+"<br>");
document.write("La longitud de ciudades es: "+ciudades.length+"<br>");
//** concatenacion de string*/
document.write("concatenando txt1 y txt2 " + txt1.concat(txt2));
//pasando a mayusculas
document.write("pasando a mayusculas txt1 "+txt1.toUpperCase()+"<br>");
document.write("pasando a mayusculas txt2 "+txt2.toUpperCase());
//primer indice de textos
document.write("primera coincidencia de textos es: "+txt1.indexOf("textos"));
document.write("primera coincidencia de textos es: "+txt1.lastIndexOf("textos")+"<br>");
document.write("buscando archvo en txt2 "+txt2.search("archivos")+"<br>");
document.write("recortar caracter del 10 al 15 " +txt2.slice(10,15)+"<br>");
document.write("buscar el inicio de la letra "+ txt2.startsWith("u")+"<br>");
document.write("buscar fin de letra "+ txt2.endsWith("n")+"<br>");
document.write("buscar palabra especifica "+txt2.includes("para")+"<br>");
document.write("buscar @ " +email.includes("@")+"<br>");

//**convirtiendo a arreglos */

console.log("convirtiendo txt2 a arreglo "+txt2.split(" ")+"<br>");

var txt3 = "            Procesando textos              ";
document.write("El valor de txt3  es :"+txt3);


