function openWorkshop(e) {
    var children = e.parentElement.children;
    for (var index = 0; index < children.length; index++) {
        children[index].className = children[index].className.replace("hidden", "shown");
    }
    if(children[1].innerHTML == "See More")
    {
        children[1].innerHTML = "See Less"; //change 'see more' button to 'see less'
    }
    children[1].setAttribute("onclick", "closeWorkshop(this);"); //rebind the button to close the workshop
}

function closeWorkshop(e) {
    var children = e.parentElement.children;
    for (var index = 0; index < children.length; index++) {
        children[index].className = children[index].className.replace("shown", "hidden");
    }
    if(children[1].innerHTML == "See Less")
    {
        children[1].innerHTML = "See More"; //change 'see less' button to 'see more'
    }
    children[1].setAttribute("onclick", "openWorkshop(this);"); //rebind the button to open the workshop
}