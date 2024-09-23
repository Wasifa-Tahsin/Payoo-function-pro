document.getElementById('btn-add-money').addEventListener('click',function(event){
event.preventDefault();

const addMoney=getInputFieldValueById('input-add-money')
const pinNumber=getInputFieldValueById('input-Pin-Number')
if(isNaN(addMoney)){
    alert('failed to add money')
    return;
}
// wrong way to verify
if(pinNumber=== 1234){
const balance=getTextFieldValueById('account-balance')
console.log(balance)
const newBalance=balance+addMoney
document.getElementById('account-balance').innerText=newBalance

// add to transcaation history
const p=document.createElement('p')
p.innerText=`Added : ${addMoney}Tk.Balance:${newBalance}`;
console.log(p)
// should be a common function
document.getElementById('Transcation-container').appendChild(p)

}
else{
    alert('failed to add money')
}
})