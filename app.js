document.getElementById('submit').addEventListener('click',function(event){
    event.preventDefault();
    showS();
})

function showS(){
    if(document.getElementById('name').value === ''){
        swal("Error!", "Full name is required!", "error");
    }else if(document.getElementById('email').value === ''){
        swal("Error!", "Email is required!", "error");
    }else if(document.getElementById('message').value === ''){
        swal("Error!", "hmmm! Forgot the message?", "error");
    }else{
        swal("Good job!", "Message Sent!", "success");
        document.querySelector(".form").reset();
    }

}
