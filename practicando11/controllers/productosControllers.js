let productos ={
    nombre: function(req,res){
        let usuarios = [
            'mar',
            'tierra',
            'nubes',
            'fuego'
        ]
        //                     👇    este "producto" es el de views (producto.ejs)
        return res.render("producto.ejs", {'users':usuarios})
    }
}

module.exports= productos