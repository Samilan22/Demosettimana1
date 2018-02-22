function paginaCaricata(){
    console.log('La pagina è stata caricata');
    var bottoni = ['bottone1', 'bottone2', 'bottone3', 
    'bottone4', 'bottone5'];
    for (var i=0; i<bottoni.length; i++){
        aggiungiClickBottone(bottoni[i]);
    }
    var heading1  = document.getElementById('testo1');
    heading1.addEventListener('mouseover', function(){
        console.log('mouseover');
        heading1.style.fontSize = '50px'; 
    });
    var heading2 = document.getElementById('testo2');
    heading2.addEventListener('mouseenter', function(){
        heading2.style.backgroundColor = 'green';
    });

    heading2.addEventListener('mouseleave', function(){
        heading2.style.backgroundColor = 'white';
    });

    var linkCliccato = document.getElementById('link');
    linkCliccato.addEventListener('click', function(){
        linkCliccato.innerText= 'cliccato';
    });

    var persona = extractRandomUser('it');
    console.log(persona);
    var nomePersona = persona.name.first + ' ' + persona.name.last;
    var headingNomePersona  = document.getElementById('testo1');
    headingNomePersona.innerText = nomePersona;

}

function clickBottone1(){
    console.log('ho cliccato sul bottone1');
}

function aggiungiClickBottone(idBottone){
    var b1 = document.getElementById(idBottone);
    b1.addEventListener('click', function(){
        console.log('Ho cliccato sul ' + idBottone);
        switch(idBottone){
            case 'bottone1' : 
                setTimeout(function(){
                    var heading1  = document.getElementById('testo1');
                    heading1.innerText = 'Sono passati 5 secondi';
                }, 5000);  
                break;
            default: 
                break;
    }
    });
    
}

