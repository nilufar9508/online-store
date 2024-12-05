let plus = document.querySelectorAll('.plus')
let minus = document.querySelectorAll('.minus')
let count = document.querySelector('.count')


plus.forEach((button) => {
    button.addEventListener('click', () => {
        let inpt = button.parentElement.querySelector('.count')
        let soni = parseInt(inpt.value)
        inpt.value = soni +1
    })
})

minus.forEach((button) => {
    button.addEventListener('click', () => {
        let inpt = button.parentElement.querySelector('.count')
        let soni = parseInt(inpt.value)
        if (soni > 0) {
            inpt.value = soni-1
        }
    })
})

