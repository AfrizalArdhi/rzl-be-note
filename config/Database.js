import {Sequelize} from "sequelize";

const db = new Sequelize('note_db', 'root', '', {
    host: '', // public ip dari gcp
    dialect: 'mysql'
});

export default db;
