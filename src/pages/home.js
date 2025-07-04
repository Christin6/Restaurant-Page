const homeDiv = document.createElement("div");
import phoBowlImg from "../img/pho.png";

homeDiv.innerHTML = `
            <section class="full-content-middle">
                <h1 class="title-text">Pho Saigon</h1>
                <img src=${phoBowlImg} id="title-img" >
                <p class="subtitle">Fresh, Clean, and <span class="underline">Pho-nomenal</span></p>
            </section>
            <section class="content-middle green-bg">
                <h2>What Our Customers Say</h2>
                <section class="review-card-row">
                    <article class="review-card">
                        <h3>Mike</h3>
                        <p>I recently tried Pho Saigon, and wow, was I impressed! The moment I walked in, the warm, inviting smell of broth hit me, and I knew I was in for a treat. The decor had a cozy, casual vibe—perfect for settling in with a comforting bowl of soup.</p>
                    </article>
                    <article class="review-card">
                        <h3>Andrea</h3>
                        <p>If you're in the mood for something warm and satisfying, I highly recommend checking this place out. The service was friendly, too—my server checked in just enough without being intrusive, which is always a plus. I left feeling full and happy, and I can't wait to go back and try some of their other dishes. If you love pho, this is definitely a spot you'll want to add to your list!</p>
                    </article>
                    <article class="review-card">
                        <h3>James</h3>
                        <p>Best Vietnamese restaurant in this city! The foods are rich and authentic, making you want to teat them again and again. The place ambience is also great if you want to enjoy your meal with family or friends or even by yourself.</p>
                    </article>
                </section>
            </section>
            <section class="content-middle">
                <h2>We are Open at</h2>
                <ul>
                    <li>Monday: 8am - 10pm</li>
                    <li>Tuesday: 8am - 10pm</li>
                    <li>Wednesday: 8am - 10pm</li>
                    <li>Thursday: 8am - 10pm</li>
                    <li>Friday: 8am - 10pm</li>
                    <li>Saturday: 9am - 9pm</li>
                    <li>Sunday: 9am - 9pm</li>
                </ul>
            </section>
            <section class="content-middle">
                <h2>Visit Us</h2>
                <p>📍 Rte de Begnins 5, 1269 Bassins, Switzerland</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.2765421485606!2d6.2313063765082966!3d46.46303007110796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c5ad63320cdbf%3A0x863bb40a6698818f!2sRte%20de%20Begnins%205%2C%201269%20Bassins%2C%20Switzerland!5e0!3m2!1sen!2sid!4v1751603469126!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>`;

export { homeDiv };