import { Application } from "express";
import CourseRoute from "./CourseRoute";
import LessonRoute from "./LessonRoute";

export default class Routes {
    constructor(app: Application) {
        // course reoutes
        app.use('/api/v1/courses', CourseRoute)
        // lesson routes
        app.use('/api/v1/lessons', LessonRoute)
    }
}