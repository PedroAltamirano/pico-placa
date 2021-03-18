Pico y Placa
Este proyecto usa el framework de javascript vue.
Su función es predecir si una placa esta autorizada a circular dado el dia y la hora con respecto a las leyes de "pico y placa" de Ecuador.
El programa recibe como entrada los dígitos de una placa ecuatoriana, pueden ser 3 o 4, recibe la fecha que se va a probar y la hora de circulación.
Para la predicción se tomó en cuenta las reglas de "pico y placa" siguiente:
  los dias martes, jueves y sábado circulan los autos con placa terminada en par
  los dias lunes, miércoles y viernes circulan los autos con placa terminada en impar
  los días domingos todos circulan
  no se tomo en cuenta los feriados, por cuestión de tiempo

Se toma en cuenta unit testing, y se usa jest. Se realizan pruebas para verificar que no haya inputs vacíos y que la funcionalidad sea correcta.


## Project setup
```
$ npm install
```

### Compiles and hot-reloads for development
```
$ npm run serve
```

### Test the app
```
$ npm run test:unit
```