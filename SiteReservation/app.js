// Nav 

var btn = document.getElementById('btnNav');
var content = document.getElementById('menuContent');
btn.addEventListener('click', function(){
    content.classList.toggle('is-active');
})
