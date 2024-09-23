document.getElementById('btn-cash-out').addEventListener('click',function(event){
event.preventDefault()
const cashOut=getInputFieldValueById('input-cash-out')
const inputPinNumber=getInputFieldValueById('input-cash-out-pin')

if(isNaN(cashOut)){
    alert("failed to cash out")
    return;
}
// console.log('input', cashOut)
if(inputPinNumber===1234){
const balance=getTextFieldValueById('account-balance')

if(cashOut>balance){
    alert('you donot have enough balance')
    return
}
console.log(balance)
const newBalance=balance-cashOut
document.getElementById('account-balance').innerText=newBalance
// add to transcation history
 const div=document.createElement('div')
 div.classList.add('bg-yellow-300')
 div.innerHTML=`
 <h4 class="text-2xl font-bold">Cash Out</h4>
 <p>${cashOut}Money Withdraw.new Balance ${newBalance}</p>
 `
 document.getElementById('Transcation-container').appendChild(div)
}
else{
    alert('no money for you ...dure jaye mor')
}
})