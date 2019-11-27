window.onload = function(){
  for (var i=0; i<9; i++){
  document.getElementById('game').innerHTML+='<div class="block"></div>'; 
}
  var hod = 0;
  
  document.getElementById('game').onclick= function(event){
    console.log(event);
    if (event.target.className == 'block')
      if (hod%2==0){
       event.target.innerHTML = 'X';
      }
    else{
        event.target.innerHTML = 'O';
    }
    hod++;
    checkWinner();
  }
  function checkWinner(){
    var allblock = document.getElementsByClassName('block');
    //console.log(allclock);
    if (allblock[0].innerHTML=='X' && allblock[1].innerHTML=='X' && allblock[2].innerHTNL=='X')
    
    }
}
