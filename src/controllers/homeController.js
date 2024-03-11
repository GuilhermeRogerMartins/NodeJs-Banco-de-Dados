
exports.paginaInicial = (req, res) => {
    // req.session.usuario = { nome: 'Gui', logado: true };
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};








