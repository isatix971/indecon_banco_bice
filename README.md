# Visualizador indicadores economicos api INDECON

En este proyecto consumiremos la api de indecon de indicadores economicos y se almacenara en una base de datos SQLite, solo para fines de prueba, luego se podran visualizar los datos a traves de un cliente a traves de un api GraphQl

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local.

Clonar el proyecto desde el repositorio de GitHub: 
```https://github.com/isatix971/indecon_banco_bice```

### Pre-requisitos 📋

```Git```
```Node v13.1.0```
```npm v6.12.1```
```Angular CLI 9.1.1```


### Instalación 🔧

El proyecto consta de 2 partes, servicios BACKEND y servicio cliente FRONTEND

## Por parte de back se utilizara un servidor de GraphQL ApolloServer contenido en: 

```
indecon_banco_bice/indecon-back
```
Ingresar al directorio y ejecutar:
```npm install```
Iniciar servidor:
```npm start```

Para validar que el servidor se encuentra arriba entrar a la url: http://localhost:4000/
una vez iniciado el servidor, pasar al siguiente punto y levantar el Cliente.

## Por parte de front se utilizaremos Angular CLI y debemos ingresar a: 

```
indecon_banco_bice/indecon-front
```
ingresar al directorio y ejecutar:
```npm install```
Iniciar servidor:
```ng serve```

Para visualizar el contenido del API ingresar a la url: http://localhost:4200/

## Ejecutando test ⚙️

Ya que este es un proyecto de test, solo se escribieron pruebas para el proyecto de back.

Ingresar a:

```
indecon_banco_bice/indecon-back
```
Ejecutar:
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