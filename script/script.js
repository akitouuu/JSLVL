const num = document.querySelector('.header__timer-extra')

console.log(num.innerHTML);

function logoSec() {
    

    

    if(num.innerHTML < 50) {
        num.innerHTML++
        setTimeout(() => logoSec(), 50);
        
    }else if(num.innerHTML >= 50) {
        num.innerHTML++
        setTimeout(() => logoSec(), 150);
    }else if(num.innerHTML >= 100){
        num.innerHTML = 100
    }else {}
    
}
logoSec()