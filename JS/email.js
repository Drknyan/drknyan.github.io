function sendMail(){
    var params = {
        from_name: document.getElementById("name").value ,
        email_id: document.getElementById("email").value ,
        message: document.getElementById("message").value ,
    }
    var serviceID = "service_ngalm3p";
    var templateID = "template_jbq0usj";

    emailjs.send(serviceID, templateID, params)
    .then(function (res) {
        alert("Message Sent Successfully!" + res.status);
    })
    .catch();
}

