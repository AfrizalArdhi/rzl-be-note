import {Sequelize} from "sequelize";

const db = new Sequelize('note_db', 'root', 'password', {
    host: '12.12.12.12', // public ip dari gcp
    dialect: 'mysql'
});

export default db;