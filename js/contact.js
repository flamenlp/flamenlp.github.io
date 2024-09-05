document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        // from_name: name,
        // from_email: email,
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    emailjs.send('service_pelsspe', 'template_a0f3t0m', templateParams)
        .then(function(response) {
            document.getElementById('response').innerText = 'Message sent successfully!';
        }, function(error) {
            document.getElementById('response').innerText = 'Failed to send message. Error: ' + JSON.stringify(error);
        });
});
