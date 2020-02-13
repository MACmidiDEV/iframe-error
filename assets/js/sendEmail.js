function sendMail(contactForm) {
 

    emailjs.send("gmail", "sendEjs", {        
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "project_summary": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            
            
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}