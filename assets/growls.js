function throwSucessoMessage(titulo, descricao) {
    GrowlNotification.notify({
        title: titulo,
        description: descricao,
        type: 'success',
        position: 'top-right',
        closeTimeout: 1000
    });
}