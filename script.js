import {modal} from './modal.js'
import {alertError} from './alert-error.js'
import{imc, notANumber} from './utils.js'

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")


form.onsubmit = event =>{
    event.preventDefault()

        let weight = inputWeight.value
        let height = inputHeight.value

        const showAlertError = notANumber(weight) || notANumber(height)
        if (showAlertError) {
            alertError.open()
            return
        }

        alertError.close()

        let result = imc(weight, height)
        modal.open()
        let message = `Seu IMC é de ${result}`
        modal.message.innerText = message
    }

inputWeight.oninput = ()=> alertError.close()
inputHeight.oninput = ()=> alertError.close()
