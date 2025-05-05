En las entregas anteriores, los datos que hemos utilizado en nuestras webs los hemos añadido nosotros directamente en el programa (hardcoded), pero esto no es habitual.

Como en la mayoría de webs reales, consumiremos los datos de una API en este ejercicio. Por suerte, no tendremos que implementar una API para guardar los datos en una base de datos y poder consumirlos mediante una serie de llamadas. En su lugar, usaremos una API ya creada que nos permitirá obtener el listado de naves fácilmente.

Los dos temas más importantes que pondrás en práctica en este proyecto son TypeScript y la obtención de datos mediante llamadas a una API Rest en un servidor.

Una empresa de coaching está llevando a cabo un experimento en empresas de Barcelona, en el cual está midiendo el impacto del humor y la diversión en la productividad.

Nos han pedido una aplicación web que muestre chistes a los trabajadores antes de empezar la jornada laboral.

Serás el/la encargado/a de llevar a cabo la base del proyecto para hacer una demo en dos semanas con el/la cliente/a y comenzar las pruebas con usuarios/as reales.

Información de la API a consumir

Crearemos una web de chistes, consumiendo datos de una API gratuita que no requiere clave. Verás que es muy divertido e interesante poder obtener datos de una API —¡imagina la cantidad de webs que puedes crear!

En el ámbito profesional, cuando trabajes en un proyecto, la empresa normalmente tiene un back end con documentación para poder obtener los datos. A menudo, una web o app no solo tiene una fuente de datos; también es común utilizar APIs de terceros. Resumiendo: saber consumir datos de una API es una de las habilidades más importantes de un/a programador/a front end.

⸻

Importante

En cualquier proyecto profesional, consumirás datos de una API, por lo tanto debes entender bien y a fondo cómo realizar llamadas a APIs y el asincronismo de JavaScript.

A continuación se muestran enlaces e información que pueden ser de utilidad para implementar las llamadas a la API en tu web:

La documentación de la API a consumir es la siguiente:

-> Calling the API

Nota: Las APIs las crearán programadores back end, dejando siempre todo documentado para que los/las programadores/as front end u otros/as programadores/as back end de otras empresas puedan consumir los datos.

Llamada para obtener un chiste:

-> Random dad joke

Header para obtener los datos en el formato que nos interesa:

'Accept': 'application/json'

Ponemos este header en la llamada a la API para que el servidor sepa en qué formato queremos los datos, en nuestro caso en JSON.

Simplificando, diremos que la URL de la API que introducimos en este proyecto es de donde consumiremos los datos, y el header indica cómo queremos esos datos.

⸻

Notas

A continuación tienes las indicaciones del responsable de front end:
 • Es obligatorio implementar todos los bucles y lógica con ES6 (usando map, reduce, filter y sort para manipular arrays). En ningún caso podrás usar el bucle for.
 • Tendrás que implementar el proyecto con TypeScript (se pide en casi todas las entrevistas).
 • Si tienes dificultades para crear desde cero un proyecto TypeScript, aquí tienes los pasos:
-> Pasos para preparar un proyecto TypeScript

⸻

Nivel 1

Ejercicio 1

En este primer ejercicio crearemos la pantalla principal que mostrará chistes al/a la usuario/a.

El funcionamiento debe ser el siguiente:
 • Al iniciar se mostrará el primer chiste en pantalla y el botón de siguiente chiste.
 • Al pulsar el botón de “Siguiente chiste” se hará fetch a la API de chistes y se mostrará por consola y por pantalla el chiste.

Nota: En este ejercicio no es necesario maquetar la web, primero haremos que funcione para después aplicar los estilos.

⸻

Ayuda

Tip 1: usa promises o async/await para esperar la respuesta de la API.
Tip 2: antes de usar una API en el código, es recomendable probarla con Postman. Además de garantizar que funciona, verás el objeto que devuelve y sabrás cómo usarlo.

⸻

Ejercicio 2

Nuestra web ya obtiene respuesta del servidor y los muestra por consola y pantalla.

Realiza una primera maquetación, colocando cada elemento en su sitio. No te preocupes por los detalles, modificaremos la maquetación más adelante.

Aquí tienes una propuesta de colocación de los elementos:

(imagen no incluida en el texto original)

⸻

Ejercicio 3

La empresa que encarga el proyecto necesita hacer un seguimiento del uso de esta web para su estudio.

Para ello, es necesario conocer el nivel de aceptación de los chistes, un sistema de seguimiento para saber cuándo los/as trabajadores/as están de mejor humor, y cuántos chistes se consumen de media.

¿Cómo se traduce esta petición en nuestro código?

Necesitarás generar un array llamado reportJokes, en el cual iremos guardando toda la información relativa al chiste que nos pide el/la cliente/a.

Los tres campos que debe tener cada objeto del array son:
{
  joke: "...",
  score: 1,
  date: ...
}

 • La fecha en la que se hizo la valoración debe guardarse en formato ISO.
 • El campo score tiene un rango del 1 al 3, siendo 1 la peor puntuación. Deberás implementar 3 botones para cada puntuación.
 • La votación del chiste por parte del/la usuario/a es opcional (se puede pasar al siguiente chiste sin votar).
 • Una vez el/la usuario/a realiza la votación, puede cambiar su puntuación antes de pasar al siguiente chiste.
 • Deberás ir rellenando el array reportJokes con los datos obtenidos.

Cada vez que actualices este array, deberás mostrar por consola su contenido.

Nivel 2

Ejercicio 4

¡BIEN HECHO! Ya tienes una web de chistes operativa. Ahora que la web está pensada para mostrar chistes a primera hora de la mañana para empezar bien el día, añadiremos información meteorológica, ya que les puede ser de utilidad.

Consume una API de información meteorológica y muéstrala en pantalla al inicio de la aplicación.

Ejercicio 5

El/la cliente/a nos ha comunicado en las primeras pruebas que los/as usuarios/as se aburren si siempre se muestra el mismo tipo de chistes.

Tienes que buscar otra API (o APIs) de chistes y utilizarla para alternar chistes de diferentes fuentes (ya sea alternando uno de cada o de manera aleatoria).

Ayuda:
¡Los chistes de Chuck Norris nunca fallan! 😉

Nivel 3

Ejercicio 6

Maqueta el sitio web según esta pantalla o cualquier otra que te convenga. También es una oportunidad para practicar la…

(el texto se corta aquí)

Nivel 3

- Ejercicio 6
Maqueta el sitio web según esta pantalla o cualquier otra que te convenga. También es una oportunidad para practicar la maquetación con Flexbox o CSS Grid, añadir tipografía, colores, espaciado, etc.

- Ejercicio 7
¡Bonus! Si has llegado hasta aquí, enhorabuena. Si te queda tiempo, aquí tienes ideas que puedes implementar si te apetece:
 • Mostrar los últimos 5 chistes votados en una sección lateral o inferior.
 • Hacer scroll automático cuando se cargue un nuevo chiste.
 • Crear un gráfico que muestre la evolución de las puntuaciones.
 • Añadir localStorage para guardar el historial de chistes puntuados, incluso si el usuario recarga la página.
 • Añadir animaciones o transiciones al mostrar un nuevo chiste.
