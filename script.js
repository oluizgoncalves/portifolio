var lista = document.querySelectorAll(".expertise");

var listaSocial = document.querySelector('.social-media').querySelectorAll('a');

var listaProjetos= document.querySelectorAll(".projects img");

for (var i = 0; i<lista.length; i++)
{
    lista[i].addEventListener('mouseenter', mouseover);
    lista[i].addEventListener('mouseleave', mouseover);
}

for (var i = 0; i<listaSocial.length; i++)
{
    listaSocial[i].querySelector('img').addEventListener('mouseenter', mouselink);
    listaSocial[i].querySelector('img').addEventListener('mouseleave', mouselink);  
}

for (var i = 0; i<listaProjetos.length; i++)
{
    listaProjetos[i].addEventListener('mouseenter', mouseover);
    listaProjetos[i].addEventListener('mouseleave', mouseover);
}

function mouseover (evt)
{
    var mousesobre = evt.target;
    mousesobre.classList.toggle('mouseover');
    //console.log(evt.target);
}

function mouselink (evt)
{
    var mousesobre = evt.target;
    mousesobre.classList.toggle('mouselink');
}
