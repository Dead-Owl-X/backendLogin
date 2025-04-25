const { Sequelize } = require('sequelize');

const { dbName, dbConfig } = require('../config.json'); // Asegúrate de que la ruta sea correcta

module.exports = db = {};

initialize();

async function initialize() {
    const dialect = 'mysql';
    const host = dbConfig.server; // Cambia "server" por "host" si es necesario
    const user = dbConfig.userName; // Ajustado para coincidir con config.json
    const password = dbConfig.password;

    // Conectar a la base de datos
    const sequelize = new Sequelize(dbName, user, password, { host, dialect });

    // Inicializar modelos y agregarlos al objeto exportado db
    db.User = require('../users/user.model')(sequelize);

    // Sincronizar todos los modelos con la base de datos
    await sequelize.sync({ alter: true });
}
