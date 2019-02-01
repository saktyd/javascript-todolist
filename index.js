var Todolist = [];
var number = 0;

function addTodo(list) {
  date = addDate();
  number = number + 1;
  Todolist.push({ number, list, date });
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
  const delete_temporary = Todolist.filter(item => item.number !== delete_item);

  console.log(delete_temporary);
  for (i = 0; delete_temporary[i] <= delete_temporary.length; i++) {
    if (delete_temporary[i].number > 1) {
      delete_temporary[i].number = delete_temporary[i].number - 1;
    }
    Todolist = delete_temporary;
    return delete_temporary;
  }
  Todolist = delete_temporary;
  console.log(Todolist);
  return Todolist;
}

function delete_todo() {
  console.log(' Todo list :');
  Todolist.forEach(todo => {
    const todoListString = `${todo.number}: ${todo.list} (${todo.date})`;

    console.log(todoListString);
  });
  let delete_item = prompt(' No berapa yang ingin dihapus: ');
  var del = parseInt(delete_item);
  delete_array(del);
}
