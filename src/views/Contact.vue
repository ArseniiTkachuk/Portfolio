<template>
    <section class="contact">
        <h2 class="title">
            {{ $t('contact.title.part1') }}<span>{{ $t('contact.title.part2') }}</span>
        </h2>

        <p class="subtitle">
            {{ $t('contact.description') }}
        </p>

        <div class="contact-wrapper">


            <!-- FORM -->
            <form class="contact-form" @submit.prevent="submitForm">
                <p class="anonymous-note">{{ $t('contact.anonymous_note') }}</p>
                <textarea rows="5" v-model="form.message" :placeholder="`${$t('contact.placeholder.message')}`"
                    required></textarea>

                <button type="submit">{{ $t('contact.btn_send') }}</button>
            </form>

            <!-- INFO -->
            <div class="contact-info">
                <div class="info-item">
                    <img src="https://cdn.simpleicons.org/github/08fdd8" alt="GitHub" class="social_icon" />
                    <a href="https://github.com/ArseniiTkachuk" target="_blank">GitHub</a>
                </div>

                <div class="info-item">
                    <img src="https://cdn.simpleicons.org/instagram/08fdd8" alt="Instagram" class="social_icon" />
                    <a href="https://www.instagram.com/_arsen.tkachuk_" target="_blank">Instagram</a>
                </div>

                <div class="info-item">
                    <img src="https://cdn.simpleicons.org/telegram/08fdd8" alt="Telegram" class="social_icon" />
                    <a href="https://t.me/tkachukarsen" target="_blank">Telegram</a>
                </div>

                <div class="info-item">
                    <img src="https://cdn.simpleicons.org/google/08fdd8" alt="Email" class="social_icon" />
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ryunoskyeakutagawa@gmail.com&su=Contact%20from%20portfolio"
                        target="_blank" rel="noopener noreferrer">Gmail</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
    name: 'Contact',
    data() {
        return {
            form: {
                message: '',
            },
        };
    },
    methods: {
        submitForm() {

            // Параметри для EmailJS (тільки повідомлення)
            const templateParams = {
                message: this.form.message
            };

            emailjs.send(
                'service_rashamon2009',   // заміни на свій Service ID
                'template_abbfvkc',  // заміни на свій Template ID
                templateParams,
                'GRWjh_f2prVuQ8Npy'    // заміни на свій Public Key
            )
                .then(
                    () => {
                        alert('Повідомлення надіслано ✅');
                        this.form.message = ''; // очищаємо поле
                    },
                    (error) => {
                        alert('Помилка ❌: ' + error.text);
                    }
                );
        },
    },
};

</script>

<style scoped>
.contact {
    padding: 100px 20px;
    text-align: center;
}

.title {
    font-size: 34px;
    color: #fff;
    margin-bottom: 15px;
}

.title span {
    color: #08fdd8;
}

.subtitle {
    color: #cfe;
    margin-bottom: 70px;
    font-size: 18px;
}

/* layout */
.contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    max-width: 1000px;
    margin: 0 auto;
}

.anonymous-note {
    color: #08fdd8;
    /* акцентний колір */
    font-size: 18px;
    /* трохи більший шрифт */
    font-weight: 600;
    /* напівжирний */
    margin-bottom: 25px;
    /* відстань до форми */
    text-align: center;
    /* по центру */
    letter-spacing: 0.5px;
    /* трішки розширити літери */
}


/* form */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.contact-form input,
.contact-form textarea {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(8, 253, 216, 0.3);
    border-radius: 12px;
    padding: 14px 16px;
    color: #fff;
    font-size: 16px;
    outline: none;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: #08fdd8;
    box-shadow: 0 0 15px rgba(8, 253, 216, 0.4);
}

.contact-form button {
    background: #08fdd8;
    color: #000;
    font-weight: bold;
    padding: 14px;
    border-radius: 12px;
    cursor: pointer;
    border: none;
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.contact-form button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(8, 253, 216, 0.6);
}

/* info */
.contact-info {
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    text-align: left;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 18px;
}

.social_icon {
    width: 28px;
    height: 28px;
}

.info-item i {
    font-size: 28px;
}

.info-item a,
.info-item span {
    color: #dff;
    text-decoration: none;
}

.info-item a:hover {
    color: #08fdd8;
}

/* invert black icons */
.invert-icon {
    filter: invert(1);
}

/* responsive */
@media (max-width: 768px) {
    .contact-wrapper {
        grid-template-columns: 1fr;
    }

    .contact-info {
        text-align: center;
    }
}
</style>
