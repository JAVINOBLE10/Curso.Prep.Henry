// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto ({D: 1,B: 2,C: 3})    ➞   [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var nuevoArray = [];

  for (var clave in objeto) {
    nuevoArray.push([clave,objeto[clave]]);
  }
  return nuevoArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let obj={};
  for(let i = 0; i < string.length; i++){
    if (!obj[string[i]]){
      obj[string[i]]=0;
    }
    obj[string[i]]+=1;
  }
  return obj;
}

 

                                              



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
 let minus= "";
 let mayus= "";
 for(let i=0; i< s.length; i++ ){
  if(s.charAt(i) === s.charAt(i).toUpperCase())
    mayus += s.charAt(i)
  else
    minus += s.charAt(i)
 }
 let nuevapalabra =mayus+minus;  
 return nuevapalabra;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let string = [];
  for (let i = 0; i < str.length; i++){
string.unshift(str[i])

  }
  return string.join('').split(" ").reverse().join(" ")
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
 
let alReves= numero.toString().split("").reverse().join("")
alReves= parseInt(alReves)
if (numero===alReves){
  return "Es capicua"
}
return "No es capicua"
}




function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  nuevacadena= cadena.split("").filter(x => x  !== "a" && x !== "b" && x !== "c")
   return nuevacadena.join("")
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  let nuevacadena = [...arr];

  let change;
  do{
    change = false;
    for (let i = 0; i < nuevacadena.length; i++) {
      if(i+1 < nuevacadena.length && nuevacadena[i].length > nuevacadena[i +1].length){
        let aux = nuevacadena[i];
        nuevacadena[i] = nuevacadena[i +1];
        nuevacadena[i +1] = aux;
        change = true;
      } 
    }
  }while(change)
  
  /* 
  nuevacadena = arr.sort((palabraA, palabraB)=>{
    if(palabraA.length === palabraB.length)
      return 0
    if(palabraA.length < palabraB.length)
      return -1
    else 
      return 1
  })
  */
  return nuevacadena;
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí   
  
}





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

