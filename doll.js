const rubl = document.getElementById('button')
const juan = document.getElementById('button1')
const euro = document.getElementById('button2')
const numInp = document.getElementById('input')
const printRes = document.getElementById('viv')

rubl.onclick = function(res){
    res = numInp.value * 300
    printRes.textContent = res
}

juan.onclick = function(res){
    res = numInp.value * 200
    printRes.textContent = res
}

euro.onclick = function(res){
    res = numInp.value * 100
    printRes.textContent = res
}


