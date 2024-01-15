import { Optional } from "sequelize";
import Course from "../../models/Course";

export default interface ICourseService{
    getCourseById(id: string): Promise<Course | null>;
    addCourse(course: Optional<any,any>):Promise<Course | null>;
    updateCourse(course: Course):Promise<Course | null>;
    deleteCourse(id: number):Promise<Course | null>;
    getAllCourses(): Promise<Course[]>;
}