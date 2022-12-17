const { normalize, schema, denormalize } = require("normalizr");
const originalData =  [
  {autor1:{
      "id_chat": 1,
      "nombre": "Emiliano",
      "mail": "ramsesurb@gmail.com",
      "edad": "23",
    },
    mensaje:{ "mensaje": "008899"}
  },
  {autor1:{
      "id_chat": 2,
      "nombre": "Emiliano",
      "mail": "ramsesurb@gmail.com",
      "edad": "23",
  },
  mensaje:{ "mensaje": "como estan todos?"}
},
{autor1:{
  "id_chat": 3,
  "nombre": "Emiliano",
  "mail": "ramsesurb@gmail.com",
  "edad": "23",
},
mensaje:{ "mensaje": "todo bien?"}
},{autor:{
  "id_chat": 4,
  "nombre": "Emiliano",
  "mail": "ramsesurb@gmail.com",
  "edad": "23",
},
mensaje:{ "mensaje": "hola contesten"}
},
{autor1:{
  "id_chat": 5,
  "nombre": "Emiliano",
  "mail": "ramsesurb@gmail.com",
  "edad": "23",
},
mensaje:{ "mensaje": "que rica la pile"}
},
{autor2:{
  "id_chat": 6,
  "nombre": "Ramses",
  "mail": "mamama@gmail.com",
  "edad": "32",
},
mensaje:{"mensaje": "Expelliarmus"}
},
{autor2:{
  "id_chat": 7,
  "nombre": "Ramses",
  "mail": "mamama@gmail.com",
  "edad": "32",
},
mensaje:{"mensaje": "Desmaius"}
},
{autor2:{
  "id_chat": 8,
  "nombre": "Ramses",
  "mail": "mamama@gmail.com",
  "edad": "32",
},
mensaje:{"mensaje": "Expecto Patronum"}
},
{autor2:{
  "id_chat": 9,
  "nombre": "Ramses",
  "mail": "mamama@gmail.com",
  "edad": "32",
},
mensaje:{"mensaje": "Avada Kedavra"}
},
]


const user = new schema.Entity("autor1");
const user2 = new schema.Entity("autor2");
const mensaje = new schema.Entity("mensaje");
const post = new schema.Entity("posts", {
  autor1: user,
  autor2: user2,
  mensaje: mensaje,
});
const mensajes = new schema.Entity("mensajes", {
  posts: [post],
});


const util = require("util");

function printData(obj) {
  console.log(util.inspect(obj, false, 12, true));

}

const dataNormalizada = normalize(originalData,mensajes);
console.log("Datos originales: ",dataNormalizada);

printData(dataNormalizada);

console.log(
  "original:",JSON.stringify(originalData).length,
  "nuevo:",JSON.stringify(dataNormalizada).length
);

const dataOriginal = denormalize(
  dataNormalizada.result,
  mensajes,
  dataNormalizada.entities
);
printData(dataOriginal);

function porcentaje(uno, dos) {
  const porcentajes = Math.round(100 - (uno * 100) / dos);
  console.log("porcentaje de compresión del proceso de normalización: " ,porcentajes, "%");
}
porcentaje(
  parseInt(JSON.stringify(dataNormalizada).length),
  parseInt(JSON.stringify(originalData).length)
);