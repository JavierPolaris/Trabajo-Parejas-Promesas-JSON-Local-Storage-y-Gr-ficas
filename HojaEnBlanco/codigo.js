// Utilizando la siguiente API: https://dog.ceo/dog-api/

// Que devuelve imágenes aleatorias, habrá que ir coleccionando diferentes razas de perros pulsando un botón e ir rellenando una matriz (4x5) como la que se ve en las imágenes.

// Se va añadiendo cada imágen a una casilla, además de almacenar los perros que van apareciendo para poder sacar estadísticas al final.

// En caso de que alguna raza esté repetida, no se pondrá en la colección.

// Cuando se haya completado todo el álbum aparecerá una gráfica de todas las razas que han salido y la de veces que se han ido contando.

// Las imágenes ilustran el funcionamiento, pero la apariencia de la aplicación depende del grupo y se debe cuidar tanto como el funcionamiento; además se deben usar conocimientos de Flexbox y Grid en la medida de las posibilidades del diseño.



// // TODO  razas
// fetch('https://dog.ceo/api/breeds/list/all')
//     .then(res=>res.json())
//     .then(json=>console.log(json));

// a user is redirected to a different page with the location.replace method
let razas = []
let hue0 = document.querySelector('.perro0');
let hue1 = document.querySelector('.perro1');
let hue2 = document.querySelector('.perro2');
let hue3 = document.querySelector('.perro3');
let hue4 = document.querySelector('.perro4');
let hue5 = document.querySelector('.perro5');
let hue6 = document.querySelector('.perro6');
let hue7 = document.querySelector('.perro7');
let hue8 = document.querySelector('.perro8');
let hue9 = document.querySelector('.perro9');
let hue10 = document.querySelector('.perro10');
let hue11 = document.querySelector('.perro11');
let hue12 = document.querySelector('.perro12');
let hue13 = document.querySelector('.perro13');
let hue14 = document.querySelector('.perro14');
let hue15 = document.querySelector('.perro15');
let hue16 = document.querySelector('.perro16');
let hue17 = document.querySelector('.perro17');
let hue18 = document.querySelector('.perro18');
let hue19 = document.querySelector('.perro19');
let huecos = [hue0, hue1, hue2, hue3, hue4, hue5, hue6, hue7, hue8, hue9, hue10, hue11, hue12, hue13, hue14, hue15, hue16, hue17, hue18, hue19];
// console.log(huecos)
//TODO boton random y almacenar la url de la imagen
document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault();


    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then((json) => {
            var imagen = document.querySelector('.perro');
            imagen.src = `${json.message}`;


        });

    var urlImg = document.getElementById('perro').src;
    if (urlImg != 'http://127.0.0.1:5500/HojaEnBlanco/index.html' && urlImg != 'http://localhost:5500/HojaEnBlanco/index.html') {
        let urlCortada = urlImg.split('/');
    razas.push(urlCortada[4]);
    console.log(razas);
        // console.log(urlImg)
    } else {
        //alert('ERROR DE CARGA DE SRC')            primera carga de nuestra url en local
    }
    


   


    // console.log(imagen.src)


});


