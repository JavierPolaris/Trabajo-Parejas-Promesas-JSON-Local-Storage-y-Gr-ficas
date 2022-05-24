# Trabajo-Parejas-Promesas-JSON-Local-Storage-y-Gr-ficas
Presentación de Perretes.

.Análisis del ejercicio:
	1.¿Qué nos piden? ¿Cómo nos lo piden?.
	2.Diseño de la solución.
	3.Organización del equipo.
	4.Codificación.
	5.Pruebas.
	6.Finalización.
	
1.¿Qué nos piden? ¿Cómo nos lo piden?.

-Entradas que puede recibir y salidas que ha de producir: Ha de recibir información de una API al pulsar un botón, de esta información tenemos que extraer la url de las imágenes de perros y albergarlas en una cuadricula 4x5 al pulsar un botón dichas imágenes. Ademas de la URL tenemos que obtener la raza de perros y almacenarla en el LocalStorage para: 
	1.saber cuantas razas se repiten y cuanto se rellene la cuadricula entera obtener mediante una estadística las razas que se han repetido.
	2.Si alguna raza se repite no almacenarla en la cuadricula o galería de imágenes, esta solo puede albergar nuevas razas.


2.Diseño de la solución.

-¿Cómo vamos a resolver el problema planteado?: Nosotros lo primero que hicimos fue coger una hoja y un bolígrafo y pensando en un entorno gráfico analizar el punto nº1, nuestro primer problema fue pensar de menos a mas, siempre es bueno al tener un problema grande particionarlo pero nosotros en vez de mirar en global para centrarnos en atacar los problemas mas pequeños, directamente miramos los problemas por separado eso hizo que perdiéramos mucho tiempo y no consiguiéramos tras muchas lineas de código resolver los problemas.

Por eso gracias a “Coke empezamos a mirar en global el problema y volver a coger el bolígrafo y replantear todo de nuevo”.

3.Organización del equipo.

Diseñamos el problema completo en papel y ha sido muy fácil trabajar el uno con el otro puesto que a “una” nos hemos coordinado para enfrentar el código a la vez, uno y otro trabajado en simbiosis.
Gracias a las herramientas como LiveShare y GitHub hemos podido trabajar juntos en el código e ir solucionando los problemas que iba apareciendo.


4.Codificación.

Empezamos creando un HTML donde enlazamos tanto un archivo CSS y otro JS.
.En el html incluimos un par de botones:
	-Uno para que aparezcan las imágenes de los perros y que tenga la función de albergar dichas imágenes en la cuadricula y a su vez almacenar en el localStorage la raza y los repetidos, por ultimo cuando la retícula es rellenada con los 20 perros diferentes aparece la gráfica con el contador de veces que aprece cada raza.
	-Otro para borrar el LocalStorage y refrescar la pagina.

.Creamos 20 <div> para crear la cuadricula y almacenar las imágenes de los perros, en este caso se reemplazara el src (con una imagen definida por defecto) cada vez que pulses el botón “Random”.

.Creamos otro <div> encima de los botones donde ira a pareciendo las imágenes Random de la API.

.Por último conseguimos conectar nuestra gráfica gracias a la bilioteca de chart.js que enlazamos en el header mediante  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
y a traves de un <canvas> que ubicamos en el body.
   

.Para finalizar creamos un h1 animado para el encabezado de la pagina y un footer con dos botones que nos redireccionan a nuestro repositorios de GIT.

Una vez creada la interfaz:

.En la parte del JS:
Lo primero que encontramos son dos variables que serán utilizadas y explicadas más adelante, tras ello viene lo
importante del código
    1.Cramos la funcion del boton al que llamamos mediante un .getElementById y un escuchador "click". Dentro de este escribimos todo lo que queremos que pase al pulsarlo:
        . Lo primero que hacemos es mediante un Fetch llamar a la api y obtener un ombejeto promesa(JSON) que alvergamos dentro de una función.
        .Segundo creamos la funcion crearImg, en esta funcion primero introducimos mediante otro getElementById la url que sacamos de nuestro json en el div encima del boton random.
        .Tercero obtenemos, unicamente, la raza del perro mediante un .split() y un .push() que almacenamos en un Array vacio.
        .Cuarto Declaramos dos variables let vacias let puseoCon = []; let puseo = []; en las que guardaremos
		más adelante la raza (nombre de raza) y su contador para ver las veces que aparecen. A continuación
		declaramos una bandera con un valor false y una variable key vacia
		La variable key la utilizamos para dentro de un bucle en el que recorremos la longitud de nuestro
		LocalStorage y asiganmos la key de la clave en la posición donde nos encontremos
		Por último puseamos el resultado para rellenar el array de puseo  
        
        .Quinto realizamos un condicional para saber si las raza que sale como nueva esta repetida en nuestro localStorage y en nuestra cuadricula. Si esta repetida sumamos uno en el contador. lo sabemos comparando las "Key`s" de nuestro localStorage que van a ser las razas con la raza que sacamos de la url del random. El Contador al que sumamos +1 lo creamos como valor de las key`s.
        SI ESTA REPETIDO PARA QUE NO SALTE AL SIGUIENTE CUADRO  DE LA CUADRICULA Y DEJE UNO SIN PINTAR RETROCEDEMOS EL CONTADOR EN UNO de esta manera no deja cuadro sin pintar.
        Utilizamos true. para modificar la variable repetido.

		.Sexto Si obtenemos un valor diferente a repetido (true) significa que nuestra raza no esta repetida (unique)
		y podemos crear su clave (key) y le damos el valor de 1 al cont porque la raza aparece una vez
		
        .Septimo creamos la grafica donde mostramos las razas y las veces que se repiten cuando alcancemos las 20 fotografias en nuestra cuadricula y los 20 key en el localStroage.
            -llamamos a la funcion mostrar()
            -asignamos nueva variable para las razas que anterior mente pusheamos.
            -asignamos como valores de las barras las razas de perros
            -asignamos como valores de grafica las veces que se repiten.

        // en estas variables guardamos tanto raza como contador de raza

	2.La funcion mostrar(id) nos permite mostrar la gráfica al usuario una vez haya sido rellenada la cuadrícula
	utilizamos el style.display para poder ocultar/mostrar la gráfica si pasa las validaciones

	3.La función borrar() nos borra nuestro LocalStorage para poder ejecutar código de nuevo sin tener en cuenta
	datos anteriores y a parte hacemos un .reload de la página para refrescar la página por completo
	
	4.La función btnGr(id) nos permite una vez haya aparecido la gráfica dotar de un "boton" en la parte superior
	derecha para poder ocultar la gráfica al usuario, utilizamos  el style.display para ocultar/mostrar la gráfica




5.Pruebas.
Siempre hemos ido realizando pruebas para saber si nuestro programa iba funcionando a la vez que iba creciendo, pero el momento mas importante ha sido cuando dimos por terminado el programa, justo en ese momento hemos realizado independientemente diferentes tipos de pruebas para ver por donde fallaba nuestro programa, y de esta manera poder subsanar los diferentes problemas, no solo a nivel de codigo JS si no tambien CSS, por que tambien es importante tener un programa que sea atractivo al usuario y facil de entender.
