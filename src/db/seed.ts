import Course from "../models/Course";
import Lesson from "../models/Lesson";

Course.sync({ force: true })
    .then(() => Lesson.sync({ force: true }))
    .then(() => console.log("Database Scheme created"))
    .then(()=>console.log("Database connection closed."))
    .catch((err: any) => console.error(err));
