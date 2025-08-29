import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { taskService } from './task.service';

const createTask = catchAsync(async (req, res) => {
  const result = taskService.createTask(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Task created successfully',
    data: result,
  });
});

const getTasks = catchAsync(async (_req, res) => {
  const result = taskService.getAllTasks();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Tasks retrieved successfully',
    data: result,
  });
});

const toggleTask = catchAsync(async (req, res) => {
  const result = taskService.toggleTask(req.params.id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: `Tasks status is now ${result?.status}`,
    data: result,
  });
});

export const taskController = {
  createTask,
  getTasks,
  toggleTask,
};
