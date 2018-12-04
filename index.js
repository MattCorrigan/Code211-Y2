function openWorkshop(e) {
    var children = e.parentElement.children;
    for (var i = 0; i < children.length; i++) {
        children[i].className = children[i].className.replace("hidden", " ");
    }
    children[1].innerHTML = "See Less";
    children[1].setAttribute("onclick", "closeWorkshop(this);");
}

function closeWorkshop(e) {
    var children = e.parentElement.children;
    children[2].className += " hidden";
    children[3].className += " hidden";
    children[4].className += " hidden";
    children[1].innerHTML = "See More";
    children[1].setAttribute("onclick", "openWorkshop(this);");
}