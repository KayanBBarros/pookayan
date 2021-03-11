let Sequelize = require("sequelize");

let db = new Sequelize(
    "postgres://lbquhyamdmrdjc:f1e790437744af4f2d5783cdb02b6dff0ea046738f6052d4fb37b2a2891eb234@ec2-54-196-111-158.compute-1.amazonaws.com:5432/d1eqoo2ohi37r6",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
            rejectUnauthorized: false,
        }
    }
});

module.exports = db;
