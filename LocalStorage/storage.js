
function CheckBrowser() {
    if ("localStorage" in window && 
         window["localStorage"] !== null) 
    {
        // we can use localStorage object to store data
        return true;
    } else {
        //  we cannot use localStorage object to store data
        return false;
    }
}

function doShowAll() { 
if (CheckBrowser()) {
    var key = "";
    var list = "<tr><th>Name</th><th>Value</th></tr>\n";
    var i = 0;
    for (i = 0; i <= localStorage.length - 1; i++) {
        key = localStorage.key(i);
        list += "<tr><td>" + key + "</td>\n<td>" +
        localStorage.getItem(key) + "</td></tr>\n";
    } 
    document.getElementById("list").innerHTML = list;
    if (list === "<tr><th>Name</th><th>Value</th></tr>\n") {
        list += "<tr><td>empty</td>\n<td>empty</td></tr>\n";
        document.getElementById("list").innerHTML = list;
    }
} else {
    alert("Sorry, your browser does not support local storage.");
}
} 

function SaveItem() {
    var name = document.forms.ShoppingList.name.value;
    var data = document.forms.ShoppingList.data.value;
    localStorage.setItem(name, data);
    doShowAll();
}

function ModifyItem() {
    var name = document.forms.ShoppingList.name.value;
    document.forms.ShoppingList.data.value = 
    localStorage.getItem(name);
    doShowAll();
} 

function RemoveItem() {
    var name = document.forms.ShoppingList.name.value;
    document.forms.ShoppingList.data.value = 
    localStorage.removeItem(name);
    doShowAll();
} 

function ClearAll() {
    localStorage.clear();
    doShowAll();
}