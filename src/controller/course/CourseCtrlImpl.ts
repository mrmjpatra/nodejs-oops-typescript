import { Request, Response } from "express";
import { apiErrorHandler } from "../../handler/errorHandler";
import CourseService from "../../service/course/CourseServiceImpl";
import ICourseService from "../../service/course/ICourseService";
import ICourseCtrl from "./ICourseCtrl";

export default class CourseCtrlImpl implements ICourseCtrl {
    private courseService: ICourseService = new CourseService();;
    constructor() {

    }
    getAllCourses = (req: Request, res: Response) => {
        try {
            const courses = this.courseService.getAllCourses();
            res.status(200).json({ message: 'Fetch All Courses success.', courses });
        } catch (error) {
            console.error(error);
            apiErrorHandler(error, req, res, 'Fetch All Courses failed.');
            res.status(500).json({ error: error });
        }
    }
    getCourseById = (req: Request, res: Response) => {
        try {
            const course=this.courseService.getCourseById(req.params.id);
            res.status(200).json({ message: 'Fetch Course by id success.', course });
        } catch (error) {
            console.error(error);
            apiErrorHandler(error, req, res, 'Fetch Course by id failed.');
            res.status(500).json({ error: error });
        }
    }
    addCourse = (req: Request, res: Response) => {
        try {
            const course=this.courseService.addCourse(req.body);
            res.status(200).json({ message: 'Add Course success.', course });
        } catch (error) {
            console.error(error);
            apiErrorHandler(error, req, res, 'Add Course failed.');
            res.status(500).json({ error: error });
        }
    }
    updateCourse = (req: Request, res: Response) => {
        try {
            const course=this.courseService.updateCourse(req.body);
            res.status(200).json({ message: 'Update Course success.', course });
        } catch (error) {
            console.error(error);
            apiErrorHandler(error, req, res, 'Update Course failed.');
            res.status(500).json({ error: error });
        }
    }
    deleteCourse = (req: Request, res: Response) => {
        try {
            const course=this.courseService.deleteCourse(Number(req.params.id));
            res.status(200).json({ message: 'Delete Course success.', course });
        } catch (error) {
            console.error(error);
            apiErrorHandler(error, req, res, 'Delete Course failed.');
            res.status(500).json({ error: error });
        }
    }
}