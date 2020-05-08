let input = 0;


//Handlers

let $inputCounter = $('.input');

const display = () => {
    $('.solution').children().remove();
    $(',solution').text($inputCounter).appendTo('.input');
}

const checkInput = () => {
    let $input = parseInt(input.val());
        console.log($input)
        // return $input;
}

const minus = $('.minus').on('click', ()=>{
    let subtract = checkInput()
    if (subtract >= 0) {
        inputCounter -= subtract;
        display();
    }
    if (inputCounter < 0){
        $('.solution').css('color', 'red')
    }
})

const plus = $('.plus').on('click', ()=>{
    let add = checkInput()
    if (add >= 0){
        inputCounter += add;
        display();
    }
})