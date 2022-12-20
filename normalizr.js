const { normalize, schema, denormalize } = require("normalizr");
const originalData = {
  id: "999",
  posts: [
    {
      id: "1",
      autor: 
        {
          id: "ramsesurb@gmail.com",
          nombre: "Emiliano",
          edad: "23",
        },
       mensaje: "008899"
    },
    {
      id: "2",
      autor: 
      {
          id: "ramsesurb@gmail.com",
          nombre: "Emiliano",
          edad: "23",
    },
      mensaje: "como estan todos?",
    },
    {
      id: "3",
      autor: 
        {
          id: "ramsesurb@gmail.com",
          nombre: "Emiliano",
          edad: "23",
        }
      ,
       mensaje: "todo bien?"
    },
    {
      id: "4",
      autor: 
        {
          id: "ramsesurb@gmail.com",
          nombre: "Emiliano",
          edad: "23",
        }
      ,
       mensaje: "hola contesten"
    },
    {
      id: "5",
      autor: 
        {
          id: "mamama@gmail.com",
          nombre: "Ramses",
          edad: "32",
        }
      ,
       mensaje: "que rica la pile"
    },
    {
      id: "6",
      autor: 
        {
          id: "mamama@gmail.com",
          nombre: "Ramses",
          edad: "32",
        }
      ,
      mensaje: "Expelliarmus",
    },
    {
      id: "7",
      autor: 
        {
          id: "mamama@gmail.com",
          nombre: "Ramses",
          edad: "32",
        }
      ,
      mensaje: "Desmaius",
    },
    {
      id: "8",
      autor: 
        {
          id: "mamama@gmail.com",
          nombre: "Ramses",
          edad: "32",
        }
      ,
     mensaje: "Expecto Patronum",
    },
    {
      id: "9",
      autor: 
        {
          id: "mamama@gmail.com",
          nombre: "Ramses",
          edad: "32",
        }
      ,
      mensaje: "Avada Kedavra",
    },
  ],
};

const user = new schema.Entity("persona");
const comment = new schema.Entity("mensaje", {
  autor: user,
});
const post = new schema.Entity("post", {
  autor: user,
  mensaje: [comment],
});
const mensajes = new schema.Entity("articles", {
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