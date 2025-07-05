const contactDiv = document.createElement("div");

contactDiv.innerHTML = `
    <section class="content-middle">
        <h1 class="title-text">Contact Us</h1>
        <section class="content-left">
            <section id="contact-info">
                <p><strong>Address:</strong> Rte de Begnins 5, 1269 Bassins, Switzerland</p>
                <p><strong>Phone:</strong> +84 123 456 789</p>
                <p><strong>Email:</strong> contact@phosaigon.com</p>
                <p><strong>Hours:</strong> Mon-Sun: 8AM-9PM</p>
                <button class="button-full-width" onclick="location.href='http://www.example.com'">Create a Reservation</button>
            </section>

            <section>
                <h2>Send Us a Message</h2>
                <form action="#" method="post">
                    <input type="text" name="name" placeholder="Your Name" id="name-input" required>
                    <input type="email" name="email" placeholder="Your Email" id="email-input" required>
                    <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                    <button class="button-full-width" type="submit">Send Message</button>
                </form>
            </section>
        </section>
    </section>`;

export { contactDiv };