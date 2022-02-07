setInterval(todayTime,1000);

function todayTime()
{
    var time= new Date();
    document.getElementById("timeHere").innerHTML=time.toLocaleTimeString();
   
}
