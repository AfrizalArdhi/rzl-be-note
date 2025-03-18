import {Sequelize} from "sequelize";

const db = new Sequelize('note_db', 'root', '1234', {
    host: '34.57.19.147', // public ip dari gcp
    dialect: 'mysql'
});

export default db;
