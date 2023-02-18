import express from 'express'
var router = express.Router()
const todos = [{ id: 1, user: 'tommy', name: 'Complete the coding test' }]
router.get('/:user', function (req, res) {
  const filteredTodo = todos.filter((todo) => todo.user === req.params.user)
  res.json(filteredTodo)
})
export default router
