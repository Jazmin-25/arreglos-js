/*
let = Libros 

   Libros
+-----------------------+
 Cien años de soledad   | 0
+-----------------------+
| Rayuela               | 1
+-----------------------+
| El Carrousel          | 2
+-----------------------+
| La Catedral del Mar   | 3
+-----------------------+
| Memorias de una Geisha| 4
+-----------------------+
| 1984                  | 5
+-----------------------+
| El Hobbit             | 6
+-----------------------+    
 */ //arreglos

////

let libros = ["Cien años de soledad","Rayuela","El Carrousel","La Catedral del Mar","Memorias de una Geisha","1984","El Hobbit"]
let divAlert = document.getElementById("divAlert");

libros[7] = "El viaje al centro de la tierra";

divAlert.innerHTML = libros.length +" libros";

//console.log(libros.length);  //7

divAlert.innerHTML+= "<ol><li>" + libros [0] + "</li>"
+ "<li>" + libros[1] + "</li>"
+ "<li>" + libros[2] + "</li>"
+ "<li>" + libros[3] + "</li>"
+ "<li>" + libros[4] + "</li>"
+ "<li>" + libros[5] + "</li>"
+ "<li>" + libros[6] + "</li>"
+ "<li>" + libros[7] + "</li></ol>"

