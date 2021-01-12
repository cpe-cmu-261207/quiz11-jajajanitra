//your code here!
let number = document.getElementById("input-number")
let modifyButton = document.getElementById("button-compute")
let myID = 620610781
let result = document.getElementById("compute-result")
let x

modifyButton.addEventListener("click",() => {
    x = myID-number
    result.innerHTML(x)
})

let tr = document.createElement('tr')
let td = document.createElement('td')