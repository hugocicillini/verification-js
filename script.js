const campos = document.getElementsByClassName('campos');
const input = document.getElementsByTagName('input');
const span = document.getElementsByTagName('span');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const senhaRegex = /(?=.*[a-z])(?=.*[A-Z])/;

function setError(index){
    campos[index].style.border = '1px solid red'
    span[index].style.display = 'block'
}

function removeError(index){
    campos[index].style.border = ''
    span[index].style.display = 'none'
}

function nameValidation() {
    if(campos[0].value.length == "" || campos[0].value.length < 8){
        setError(0);
    }

    else {
        removeError(0);
    }

}

function emailValidation() {
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    }
    
    else {
        removeError(1);
    }
}

function passValidation(){
    if(!senhaRegex.test(campos[2].value)){
        setError(2);
    }

    else {
        removeError(2);
    }
}

function telValidation(){
    if(campos[3].value.length < 11){
        setError(3);
    }

    else {
        removeError(3);
    }
}

function cpfValidation(){
    if(campos[4].value.length < 11){
        setError(4);
    }

    else {
        removeError(4);
    }
}