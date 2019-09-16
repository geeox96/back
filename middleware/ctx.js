const jwt = require('jsonwebtoken')
//110 = usuario
//180 = fabricante
//210 = forncedor
//235 = youtuber
//340 = reviewer
//400 = admin

module.exports = async ({ req }) => {

    const auth = req.headers.authorization
    const token = auth && auth.substring(7)

    if(token){
        const valido = jwt.verify(token, process.env.APP_SECRET)
        if(valido) {
            switch (valido.tipo_conta) {
                case 110: 
                    return {
                        deslogado: true,
                        usuario: true
                    }
                case 180: 
                    return {
                        deslogado: true,
                        fabricante: true
                    }
                case 210: 
                    return {
                        deslogado: true,
                        fornecedor: true
                    }
                case 235: 
                    return {
                        deslogado: true,
                        youtuber: true
                    }
                case 340: 
                    return {
                        deslogado: true,
                        reviewer: true
                    }
                case 400:
                    return {
                        deslogado: true,
                        reviewer: true,
                        youtuber: true,
                        fornecedor: true,
                        usuario: true,
                        fabricante: true,
                        admin: true
                    }
            }

        } else {
            return new Error('Token Invalido !!!')
        }

    } else {
        return {
            deslogado: true
        }
    }

    // if(token) {
    //     try {
    //         let conteudoToken = jwt.decode(token,
    //             process.env.APP_SECRET)
    //         if(new Date(conteudoToken.exp * 1000) > new Date()) {
    //             usuario = conteudoToken
    //         }
    //     } catch(e) {
    //     }
    // }
    
    // if(usuario && usuario.perfis) {
    //     admin = usuario.perfis.includes('admin')
    // }

    // const err = new Error('Acesso negado!')

    // return {
    //     usuario,
    //     admin,
    //     validarUsuario() {
    //         if(!usuario) throw err
    //     },
    //     validarAdmin() {
    //         if(!admin) throw err
    //     },
    //     validarUsuarioFiltro(filtro) {
    //         if(admin) return

    //         if(!usuario) throw err
    //         if(!filtro) throw err

    //         const { id, email } = filtro
    //         if(!id && !email) throw err
    //         if(id && id !== usuario.id) throw err
    //         if(email && email !== usuario.email) throw err
    //     }
    // }
}