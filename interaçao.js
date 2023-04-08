function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var vano = document.getElementById('nmr')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'psg')

    //se o 'vano'for igual a zero ou 'vano' for maior que o ano atual = 'erro'.
    if(vano.value.length == 0 || vano.value > ano){
window.alert('[ERRO] Verifique os dados novamente!')
    }else{
    var xpx = document.getElementsByName('redsex')
    var idade = ano - Number(vano.value)
    var genero = ''
    
    if(xpx[0].checked){
genero = 'Homem'

if(idade >= 0 && idade < 13){
    //criança
    img.setAttribute('src','psg.jpeg')
}else if(idade < 21){
    //jovem
    img.setAttribute('src','psg.jpeg')
}else if (idade < 59){
    //adulto
    img.setAttribute('src','psg.jpeg')
}else{
    //idoso
    img.setAttribute('src','psg.jpeg')
}
    }else if(xpx[1].checked){
        genero = 'Mulher'

if(idade >= 0 && idade < 13){
//criança
img.setAttribute('src','psg.jpeg')
}else if(idade < 21){
//jovem
img.setAttribute('src','psg.jpeg')
}else if (idade < 59){
//adulto
img.setAttribute('src','psg.jpeg')
}else{
//idoso
img.setAttribute('src','psg.jpeg')
}
    }
    res.style.textAlign = 'center'
res.innerHTML = `<br>Detectamos um ${genero} com ${idade} anos` 
res.appendChild(img)
    }
}