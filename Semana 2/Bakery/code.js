var queue = [];
function check(val1) {
    if(document.getElementById(val1).prop('checked',true))
    queue.push(val1);
    //alert(queue[0] + '-' + queue[1] + '-' + queue[2]);
    if (queue.length > 3) {
        var val2 = queue.shift();
        queue.push(val1);
        //alert(queue[0] + '-' + queue[1] + '-' + queue[2]);
        document.getElementById(val2).prop('checked', false);
    }
}