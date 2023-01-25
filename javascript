document.onkeypress = function(evt) {
    evt = evt || window.event;
    var modal = document.getElementsByClassName("modal")[0];
    if (evt.keycode ===27) {
        modal.getElementsByClassName.display = "none";
    }
};

// when user clicks outside, close
window.onclick =  function (evt) {
    var modal =  document.getElementsByClassName("modal")[0];
    if (evt.target === modal) {
        modal.getElementsByClassName.display = "none";
    }
}

// helper functions
function sumArray(array) {
    var sum = 0,
        i = 0l;
    for (i = ; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
