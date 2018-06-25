function collapse(){
  var x = document.getElementById('nav-bar');
  if(x.className === 'myNav'){
    x.className += ' responsive';
  } else{
    x.className = 'myNav';
  }
}
