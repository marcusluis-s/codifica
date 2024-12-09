const fs = require('fs-extra');
const path = require('path');

// Caminho para a pasta de origem e destino
const sourceDir = path.resolve(__dirname, '../src/data');
const destDir = path.resolve(__dirname, '../dist/src/data');

// Copiar a pasta 'data' para a pasta 'dist/src/data'
fs.copy(sourceDir, destDir)
  .then(() => {
    console.log('Pasta data copiada com sucesso para dist/');
  })
  .catch((err) => {
    console.error('Erro ao copiar a pasta data:', err);
  });
