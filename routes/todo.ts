import express, { Request, Router, Response, NextFunction } from 'express'
import createError from 'http-errors'

var router: Router = express.Router()
const todos = [{ id: 1, user: 'tommy', name: 'Complete the coding test' }]
router.get('/:user', function (req, res, next) {
  const filteredTodo = todos.filter((todo) => todo.user === req.params.user)
  if (filteredTodo.length === 0) {
    return next(createError(404, 'Not Found'))
  }
  return res.json(filteredTodo)
})

router.post('/:user', (req: Request, res: Response) => {
  const { name } = req.body
  const { user } = req.params
  const newTodo = {
    id: todos.length + 1,
    name,
    user
  }
  todos.push(newTodo)
  res.status(201).json(newTodo)
})
export default router
