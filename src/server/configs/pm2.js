
//Configuro los distintos fork para el balanceador de carga
export const config = {
    apps : [{
      name: 'Server1', //le doy un nombre para identificarlo
      script: '../server.js', // ruta hacia el archivo donde ejecutal servidor
      watch: true, 
      args: '8082',  // puerto
      autorestart: true
    },

    //Repetir con el resto
    {
      name: 'Server2',
      script: '../server.js',
      watch: true,
      args: '8083',
      autorestart: true
    },
    {
      name: 'Server3',
      script: '../server.js',
      watch: true,
      args: '8084',
      autorestart: true
    },
    {
      name: 'Server4',
      script: '../server.js',
      watch: true,
      args: '8085',
      autorestart: true
    }
  ]}