
//displays time and date using moment.js() with setInterval()

var datetime = null,
    date = null;

var update = function() {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
}

$(document).ready(function(){
    datetime = $('#datetime')
    update();
    setInterval(update,1000);
})