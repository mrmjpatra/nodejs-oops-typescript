import { Request, Response } from "express";
import ICourseService from "../service/course/ICourseService";
import CourseService from "../service/course/CourseServiceImpl";
import { apiErrorHandler } from "../handler/errorHandler";

export default class CourseCtrl {
    private courseService: ICourseService= new CourseService();;
    constructor() {
    }
    getAllCourses = async (req: Request, res: Response) => {
        try {
            const courses = await this.courseService.getAllCourses();
            res.status(200).json({ message: 'Fetch All Courses success.',courses });
        } catch (error) {
            console.error(error);
            apiErrorHandler(error, req, res, 'Fetch All Courses failed.');
            res.status(500).json({ error: error });
        }
    }
    getCourseById = async (req: Request, res: Response) => {
        try {
            const course = await this.courseService.getCourseById(req.params.id);
            res.status(200).json({ message: 'Fetch Course by id success.',course });    
        } catch (error) {
            console.error(error);
            apiErrorHandler(error, req, res, 'Fetch Course by id failed.');
            res.status(500).json({ error: error });
        }
    }
    addCourse = async (req: Request, res: Response) => {
        try {
            const course = await this.courseService.addCourse(req.body);
            res.status(200).json({ message: 'Add Course success.',course });
        } catch (error) {
            console.error(error);
            apiErrorHandler(error, req, res, 'Add Course failed.');
            res.status(500).json({ error: error });
        }
    }
    updateCourse = async (req: Request, res: Response) => {
        try {
            const course = await this.courseService.updateCourse(req.body);
            res.status(200).json({ message: 'Update Course success.',course });
        } catch (error) {
            console.error(error);
            apiErrorHandler(error, req, res, 'Update Course failed.');
            res.status(500).json({ error: error });
        }
    }
    deleteCourse = async (req: Request, res: Response) => {
        try {
            const course = await this.courseService.deleteCourse(Number(req.params.id));
            res.status(200).json({ message: 'Delete Course success.',course });
        } catch (error) {
            console.error(error);
            apiErrorHandler(error, req, res, 'Delete Course failed.');
            res.status(500).json({ error: error });
        }
    }
}