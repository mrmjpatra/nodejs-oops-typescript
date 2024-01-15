import { DataTypes, Model } from "sequelize";
import DB from "../db";
import Lesson from "./Lesson";

export default class Course extends Model {
    public id !: number;
    public title !: string;
    public description !: string;
}
Course.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'courses',
    sequelize: DB.getSequelize()
});

Course.hasMany(Lesson, {
    foreignKey: 'courseId',
    as: 'lessons'
});
Lesson.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
