import { Router } from 'express';
import CourseCtrlImpl from '../controller/course/CourseCtrlImpl';


class CourseRoutes {
  router = Router();
  private courseCtrl = new CourseCtrlImpl();
  public constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.get('/', this.courseCtrl.getAllCourses);
    this.router.get('/:id', this.courseCtrl.getCourseById);
    this.router.post('/', this.courseCtrl.addCourse);
    this.router.put('/', this.courseCtrl.updateCourse);
    this.router.delete('/:id', this.courseCtrl.deleteCourse);
  }
}

export default new CourseRoutes().router;