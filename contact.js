const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();

        if(name === "" || email === "" || subject === "" || message === ""){

            document.getElementById("response").textContent =
            "Please fill in all fields.";

            return;
        }

        document.getElementById("response").textContent =
        "Thank you! Your message has been sent.";

        contactForm.reset();

    });

}