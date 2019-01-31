var Todolist = [];
var number = 0;

function addTodo(list) {
  date = addDate();
  number = number + 1;
  Todolist.push({ number, list, date });
}

function addDate() {
  date = new Date();
  return date;
}

function delete_array(delete_item) {
  let delete_temporary = Todolist.filter(item => item.number !== delete_item);
  Todolist = delete_temporary;
}

function delete_todo() {
  console.log(' Todo list :');
  for (i = 0; i <= Todolist.length; i++) {
    console.log(Todolist[i]);
  }
  var delete_item = prompt(' No berapa yang ingin dihapus: ');
  delete_array(delete_item);
  return Todolist;
}
