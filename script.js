
function display(){
    let dateTime=new Date();
    let hr=dateTime.getHours()
    let min=dateTime.getMinutes()
    let secs=dateTime.getSeconds()

    document.getElementById('hours').innerHTML=hr
    document.getElementById('mins').innerHTML=min
    document.getElementById('sec').innerHTML=secs

}

setInterval(display,500)