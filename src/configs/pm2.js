module.exports = {
    apps : [{
      name: 'Server1',
      script: '../server.js',
      watch: true,
      args: '8082 fork',
      autorestart: true
    }]}