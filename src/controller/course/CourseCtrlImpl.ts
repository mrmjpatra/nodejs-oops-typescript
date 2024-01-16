import { Request, Response } from "express";
import { apiErrorHandler } from "../../handler/errorHandler";
import CourseService from "../../service/course/CourseServiceImpl";
import ICourseService from "../../service/course/ICourseService";
import ICourseCtrl from "./ICourseCtrl";

export default class CourseCtrlImpl implements ICourseCtrl {
    private courseService: ICourseService = new CourseService();;
    constructor() {

    }
    getAllCourses =async (req: Request, res: Response) => {
        try {
            const courses =await this.courseService.getAllCourses();
            res.status(200).json({ message: 'Fetch All Courses success.', courses });
        } catch (error) {
            console.error(error);
            apiErrorHandler(error, req, res, 'Fetch All Courses failed.');
        }
    }
    getCourseById = async(req: Request, res: Response) => {
        try {
            const course=await this.courseService.getCourseById(req.params.id);
            res.status(200).json({ message: 'Fetch Course by id success.', course });
        } catch (error) {
            console.error(error);
            apiErrorHandler(error, req, res, 'Fetch Course by id failed.');
        }
    }
    addCourse =async (req: Request, res: Response) => {
        try {
            const course=await this.courseService.addCourse(req.body);
            res.status(200).json({ message: 'Add Course success.', course });
        } catch (error) {
            console.error(error);
            apiErrorHandler(error, req, res, 'Add Course failed.');
        }
    }
    updateCourse =async (req: Request, res: Response) => {
        try {
            const course=await this.courseService.updateCourse(req.body);
            res.status(200).json({ message: 'Update Course success.', course });
        } catch (error) {
            console.error(error)
            apiErrorHandler(error, req, res, 'Update Course failed.');;
        }
    }
    deleteCourse = async(req: Request, res: Response) => {
        try {
            const course=await this.courseService.deleteCourse(Number(req.params.id));
            res.status(200).json({ message: 'Delete Course success.', course });
        } catch (error) {
            console.error(error);
            apiErrorHandler(error, req, res, 'Delete Course failed.');
        }
    }
}