<h1>Prueba Técnica Tres Pi Medios </h1>

A continuación se presenta la solución para la prueba técnica basado en productos, ventas, usuarios, roles, analisis de venta diarias y mensuales usando Node.js y como base de datos MongoDB.

<h1>Tecnologias o Dependencias </h1>

- dotenv
- express
- mongoose

<h1>Tecnologias o Dependencias de Desarrollo</h1>

- nodemon

<h1>Primeros pasos</h1>

<h2>Instalar Dependencias<h2>

Abra una terminal el direccionelo al proyecto y ejecute el siguiente comando
**npm i --production**

Esto instalara las dependencias de producción, despues ejecute el comando
**npm start**

Ya estara ejecutando el servidor.

<h2>Probar Servidor</h2>

Teniendo en cuenta que usara como servidor virtual Postman o Swagger, use la extencion Rest Client de VS Code, escriba Rest Client en el apartado de extenciones para instalarla y probar el servidor.

Toda la estructura el proyecto esta divida en carpetas, la carpeta rest contiene los archivos para hacer todas las peticiones que necesita, como en la prueba dicta que para hacer las peticiones se necesita una autenticación verificando el rol que tenga el usuarion, en el archivo users.rest dejo el id de un super usurion o usuario con el rol de admin como llave principal para empezar con las pruebas.
