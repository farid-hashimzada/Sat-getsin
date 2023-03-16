

let passwordOne = document.getElementById("password-one")

function showPassword() {

    if(passwordOne.type === "password") {
        passwordOne.type = 'text'
    } else {
        passwordOne.type = 'password'
    }

}


function goNext(e) {
    if(e.target.value){
        e.target.nextElementSibling.focus()
    }else{
        e.target.previousElementSibling.focus()
    }
}

$(".dropdown-option").hover(function(){
    $(".dropdown-option").removeClass("active")
    $(this).addClass("active")
    let child = $(this).data("id")
    $(".middle-one").css("display","none")
    $(`.middle-one:nth-child(${child})`).css("display","block")
})


$(".box-mark").click(function(){
    $(this).toggleClass("active")
    $(".dropdown").toggleClass("active")
})

$(".search-box").click(function() {
    $(".headerSearchOnclick").addClass("active")
})

$(".catogory").click(function() {
    $(".headerSearchOnclick").removeClass("active")
})


$(document).ready(function() {
    $('select').niceSelect();
});

$(".information-two p:first-child").click(function(){
    $(".information-two p").removeClass("active")
    $(this).addClass("active")
    $(".information-content").css("display","block")
    $(".watch-feature").css("display","none")
})

$(".information-two p:last-child").click(function(){
    $(".information-two p").removeClass("active")
    $(this).addClass("active")
    $(".information-content").css("display","none")
    $(".watch-feature").css("display","block")
})



// user hesabin dropdownlari

// document.querySelector('.user-rowone')

// let drop = document.getElementById('drop')
// function dropdown() {
//     if (drop.style.display === 'flex'){
//         drop.style.display = 'none'
//     }else{
//         drop.style.display = 'flex'
//     }

// }

$(".user-rowone p").click(function(){
    $(this).parent().toggleClass("active")
})


let dropTwo = document.getElementById('dropTwo')
function dropdownTwo() {
    if (dropTwo.style.opacity === '1') {
        dropTwo.style.opacity = '0'
        dropTwo.style.visibility = 'hidden'
        dropTwo.style.height = '0'
    } else {
        dropTwo.style.opacity = '1'
        dropTwo.style.visibility = 'visible'
        dropTwo.style.height = '176px'
    }
}