# Parcial1 - Desarrollo en Tecnologías Web

Autor: Diego Zucchet 

El propósito de la aplicacion es buscar un usuario en github y que este muestre los seguidores que tiene de forma que se pueda observar secuenciado la búsqueda de usuarios cronológicamente.

Este proyecto se desarrolló con el fin de verificar las habilidades aprendidas en el curso Desarrollo en Tecnologías Web con el uso de estas tecnologías: 

* Node.js
* React.js
* Express
* CSS 
* HTML
* Heroku

El uso de la aplicación es bastante sencillo, solo se debe digitar el usuario de github y si este es correcto, se visualizará en el título Seguidores de ese usuario las personas a las cuales sigue y en Seguidores cronológicamente se agregara el último usuario digitado, de lo contrario si este no tiene seguidores en el título Seguidores de ese usuario aparecerá un texto que que dice: "Lo siento, ese usuario no tiene seguidores".

La parte creativa fue generar el listado de seguidores de forma vertical, cuando este posea seguidores se mostrará la imagen de perfil de cada uno tomada directamente desde el Json que genera el API de Github en la búsqueda del usuario.

La aplicación se encuentra desplegada en el siguiente link: http://floating-caverns-19717.herokuapp.com/

Si desea correr el código de forma local como requisito debe instalar Node.js y Express, tener permisos de administrador y ejecutar los siguientes comandos en consola:

1. git clone https://github.com/dalazaca/parcial1.git
1. cd parcial1
2. npm install && npm start (ejecuta el servidor)
3. (Ejecutar otra consola en el directorio de parcial1) cd client 
4. npm install && npm start (ejecuta el cliente)

Por último ingresar en su navegador web de preferencia este link: http://localhost:3000/ (Generalmente se ejecuta automáticamente)
