let crearControllers = {
    edit: function(req,res){
        let idUser = req.params.idUser

        let nombres = [
            {id: 1,name:"Jose"},
            {id: 2,name:"Manuel"},
            {id: 3,name:"Franco"},
            {id: 4,name:"Pedro"},
            {id: 5,name:"Dario"},
        ]
        let userAeditar = nombres[idUser]

        // ver el usuraio ---> res.send(userAeditar)
        res.render("putYdelete",{userAeditar:userAeditar})
    },
    delete: function(req,res){
        res.send("Estas viajando por DELETE!!!")
    },
    put: function(req,res){
        res.send("Estas viajando por PUT!!!")
    }
}
module.exports = crearControllers