/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("input-field")
const convertBtn = document.getElementById("convert-btn")
const lengthHtml = document.getElementById("length-html")
const volumeHtml = document.getElementById("volume-html")
const massHtml = document.getElementById("mass-html")


convertBtn.addEventListener("click", function(){
   convertLength()
   convertVolume()
   convertMass()
})

function floorNum(num){
    return Math.floor(num * 1000) / 1000
}

function convertLength(){
   const meterConversion = input.value * floorNum(3.281)
   const feetConversion = input.value / 3.281
   lengthHtml.innerHTML = `${input.value} meters = ${floorNum(meterConversion)} feet | ${input.value} feet = ${feetConversion.toFixed(3)} meters`
}

function convertVolume(){
    const literConversion = input.value * 0.264
    const gallonConversion = input.value / 0.264
    volumeHtml.innerHTML = `${input.value} liters = ${literConversion.toFixed(3)} gallons | ${input.value} gallons = ${gallonConversion.toFixed(3)} liters`
}

function convertMass(){
    const kiloConversion = input.value * 2.204
    const poundConversion = input.value / 2.204
    massHtml.innerHTML = `${input.value} kilos = ${kiloConversion.toFixed(3)} pounds | ${input.value} pounds = ${poundConversion.toFixed(3)} kilos`
}
