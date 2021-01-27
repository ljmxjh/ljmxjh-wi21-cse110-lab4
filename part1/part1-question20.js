function fu(){
  let d=new Date();
  let time= d.toLocaleTimeString();
  console.log(time);
}
function showTime(){
  var intervalID = window.setInterval(fu,1000);
}

showTime();
