function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo}`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotododia.jpg'
        document.body.style.background = '#fcd18c'
        document.body.style.background = 'fdcb82'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fotodatarde.jpg'
        document.body.style.background = '#fe9d18'
    } else {
        img.src = 'fotodanoite.jpg'
        document.body.style.background = '#343434'
    }
}
