import { Request, Response } from "express";
import { apiErrorHandler } from "../handler/errorHandler";

export default class LessonCtrl {
    constructor(){

    }
    async getAllLessons(req:Request, res:Response){
        try {
            
        } catch (error) {
            apiErrorHandler(error, req, res, 'Fetch All Lessons failed.');
        }
    }
    async getLessonById(req:Request, res:Response){
        try {
            
        } catch (error) {
            
        }
    }
    async createLesson(req:Request, res:Response){
        try {
            
        } catch (error) {
            
        }
    }
    async updateLesson(req:Request, res:Response){
        try {
            
        } catch (error) {
            
        }
    }
    async deleteLesson(req:Request, res:Response){
        try {
            
        } catch (error) {
            
        }
    }
}