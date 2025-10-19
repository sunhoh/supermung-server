import { RequestHandler, Router } from 'express';
import { z } from 'zod';

import { AppContext } from '@/contexts/app.context';

const router = Router();
const appContext = AppContext.getInstance();

/* GET users listing. */
router.get('/', async (req, res) => {
  const response = await appContext.todoController.getTodo();
  res.json(response);
});

router.post('/', async (req, res) => {
  const response = await appContext.todoController.postTodo(req.body);
  res.json(response)
});

router.put('/:id', async (req, res) => {
  const response = await appContext.todoController.putTodo(Number(req.params.id), req.body);
  res.json(response);
});

router.delete('/:id', async (req, res) => {
  const response = await appContext.todoController.deleteTodo(Number(req.params.id));
  res.json(response);
});

export default router;