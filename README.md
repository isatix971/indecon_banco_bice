# Visualizador indicadores economicos api INDECON

_En este proyecto consumiremos la api de indecon de indicadores economicos y se almacenara en una base de datos SQLite, solo para fines de prueba, luego se podran visualizar los datos a traves de un cliente a traves de un api GraphQl_

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local.

clonar el proyecto desde el repositorio de GitHub: 
```https://github.com/isatix971/indecon_banco_bice```

### Pre-requisitos 📋

```Git```
```Node```
```npm```
```angular CLI```


### Instalación 🔧

El proyecto consta de 2 partes, servicios BACKEND y servicio cliente FRONTEND

## Por parte de back se utilizara un servidor de GraphQL ApolloServer contenido en: 

```
indecon_banco_bice/indecon-back
```
ingresar al directorio y ejecutar:
```npm install```
iniciar servidor:
```npm start```

para validar que el servidor se encuentra arriba entrar a la url: http://localhost:4000/
una vez iniciado el servidor, pasar al siguiente punto y levantar el Cliente.

## Por parte de front se utilizaremos Angular CLI y debemos ingresar a: 

```
indecon_banco_bice/indecon-front
```
ingresar al directorio y ejecutar:
```npm install```
iniciar servidor:
```ng serve```

Para visualizar el contenido del API ingresar a la url: http://localhost:4200/

## Ejecutando test ⚙️

ya que este es un proyecto de test, solo se escribieron pruebas para el proyecto de back en la carpeta del proyecto con:

```
npm test
```


## Construido con 🛠️

Las herramientas que utilizaste para este proyecto son:

* [Node](https://nodejs.org/en/) - Runtime Javascript para construir microservicios
* [Jest](https://jestjs.io/) - Crear Test
* [GraphQL](https://graphql.org/) - Lenguaje que utiliza querys para construir APIs
* [TypeORM](https://typeorm.io/#/) - ORM 
* [TypeAngular](https://angular.io/) - Framework javascript front-end 


## Autores ✒️

Proyecto con finalidad educativa para presentar en test de prueba para Bice

* **Francisco Vergara** - *Diseño de proyecto completo e implementacions* 

## Licencia 📄

Este proyecto está bajo la Licencia GNU GENERAL PUBLIC LICENSE - mira el archivo [LICENSE.md](LICENSE.md) para detalles

---
⌨️ con ❤️ por [Francisco Vergara] 😊