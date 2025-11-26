const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("project", "root", "Ajay@2529", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log(`connection to database has been created`);
  } catch (error) {
    console.log(error);
  }
})();

module.exports = sequelize;
