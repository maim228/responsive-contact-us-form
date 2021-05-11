document.getElementById('submit').addEventListener('click',function(event){
    event.preventDefault();
    showS();
})

function showS(){
    if(document.getElementById('name').value === ''){
        document.getElementById('alert').style.display='block';
        document.getElementById('alert-text').innerHTML='<i class="fa fa-times" aria-hidden="true"></i> Full Name is required';
        setInterval(function(){ document.getElementById('alert').style.display='none'; }, 5000);
    }else if(document.getElementById('email').value === ''){
        document.getElementById('alert').style.display='block';
        document.getElementById('alert-text').innerHTML='<i class="fa fa-times" aria-hidden="true"></i> Email is required';
        setInterval(function(){ document.getElementById('alert').style.display='none'; }, 5000);
    }else if(document.getElementById('message').value === ''){
        document.getElementById('alert').style.display='block';
        document.getElementById('alert-text').innerHTML='<i class="fa fa-times" aria-hidden="true"></i> Your Message is required';
        setInterval(function(){ document.getElementById('alert').style.display='none'; }, 5000);
    }else{
        document.getElementsByClassName('container')[0].style.display='none';
        document.getElementById('success').style.display='block';
    }

}
