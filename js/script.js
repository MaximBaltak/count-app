const add = document.querySelector('#button_add')
const remove = document.querySelector('#button_remove')
const clear = document.querySelector('#button_clear')
const count = document.querySelector('#count_text')
const stateNumber = {
    number: 0
}
const renderCount = (number, type = '') => {
    if (type === 'clear') {
        count.textContent = `${0}`
        stateNumber.number = 0
        return
    }
    if (stateNumber.number < number) {
        count.textContent = `${number}`
        stateNumber.number += 1
    }
    if (stateNumber.number > number) {
        if (stateNumber.number === 0) {
            count.textContent = `${0}`
            stateNumber.number = 0
        } else {
            count.textContent = `${number}`
            stateNumber.number -= 1
        }
    }
}
add.addEventListener('click', () => {
    renderCount(stateNumber.number + 1)
})
remove.addEventListener('click', () => {
    renderCount(stateNumber.number - 1)
})

clear.addEventListener('click', () => {
    renderCount(0, 'clear')
})
