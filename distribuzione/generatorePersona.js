function caricamentoDati(){
    console.log('caricamento dati');
    var persona = extractRandomUser('it');


    var nomePersona = persona.name.first;
    var headingNomePersona = document.getElementById('testo1');
        headingNomePersona.innerText = nomePersona;

    var cognomePersona = persona.name.last;
    var headingCognomePersona = document.getElementById('testo2');
        headingCognomePersona.innerText = cognomePersona;

    var emailPersona = persona.email;
    var headingEmailPersona = document.getElementById('testo3');
        headingEmailPersona.innerText = emailPersona;   
       
    var addressPersona = persona.location.street;
    var headingLocationPersona = document.getElementById('testo4');
        headingLocationPersona.innerText = addressPersona;   
     
    var phonePersona = persona.cell;
    var headingPhonePersona = document.getElementById('testo5');
        headingPhonePersona.innerText = phonePersona;   
    
}


var Name = {
    title: 'mr.',
    first: 'Mario',
    last: 'Rossi'
}

var Location = {
    street: 'Corso como',
    city: 'Milano',
    state: 'Italia',
    postcode: 20100
}

var Login = {
    username: 'mario',
    password: '1234',
    salt: 'gaegaegadvaasf',
    md5: 6342234,
    sha1: 'bvsbwr4345653',
    sha256: 'sdgsntdhergwefa34'
}

var Id = {
    name: 'mrx',
    value: '34'
}
var Picture = {
    large: "https://randomuser.me/api/portraits/men/83.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/83.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/83.jpg"
}
var Persona = {
    gender: 'male',
    name: Name,
    location: Location,
    email: 'mariorossi@gmail.com',
    login: Login,
    dob: '1995-03-12 07:29:45',
    registered: '2005-03-12 07:29:45',
    phone: '+39 02 4882705',
    cell: '+39 331 4885634',
    id: Id,
    picture: Picture,
    nat: 'It',
    setNation: function(nazione){
        this.nat= nazione;


    }

    

}

function extractRandomUser(nazione){
    var tempP= Persona;
    tempP.setNation(nazione);
    //tempP.nat = nazione;
    return tempP;    
}


var getRandomUser = function (nazione){
    var tempP= Persona;
    tempP.setNation(nazione);
    //tempP.nat = nazione;
    return tempP;
}
console.log(getRandomUser('uk').nat);


