import { Model, Optional } from "sequelize";
import CourseRepo from "../../repository/course/CourseRepo";
import ICourseRepo from "../../repository/course/ICourseRepo";
import ICourseService from "./ICourseService";
import Course from "../../models/Course";

export default class CourseService implements ICourseService {
    private courseRepo: ICourseRepo = new CourseRepo();

    async addCourse(course: Optional<any, string>): Promise<Course | null> {
        try {
            const newCourse = await this.courseRepo.add(course);
            return newCourse;
        } catch (error) {
            throw error;
        }
    }
    async updateCourse(course: Course): Promise<string> {
        try {
            const updatedCourse = await this.courseRepo.update(course);
            return updatedCourse;
        } catch (error) {
            throw error;
        }
    }
    async deleteCourse(id: number): Promise<Course | null> {
        try {
            const deletedCourse = await this.courseRepo.delete(id);
            return deletedCourse;
        } catch (error) {
            throw error;
        }
    }
    async getAllCourses(): Promise<Course[]> {
        try {
            const allCourse = await this.courseRepo.getAll();
            return allCourse;
        } catch (error) {
            throw error;
        }
    }

    async getCourseById(id: string): Promise<Course | null> {
        try {
            const course = await this.courseRepo.getById(Number(id));
            return course;
        } catch (error) {
            throw error;
        }
    }



}