var items = [];
document.getElementById("demo").innerHTML = items;

function myFunction() {
        items.push("<br>Another Item");
        document.getElementById("demo").innerHTML = items;
    }