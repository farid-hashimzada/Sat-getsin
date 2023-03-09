

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