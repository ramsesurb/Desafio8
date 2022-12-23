const { normalize, schema, denormalize } = require("normalizr");
const originalData = {
  id: "999",
  posts: 
  [
    {
      "id_chat": 1,
      "nombre": "Emiliano",
      "id": "ramsesurb@gmail.com",
      "edad": "23",
      "mensaje": "008899"
    },
    {
      "id_chat": 2,
      "nombre": "Emiliano",
      "id": "ramsesurb@gmail.com",
      "edad": "23",
      "mensaje": "como estan todos?"
    },
    {
      "id_chat": 3,
      "nombre": "Emiliano",
      "id": "ramsesurb@gmail.com",
      "edad": "23",
      "mensaje": "todo bien?"
    },
    {
      "id_chat": 4,
      "nombre": "Emiliano",
      "id": "ramsesurb@gmail.com",
      "edad": "23",
      "mensaje": "hola contesten"
    },
    {
      "id_chat": 5,
      "nombre": "Emiliano",
      "id": "ramsesurb@gmail.com",
      "edad": "23",
      "mensaje": "que rica la pile"
    },
    {
      "id_chat": 6,
      "nombre": "Ramses",
      "id": "mamama@gmail.com",
      "edad": "32",
      "mensaje": "Expelliarmus"
    },
    {
      "id_chat": 7,
      "nombre": "Ramses",
      "id": "mamama@gmail.com",
      "edad": "32",
      "mensaje": "Desmaius"
    },
    {
      "id_chat": 8,
      "nombre": "Ramses",
      "id": "mamama@gmail.com",
      "edad": "32",
      "mensaje": "Expecto Patronum"
    },
    {
      "id_chat": 9,
      "nombre": "Ramses",
      "id": "mamama@gmail.com",
      "edad": "32",
      "mensaje": "Expecto Patronum"
    },
    {
      "id_chat": 10,
      "nombre": "Ramses",
      "id": "mamama@gmail.com",
      "edad": "32",
      "mensaje": "Avada Kedavra"
    },
    {
      "id_chat": 11,
      "nombre": "jordan",
      "id": "ramsesurbss@gmail.com",
      "edad": "33",
      "mensaje": "wewewer"
    }
  ]
  
};



const autor = new schema.Entity("autor", {
  
});
const mensajes = new schema.Entity("articles", {
  posts: [autor],
  
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