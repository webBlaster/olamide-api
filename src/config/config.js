require("dotenv").config();
const dbString = process.env.DATABASE_URL;
const dbArray = dbString.split(":");

const dbInformation = {
  username: dbArray[1].split("//")[1],
  password: dbArray[2].split("@")[0],
  host: dbArray[2].split("@")[1],
  database: dbArray[3].split("/")[1],
};

console.log(dbInformation);

const { username, password, host, database } = dbInformation;

module.exports = {
  development: {
    username: "olamide",
    password: "olamide",
    database: "olamide",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
  },
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};
