<template>
    <div id="cursor-glow"></div>

    <div class="conteiner">
        <div class="avatar-wrapper">
            <img src="@/assets/photo/image.png" class="avatar" />
        </div>

        <h1 class="name">{{ $t('me.fullName') }}</h1>

        <h1 class="hero-text">{{ displayText }}|</h1>

        <button @click="$router.push('/contact')" class="btn_talk">{{ $t('me.talk') }}</button>
    </div>
</template>
<script>
export default {
    name: 'Me',

    data() {
        return {
            displayText: '',
            textIndex: 0,
            charIndex: 0,
            typing: true,
            typeSpeed: 100,
            eraseSpeed: 50,
            delayBetween: 1500,
            timeoutId: null,
        }
    },

    computed: {
        texts() {
            return [
                this.$t('me.displayText.txt1'),
                this.$t('me.displayText.txt2'),
                this.$t('me.displayText.txt3'),
                this.$t('me.displayText.txt4'),
            ]
        },
    },

    watch: {
        // слідкуємо за зміною мови
        '$i18n.locale'() {
            this.resetTyping()
        },
    },

    mounted() {
        const glow = document.getElementById('cursor-glow')

        window.addEventListener('mousemove', (e) => {
            glow.style.left = e.clientX + 'px'
            glow.style.top = e.clientY + 'px'
        })

        this.type()
    },

    beforeUnmount() {
        clearTimeout(this.timeoutId)
    },

    methods: {
        resetTyping() {
            clearTimeout(this.timeoutId)
            this.displayText = ''
            this.textIndex = 0
            this.charIndex = 0
            this.typing = true
            this.type()
        },

        type() {
            const currentText = this.texts[this.textIndex]

            if (this.typing) {
                this.displayText += currentText[this.charIndex] || ''
                this.charIndex++

                if (this.charIndex < currentText.length) {
                    this.timeoutId = setTimeout(this.type, this.typeSpeed)
                } else {
                    this.typing = false
                    this.timeoutId = setTimeout(this.type, this.delayBetween)
                }
            } else {
                this.displayText = this.displayText.slice(0, -1)

                if (this.displayText.length > 0) {
                    this.timeoutId = setTimeout(this.type, this.eraseSpeed)
                } else {
                    this.textIndex = (this.textIndex + 1) % this.texts.length
                    this.charIndex = 0
                    this.typing = true
                    this.timeoutId = setTimeout(this.type, this.typeSpeed)
                }
            }
        },
    },
}
</script>

<style scoped>
#cursor-glow {
    position: fixed;
    width: 500px;
    height: 500px;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 9999;

    background: radial-gradient(circle at center,
            rgba(3, 255, 226, 0.1) 0%,
            rgba(0, 255, 225, 0) 75%);
}

.conteiner {
    padding: 10vh;
    text-align: center;
}

.avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    transition: transform 0.3s ease;

    border: 3px solid #9d0c94;
    box-shadow:
        0 0 10px rgba(5, 103, 91, 0.7),
        0 0 50px rgba(5, 103, 91, 0.5),
        0 0 100px rgba(5, 103, 91, 0.3);
}

.name {
    margin-top: 10vh;
    color: aqua;
    font: 3em sans-serif;
    text-shadow:
        0 0 10px rgba(24, 226, 203, 0.7),
        0 0 50px rgba(24, 226, 203, 0.5),
        0 0 100px rgba(24, 226, 203, 0.2);
}

.hero-text {
    font-size: 2rem;
    font-weight: bold;
    color: rgb(157, 12, 148);
    text-shadow:
        0 0 10px rgba(157, 12, 148, 0.7),
        0 0 50px rgba(157, 12, 148, 0.5),
        0 0 100px rgba(157, 12, 148, 0.2);
}

.btn_talk {
    padding: 12px 28px;
    font-size: 1.1rem;
    font-weight: bold;
    color: #fff;
    background-color: #9d0c94;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition:
        background-color 0.3s ease,
        transform 0.2s ease;
}

.btn_talk:hover {
    background-color: #bb03af;
    transform: scale(1.05);
}

@media (max-width: 768px) {
    .conteiner {
        padding: 5vh;
    }

    #cursor-glow {
        display: none;
    }

    .avatar {
        width: 130px;
        height: 130px;
    }

    .name {
        margin: 5vh;
        font: 1.5em sans-serif;
    }

    .hero-text {
        font-size: 1rem;
    }
}
</style>
