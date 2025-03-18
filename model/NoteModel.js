import { Sequelize } from "sequelize";
import db from "../config/Database.js";


const Note = db.define(
    'notes', {
        title: Sequelize.STRING,
        content: Sequelize.STRING
    }, {
        freezeTableName: true
    }
);

export default Note;

(async()=>{
    await db.sync();
})();

