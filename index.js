var Todolist = [];

function addTodo(list) {
  date = addDate();
  Todolist.push({ list, date });
  console.log(' List Updated.');
  displayTodolist();
}

function addDate() {
  var date = new Date();
  var monthNames = [
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
  ];
  newDate = `${date.getHours()}:${date.getMinutes()}, ${date.getDate()} ${
    monthNames[date.getMonth()]
  } ${date.getFullYear()}`;
  return newDate;
}

function delete_array(delete_item) {
  var delete_temporary = Todolist.splice(delete_item, 1);
  Todolist = delete_temporary;
  return Todolist;
}

function delete_todolist() {
  console.log(' Todo list :');

  displayTodolist();
  let delete_item = prompt('What number do you want to delete? ');
  delete_item = delete_item - 1;
  delete_array(delete_item);
  console.log('---------------------');
  console.log(' List Updated.');
  displayTodolist();
}

function displayTodolist() {
  let a = 1;
  Todolist.forEach(todo => {
    const todoListString = `${a}: ${todo.list} (${todo.date})`;
    a++;
    console.log(todoListString);
  });
}
