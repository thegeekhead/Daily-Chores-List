var add = document.getElementById('add');
var removeAll = document.getElementById('removeall');
var list = document.getElementById('list');
var userInput = document.getElementById('userinput');


//remove all

removeAll.onclick = function () {
    list.innerHTML = '';
}

//add

userInput.addEventListener("keydown", (event) => {
    if(event.keyCode == "13")
    {
        document.getElementById("add").click();
    }
});

add.onclick = function () {
    addlst(list);
    userInput.value = '';
    userInput.focus();
}

function addlst(targetUl) {
    var inptText = userInput.value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inptText + " ");
    var remBtn = document.createElement('button');


    if (inptText !== '') {
        remBtn.className = 'btn btn-xs btn-danger'
        remBtn.innerHTML = '&times;';
        remBtn.setAttribute('onclick', 'removeMe(this)');
        li.appendChild(textNode);
        li.appendChild(remBtn);
        targetUl.appendChild(li);
    }
    else {
        alert("Please enter a list.");
    }


}

function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}

