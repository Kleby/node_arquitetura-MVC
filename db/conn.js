const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Conctado ao banco de dados com sucesso!');

} catch (err) {
    console.log(`Não foi possível conectar ao banco de dados: ${err}`)
}

exports.default = sequelize;