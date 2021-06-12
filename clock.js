console.log("creating a clock");
function clock() {
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
 min = (min<10 ? "0":"" )+min;
 sec= (sec<10 ? "0":"" )+sec;
    var timeStr = hrs + ":" + min + ":" + sec;
   
    document.getElementById("clock").innerHTML = timeStr;


}