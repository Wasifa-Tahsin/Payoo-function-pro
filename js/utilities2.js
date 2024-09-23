function getInputFieldValueById(id){
const inputValue=document.getElementById(id).value
const inputNumber=parseFloat(inputValue)
// console.log(inputNumber)
return inputNumber

}
function getTextFieldValueById(id){
    const textValue=document.getElementById(id).innerText
    const textNumber=parseFloat(textValue)
    return textNumber
}
function showSectionById(id){
    // hide all sections
    document.getElementById('add-money-from').classList.add('hidden')
    document.getElementById('cash-out-from').classList.add('hidden')
    document.getElementById('transcation-section').classList.add('hidden')
    // show the section with the provided id
    document.getElementById(id).classList.remove('hidden')
}