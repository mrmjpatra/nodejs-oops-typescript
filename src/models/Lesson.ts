import { DataTypes } from "sequelize";
import DB from "../db";

const Lesson =  DB.getSequelize().define('lesson', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: { 
        type: DataTypes.STRING 
    },
    thumbnailUrl: { 
        type: DataTypes.STRING 
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
// Lesson.sync({ force: true });
export default Lesson;