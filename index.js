let todos = []
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

function addTodo(newText) {
  todos.push({
    text: newText,
    date: addDate()
  })
  console.log('New todo added.')
}

function addDate() {
  const date = new Date()
  const newDateString = `${date.getHours()}:${date.getMinutes()}, ${date.getDate()} ${
    monthNames[date.getMonth()]
  } ${date.getFullYear()}`

  return newDateString
}

function deleteTodo(deleteItemId) {
  const deleted = todos.filter((todo, index) => {
    return index !== deleteItemId
  })
  todos = deleted
}

function deleteTodoPrompt() {
  console.log('Todo list:')
  displayTodoList()

  const deleteItemId = prompt('What id of the todo do you want to delete?')
  const deleteItemIndex = deleteItemId - 1
  deleteTodo(deleteItemIndex)

  console.log(`Todo with id ${deleteItemId} deleted.`)
}

function displayTodoList() {
  todos.forEach((todo, index) => {
    const todoListString = `${index + 1}: ${todo.text} (${todo.date})`
    console.log(todoListString)
  })
}

addTodo('Learning JavaScript')
addTodo('Running on the water')
addTodo('Flying to sky')
displayTodoList()
// deleteTodoPrompt()
