const num = document.querySelector('.header__timer-extra')

console.log(num.innerHTML);

function logoSec(lvl = 0) {
    num.innerHTML = lvl;
    lvl++;
    let speed = 50

    if (lvl > 40) {
        speed = 100;
    } else if (lvl > 60) {
        speed = 120;
    } else if (lvl > 80) {
        speed = 140
    } else if (lvl > 90) {
        speed = 160;
    }

    if (lvl <= 100) {
        setTimeout(() => {
            logoSec(lvl)
        }, speed);
    }
    
}
logoSec()







const product = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        img: 'images/product2.jpg',
        amount: 0,
        kcall: 400,
        get totalSum() {
            return this.price * this.amount
        },
        get totalKcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: 'Гамбургер FRESH',
        price: 20500,
        img: 'images/product1.jpg',
        amount: 0,
        kcall: 550,
        get totalSum() {
            return this.price * this.amount
        },
        get totalKcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        img: 'images/product3.jpg',
        amount: 0,
        kcall: 800,
        get totalSum() {
            return this.price * this.amount
        },
        get totalKcall() {
            return this.kcall * this.amount
        }
    }
}


/* CHEKLIST */

const checkBox = document.querySelector('.receipt'),
    checkBoxBtn = document.querySelector('.addCart'),
    receiptWindow = document.querySelector('.receipt__window')
;




window.addEventListener('click', (e) => {
    if(e.target.classList.contains('receipt')) {
        checkBox.classList.remove('active')
        checkBox.classList.remove('receipt')
        receiptWindow.classList.add('active')
    }else {
        ''
    }
})


checkBoxBtn.addEventListener('click', () => {
    checkBox.classList.add('receipt')
    checkBox.classList.add('active')
})


/* PLUS MINUS BTN'S */

const productAmount = document.querySelectorAll('.main__product-num')



window.addEventListener('click', (e) => {
    if(e.target.classList.contains('plus')) {
        let parent = e.target.closest('.main__product')
        let parentId = parent.getAttribute('id')
        product[parentId].amount++
        
        productAmount.forEach((el) => {
            el.innerHTML = product[parentId].amount
        })
    }
})