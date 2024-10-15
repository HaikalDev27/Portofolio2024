// untuk aside nav
document.querySelector('.switch-btn').onclick = () =>{
    document.querySelector('.nav-aside').classList.toggle('active');
};

// untuk slider
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 6) {
        counter = 0;
    }
}, 5000);