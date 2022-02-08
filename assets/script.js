// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Salvador Acosta" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0
let cc = 0
let sugar = 0
let total = 0


function updateGb(displayGb){
    let gb = document.querySelector('#qty-gb')
    gb.textContent = displayGb
}
function updateCc(displayCc){
    let cc = document.querySelector('#qty-cc')
    cc.textContent = displayCc
}
function updateSugar(displaySugar){
    let sugar = document.querySelector('#qty-sugar')
    sugar.textContent = displaySugar
}
function updateTotal(displayTotal){
    let total = document.querySelector('#qty-total')
    total.textContent = displayTotal
}

const credit = document.querySelector('#credit')

const gbPlusBtn = document.querySelector('#add-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarMinusBtn = document.querySelector('#minus-sugar')


credit.textContent = `Created by ${yourName}`

gbPlusBtn.addEventListener('click', function(e) {
    gb++;
    total++;
    updateGb(`${gb}`)
    updateTotal(`${total}`)
});
ccPlusBtn.addEventListener('click', function(e){
    cc++;
    total++;
    updateCc(`${cc}`)
    updateTotal(`${total}`)
});
sugarPlusBtn.addEventListener('click', function(e){
    sugar++;
    total++;
    updateSugar(`${sugar}`)
    updateTotal(`${total}`)
});
gbMinusBtn.addEventListener('click', function(e){
    if (gb > 0){
        gb--;
        total--;
    updateGb(`${gb}`)
    updateTotal(`${total}`)
    }
 });
ccMinusBtn.addEventListener('click', function(e){
    if (cc > 0){
        cc--;
        total--;
        updateCc(`${cc}`)
        updateTotal(`${total}`)
}
});
sugarMinusBtn.addEventListener('click', function(e){
    if (sugar > 0){
    sugar--;
    total--;
    updateSugar(`${sugar}`) 
    updateTotal(`${total}`)
}
})
