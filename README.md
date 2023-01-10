# Frontend admin AVE

## Instalacion
Para poder correr de manera local en su maquina, debe tener instalado [Node.js](https://nodejs.org/es/).

### Instalacion de Yarn
Luego de esto debe instalar yarn en su ambiente local [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
```bash
npm install --global yarn
```

### Instalación de dependencias
Para instalar las dependencias, debe ejecutar el siguiente comando en la raiz del proyecto:
```bash
yarn
```

### Correr el proyecto en modo desarrollo
Para correr el proyecto en modo desarrollo, debe ejecutar el siguiente comando en la raiz del proyecto:
```bash
yarn dev
```

### Correr el proyecto en modo desarrollo como host
Para correr el proyecto en modo desarrollo como host y compartirlo en la red local, debe ejecutar el siguiente comando en la raiz del proyecto:
```bash
yarn dev --host
```

## Base
Este proyecto se creo con la necesidad de un ADMIN o backoffice para AVE, donde se pueda visualizar los productos, los usuarios, su configuración y edición de los mismos

### Variables de entorno
El archivo .env tendrá las variables de entorno, como URL de API, para que se configure en un solo archivo, ejemplo:
```bash
VITE_API_URL = http://128.199.6.213/
```