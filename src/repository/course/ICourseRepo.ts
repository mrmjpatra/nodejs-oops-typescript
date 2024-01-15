import { Model, Optional } from "sequelize";
import Course from "../../models/Course";

export default interface ICourseRepo {
    getAll(): Promise< Course[]>;
    getById(id: number):  Promise<Course | null>;
    add(course: Optional<any, string>):  Promise<Course | null>;
    update(course: Course): Promise<number> ;
    delete(id: number):  Promise<Course | null>;
}