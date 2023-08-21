let productos ={
    nombre: function(req,res){
        let usuarios = [
            'mar',
            'tierra',
            'nubes',
            'fuego'
        ]
        return res.render("producto", {'users':usuarios})
    }
}

module.exports= productos