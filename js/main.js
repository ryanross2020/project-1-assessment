let input = 0



//Handlers

let $inputCounter = $('.solution').text($inputCounter).appendTo('.input')

const display = () => {
    $('.solution').children().remove()
    $('<h1>').text(`${counter}`).appendTo('.input')
}

const checkInput = () => {
    let $input = parseInt($('.input').val())
        //console.log($input)
        return $input
}



const minus = $('.minus').on('click', ()=>{
    let subtract = checkInput()
    if (subtract >= 0){
        inputCounter -= subtract
        displayUpdate()
    }
    if (inputCounter < 0){
        $('.solution').addClass('red')
    }
})
const plus = $('.plus').on('click', ()=>{
    let add = checkInput()
    if (add >= 0){
        inputCounter += Add
        displayUpdate()
    }
    if (inputCounter < 0){
    $('.solution').addClass('red')
    }
})