const fs = require('fs')

fs.createReadStream('./assets/tata.jpg')
    .pipe(fs.createWriteStream('./assets/tata-stream.jpg'))
    .on('finish', () => console.log('Imagem foi escrita com sucesso'))