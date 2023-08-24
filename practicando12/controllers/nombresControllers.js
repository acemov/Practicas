let nombresControllers = {
    user: function(req,res){
        let nombres = [
            {id: 1,name:"Jose"},
            {id: 2,name:"Manuel"},
            {id: 3,name:"Franco"},
            {id: 4,name:"Pedro"},
            {id: 5,name:"Dario"},
        ]
        res.render("index",{"nombres": nombres})
    },
    search: function(req,res){
        let loQueBuscoElUser = req.query.search;

        let nombres = [
            {id: 1,name:"Jose"},
            {id: 2,name:"Manuel"},
            {id: 3,name:"Franco"},
            {id: 4,name:"Pedro"},
            {id: 5,name:"Dario"},
        ]
        let listaUsers = []
        for (let i = 0; i < nombres.length; i++) {
            if(nombres[i].name.includes(loQueBuscoElUser)){
                listaUsers.push(nombres[i])
            }
        }
        res.render('listaUsers.ejs', {'listaUsers': listaUsers })
    }
}
module.exports = nombresControllers