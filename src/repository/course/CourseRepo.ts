import { Model, Optional } from "sequelize";
import Course from "../../models/Course";
import ICourseRepo from "./ICourseRepo";

export default class CourseRepo implements ICourseRepo {
    async add(course: Optional<any, string>): Promise<Course | null> {
        try {
            const newCourse = await Course.create(course)
            return newCourse;
        } catch (error) {
            throw error;
        }
    }
    async update(course: Course): Promise<string> {
        try {
            const [affectedCount] = await Course.update(course, {
                where: {
                    id: course.id
                }
            });
            if (affectedCount===1) {
                return "Course updated successfully";
            }
            throw new Error('Course not found or req.body is empty');
        } catch (error) {
            throw error;
        }
    }
    getById(id: number): Promise<Course | null> {
        try {
            const course = Course.findByPk(id);
            return course;
        } catch (error) {
            throw error;
        }
    }

    async delete(id: number): Promise<Course | null> {
        try {
            const course = await Course.findByPk(id);
            if (course) {
                await course.destroy();
                return course;
            }
            throw new Error('Course not found');
        } catch (error) {
            throw error;
        }
    }
    getAll(): Promise<Course[]> {
        try {
            const courses = Course.findAll();
            return courses;
        } catch (error) {
            throw error;
        }
    }
}