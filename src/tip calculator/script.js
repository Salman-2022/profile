const billAmount = document.getElementById('billAmount')
const tipPercentage = document.getElementById('tipPercentage')
const finalAmount = document.getElementById('finalAmount')
const add = document.getElementById('add')
const sub = document.getElementById('sub')
const noOfPeople = document.getElementById('noOfPeople')


add.onclick=()=>{
    count =(Number(noOfPeople.innerText))
    count++
    console.log(count)
    noOfPeople.innerHTML=count
    calculateBill()
}

sub.onclick=()=>{
    count = (Number(noOfPeople.innerText))
    if(count==1){
        return
    }
    else{
        count--
        noOfPeople.innerText=count
    }
    calculateBill()
}


function calculateBill(){
    let bill = Number(billAmount.value)
    percent = Number(tipPercentage.value)
    people = Number(noOfPeople.innerText)
    final = (bill+(bill*(percent/100)))/people
    final = (Math.round(final*100))/100

    
    finalAmount.innerHTML=final
}