//TODO Necesitamos que cuando la raza se repita no pinte el src de la galeria.



let razas = [];
let cont = 0;

document.getElementById('btn').addEventListener('click', (e) =>{
    e.preventDefault();

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(json => crearImg(json));


    function crearImg(url) {

        //document.getElementById('perro' + cont).src = `${url.message}`
        document.getElementById('perro').src = `${url.message}`


        let urlCortada = (url.message.split("/"));
        razas.push(urlCortada[4]);

        let puseoCon = [];
        
        let puseo = [];
        let repetido = false;
        let key;
        for (let i = 0; i < localStorage.length; i++) {
            key = localStorage.key(i);
            puseo.push(localStorage.key(i));
            
            if (key == urlCortada[4]) {
                
                console.log('Repetido')
                let contador = parseInt(JSON.parse(localStorage.getItem(`${key}`)).cazado)
                contador++;
                

                localStorage.setItem(urlCortada[4],JSON.stringify({
                    cazado: contador
                }));

                cont--
                repetido = true;
            }
            puseoCon.push(JSON.parse(localStorage.getItem(`${key}`)).cazado)

        }

        if (!repetido) {
           document.getElementById('perro' + cont).src = `${url.message}`

            localStorage.setItem(urlCortada[4],JSON.stringify({
                cazado: 1   
            }));
        }
        
console.log(puseo)
// console.log(puseoCon)

        let i=localStorage.length;
        // let j = key
        // var arr = Object.entries(j)
        // console.log(arr)
        // let puseoDeMierda = puseoCon.split('"cazado":');
        // console.log(puseoDeMierda)

        if(i>=20){
            var array = puseo;
            const ctx = document.getElementById('myChart').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: array,
                    datasets: [{
                        data: puseoCon,
                        backgroundColor: [
                            'rgba(255, 99, 132)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132)'
                        ],
                        borderWidth: 3
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }
cont++

});