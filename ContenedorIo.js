const { promises: fs } = require('fs');
//onst ClienteSqlChat = require("./model/sqlLite3")
//const Sql = new ClienteSqlChat

class ContenedorIo{

    async getChat(){
        try{
            const contentChat = JSON.parse(await fs.readFile(`./api/historialChat.json`,'utf-8'))
            return contentChat
        }catch(error){
            console.log(error)
         }
    }

    async saveChat(data){ 
        
        try{
        const chat = await this.getChat()
        const lastId = chat.length
        const newMensaje = {id_chat:(lastId+1),nombre: data.nombre,id:data.mail ,edad:data.edad,mensaje: data.mensaje}
        const mensaje={mensaje: data.mensaje}
        const fullMsg= {newMensaje}
        await chat.push(newMensaje)
        //await Sql.insertChat(newMensaje)
        await fs.writeFile("./api/historialChat.json", JSON.stringify(chat ,null, 2))
        return chat

        }catch(error){
        console.log(error)
        }
    }
    
    }


module.exports = ContenedorIo