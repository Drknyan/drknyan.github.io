function sendMail(){
    var params = {
        from_name: document.getElementById("name").value ,
        email_id: document.getElementById("email").value ,
        message: document.getElementById("message").value ,
    }

    emailjs.send("service_ngalm3p", "template_jbq0usj", params)
    .then(function (res) {
        alert("Message Sent Successfully!" + res.status);
    })
}

