// console.log('add money loaded')
document.getElementById('btn-add-money').addEventListener('click',function(event){
event.preventDefault()
console.log("add money added")
// getInputFieldValueById();
// const inputAddMoney=getInputFieldValueById()
// console.log(inputAddMoney)
const addMoney=getInputFieldValueById('input-add-money')
const pinNumber=getInputFieldValueById('input-Pin-Number')
console.log(' ad money with parameter', addMoney,pinNumber)
})