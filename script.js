function verificar() {
    let txtano = document.getElementById('txtano');
    let res = document.getElementById('res');

    let data = new Date();
    let ano = data.getFullYear();

    if (txtano.value.length == 0 || txtano.value > ano) {
        window.alert('Verifique os dados e tente novamente!');
    }
    else {
        let radsex = document.getElementsByName('radsex');
        
        let idade = ano - Number(txtano.value);
        let genero = '';

        let img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (radsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'ftmeninocrianca.jpg');
            } else if (idade >= 10 && idade <= 21) {
                img.setAttribute('src', 'ftjovemhomem.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'fthomemadulto.jpg');
            } else {
                img.setAttribute('src', 'fthomemidoso.jpg');
            }
        } else if (radsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'ftmeninacrianca.jpg');
            } else if (idade >= 10 && idade <= 21) {
                img.setAttribute('src', 'ftjovemmulher.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'ftmulheradulta.jpg');
            } else {
                img.setAttribute('src', 'ftmulheridosa.jpg');
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img)

        //document.getElementById('foto').appendChild(img);
    }
}