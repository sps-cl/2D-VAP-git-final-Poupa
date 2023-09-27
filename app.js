function addTodo() {
    var inputElement = document.getElementById("input");
    var newTask = inputElement.value;
    if (newTask === '') {
        alert("zapiš úkol");
    } else {
        var list = document.createElement("LI");
        var text = document.createTextNode(newTask);
        list.appendChild(text);
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("")
        span.className = "close";
        span.appendChild(txt);
        list.appendChild(span);
        document.getElementById("seznam").appendChild(list);
        inputElement.value = "";
    }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
