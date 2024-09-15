import { Sequelize } from "sequelize";

export const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'dump/db.sqlite',
    logging: () => { },
}) 