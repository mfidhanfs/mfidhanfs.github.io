document.getElementById('contactForm').addEventListener('submit', function (event) {
            var formValid = true;

            var name = this.elements['name'];
            var email = this.elements['email'];
            var subject = this.elements['subject'];
            var message = this.elements['message'];

            if (!name.value.trim()) {
                formValid = false;
                alert('Please enter your name');
            }

            if (!email.value.trim() || !validateEmail(email.value)) {
                formValid = false;
                alert('Please enter a valid email address');
            }

            if (!subject.value.trim()) {
                formValid = false;
                alert('Please enter the subject');
            }

            if (!message.value.trim()) {
                formValid = false;
                alert('Please enter your message');
            }

            if (!formValid) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
        });

        function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
