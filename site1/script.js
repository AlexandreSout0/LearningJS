var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagem');
var data = new Date();
//var hora = data.getHours();
var minutos = data.getMinutes();
msg.innerHTML = `Agora são ${hora} : ${minutos}`;
var hora = 13
if (hora >= 0 && hora < 12)
{
    img.src = 'img/manha.png';
    document.body.style.background = '#fec97c';
}
else if (hora >= 12 && hora < 18)
{

    img.src = 'img/tarde.png';
    document.body.style.background = '#72a6df';
}
else
{
    img.src = 'img/noite.png'
    document.body.style.background = '#6b4e6a';

}