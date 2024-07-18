Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="exercise-2-a.js" defer></script>
    <title>Document</title>
  </head>
  <body>
    <input type="text" id="input" />
    <button id="button">Consultar</button>
  </body>
</html>

````

```js
const baseUrl = 'https://api.nationalize.io?name=';
````
