// Utilizando la siguiente API: https://dog.ceo/dog-api/

// Que devuelve imágenes aleatorias, habrá que ir coleccionando diferentes razas de perros pulsando un botón e ir rellenando una matriz (4x5) como la que se ve en las imágenes.

// Se va añadiendo cada imágen a una casilla, además de almacenar los perros que van apareciendo para poder sacar estadísticas al final.

// En caso de que alguna raza esté repetida, no se pondrá en la colección.

// Cuando se haya completado todo el álbum aparecerá una gráfica de todas las razas que han salido y la de veces que se han ido contando.

// Las imágenes ilustran el funcionamiento, pero la apariencia de la aplicación depende del grupo y se debe cuidar tanto como el funcionamiento; además se deben usar conocimientos de Flexbox y Grid en la medida de las posibilidades del diseño.



// // TODO  razas
// fetch('https://dog.ceo/api/breeds/list/all')             //BORRAMOS AL NO UTILIZAR ESTE FETCH??
//     .then(res=>res.json())
//     .then(json=>console.log(json));

// a user is redirected to a different page with the location.replace method
let razas = []
let cont = 0;
let contStorage = 1;
//TODO boton random y almacenar la url de la imagen
document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault();


    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())                                        //recoger los datos de la API
        .then(json => crearImg(json));


    function crearImg(url) {
        document.getElementById('perro' + cont).src = `${url.message}`
        document.getElementById('perro').src = `${url.message}`

        let urlCortada = (url.message.split('/'));
        razas.push(urlCortada[4]);

        let exi = localStorage.length;
        // console.log(exi+'valor')

        if (exi == 0) {
            localStorage.setItem(`perro${cont}`, JSON.stringify({
                raza: `${urlCortada[4]}`,
                contador: `${contStorage}`
            }))


        } else {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);

                if (`${JSON.stringify(localStorage.getItem(key)).raza}` == urlCortada[4]) {

                    console.log("REPEEEE")
                    contStorage++;
                } else {
                    console.log('probar el else')
                    localStorage.setItem(`perro${cont}`, JSON.stringify({
                        raza: `${urlCortada[4]}`,
                        contador: `${contStorage}`
                    }))
                }
            }
        }
    }

    // for(let i=0; i<localStorage.length; i++) {

    //     let key = localStorage.key(i);
    //     if (`${JSON.parse(localStorage.getItem(key)).raza}` == urlCortada[4]) {
    //         console.log(key)
    //         contStorage++;
    //     }else {
    //         localStorage.getItem(`perro${cont}`,JSON.stringify({
    //             raza: `${urlCortada[4]}`,
    //             contador: `${contStorage}`
    //         }))
    //     }
    // }


    cont++
   
});

