var button = document.getElementById("create");
button.addEventListener("click",addData);
var input = document.getElementById("input");
var list = document.getElementById("list");
var todolist = JSON.parse(localStorage.getItem("listItems")) || [];
print();

function addData() {
  input.value = input.value.trim(); // 前後去空白
  if(input.value!="") {
    todolist.push(input.value);
    print();
    input.value="";
  }
}

function deleteData(i) {
  todolist.splice(i,1);
  print();
}

function print() {
  localStorage.setItem("listItems",JSON.stringify(todolist));
  var content = "";
  for(var i=0; i<todolist.length; i++) {
    content = content + "<div>"+"<button class='delete' onclick='deleteData(" + i + ")'>完成</button>"+ (i+1) + ". " +todolist[i] + "</div>";
    //`<button class='delete' onclick='deleteData(${i})'>刪除</button>`
  }
  list.innerHTML = content;
}