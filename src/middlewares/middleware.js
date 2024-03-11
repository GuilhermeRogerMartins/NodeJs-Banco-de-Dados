// Usando desestruturisação 
exports.meuMiddleware = (req, res, next) => {
    // if(req.body.cliente) {
    //     req.body.cliente = req.body.cliente.replace('Roger', 'NÃO USE ROGER');
    //     console.log();
    //     console.log(`Vi que você postou ${req.body.cliente}`);
    //     console.log();
    // }
    next();
};






