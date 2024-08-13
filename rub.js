const rubl = document.getElementById('button')
const juan = document.getElementById('button1')
const euro = document.getElementById('button2')
const numInp = document.getElementById('input')
const printRes = document.getElementById('viv')

rubl.onclick = function(res){
    res = numInp.value * 3600
    printRes.textContent = res
}

juan.onclick = function(res){
    res = numInp.value * 2800
    printRes.textContent = res
}

euro.onclick = function(res){
    res = numInp.value * 1000
    printRes.textContent = res
}


