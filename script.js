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