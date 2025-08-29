import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { taskController } from './task.controller';
import { taskValidation } from './task.validation';

const router = Router();

router.get('/', taskController.getTasks);

router.post(
  '/',
  validateRequest(taskValidation.createTaskSchema),
  taskController.createTask,
);

router.patch('/:id/toggle', taskController.toggleTask);

export const taskRoute = router;
