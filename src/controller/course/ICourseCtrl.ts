import { Request, Response } from "express";

export default interface ICourseCtrl{
    getAllCourses(req: Request, res: Response):void;
    getCourseById(req: Request, res: Response):void;
    addCourse(req: Request, res: Response):void;
    updateCourse(req: Request, res: Response): void;
    deleteCourse(req: Request, res: Response): void;
}