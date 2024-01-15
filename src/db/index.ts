import { Sequelize } from "sequelize";

export default class DB {
    private static readonly sequelize = new Sequelize('nodejs', 'root', 'mrmjpatra', {
        host: 'localhost',
        dialect: 'mysql',
        logging: (sql)=>{
            console.log(sql);
        }
    });
    constructor() {
        this.connect();
    }
    public static getSequelize() {
        return this.sequelize;
    }
    public connect() {
        DB.sequelize.authenticate()
            .then(() => {
                console.log('Database connection established successfully.');
            })
            .catch((err: any) => {
                console.error('Unable to connect to the database:', err);
            });
    }
    public closeConnection() {
        DB.sequelize.close()
            .then(() => {
                console.log('Database connection closed.');
            })
            .catch((err: any) => {
                console.error('Unable to close the database connection:', err);
            });
    }
}