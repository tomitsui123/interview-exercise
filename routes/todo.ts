import express from 'express'
import createError from 'http-errors'
var router = express.Router()
const todos = [{ id: 1, user: 'tommy', name: 'Complete the coding test' }]
router.get('/:user', (req, res, next) => {
  const filteredTodo = todos.filter((todo) => todo.user === req.params.user)
  if (filteredTodo.length === 0) {
    return next(createError(404, 'Not Found'))
  }
  return res.json(filteredTodo)
})
export default router
