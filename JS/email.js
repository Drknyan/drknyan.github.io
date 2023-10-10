function sendMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        message: document.getElementById("message").value ,
    }
    const serviceID = "service_ngalm3p";
    const templateID = "template_jbq0usj";

    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your Message Was Sent Successfully!")
        })
    .catch(err=>console.log(err));
}

