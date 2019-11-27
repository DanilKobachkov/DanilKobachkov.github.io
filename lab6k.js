window.onload = function(){
  for (var i=0; i<9; i++){
  document.getElementById('game').innerHTML+='<div class="block"></div>'; 
}
  document.getElementById('game').onclick= function(event){
    console.log(event);
    if (event.target.className == 'block')
      this.innerHTML = '0';
  }
}
