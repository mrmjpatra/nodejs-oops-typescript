import { Router } from 'express';


class LessonRoutes {
  router = Router();
  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
      this.router.get('/',);
  }
}

export default new LessonRoutes().router;