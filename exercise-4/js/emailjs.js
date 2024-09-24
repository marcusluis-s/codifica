function sendEmail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_6k30c0e", "template_b3x1mlv", params)
        .then(function() {
            alert("Email enviado!")
            document.getElementById("form").reset();
        })
        .catch(function(error) {
            alert("Erro ao enviar o email:", error);
        })
}
