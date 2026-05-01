import express, { Router } from 'express'
import { bulkUploadEmployees, createEmployee, deleteEmployee, getAllEmployee, updateEmployee, updateEmployeePartially } from '../controllers/employeeLogic.js'
import { protect } from '../Middleware/authmiddleware.js'

export const employeeRouter = Router()

employeeRouter.post("/create",protect, createEmployee)
employeeRouter.get("/getEmployee",protect, getAllEmployee)
employeeRouter.post("/bulkDataEmployee",protect, bulkUploadEmployees)
employeeRouter.put("/updateFullUpDate/:id",protect, updateEmployee)
employeeRouter.patch("/updatePartial/:id",protect, updateEmployeePartially)
employeeRouter.delete("/deleteEmployee/:id",protect, deleteEmployee)
