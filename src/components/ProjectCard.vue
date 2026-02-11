<template>
    <div class="project-card">
        <!-- Слайдер -->
        <div class="slider">
            <transition name="fade" mode="out-in">
                <img :key="currentImage" :src="project.images[currentImage]" :alt="project.name" class="project-img" />
            </transition>

            <button v-if="project.images.length > 1" class="prev" @click="prevImage">&#10094;</button>
            <button v-if="project.images.length > 1" class="next" @click="nextImage">&#10095;</button>
        </div>

        <div class="project-info">
            <h3 class="project-name">{{ project.name }}</h3>
            <div class="tech-icons">
                <i v-for="tech in project.technologies" :key="tech.name"
                    :class="[tech.icon, { 'invert-icon': tech.dark }]"></i>
            </div>

            <p class="project-desc">{{ project.description?.[$i18n.locale] || '' }}</p>

            <div class="project-links">
                <a v-if="project.demo" :href="project.demo" target="_blank">Demo</a>
                <a v-if="project.github" :href="project.github" target="_blank">GitHub</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        project: { type: Object, required: true },
    },
    data() {
        return {
            currentImage: 0,
            interval: null, // інтервал авто-перелистування
            resumeTimeout: null, // таймаут для повторного запуску
        }
    },
    methods: {
        download(fileUrl) {
            const link = document.createElement('a')
            link.href = fileUrl
            link.download = 'myApp.exe' // ім'я файлу при завантаженні
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        },

        nextImage() {
            this.currentImage = (this.currentImage + 1) % this.project.images.length
            this.pauseAutoSlide()
        },
        prevImage() {
            this.currentImage =
                (this.currentImage - 1 + this.project.images.length) % this.project.images.length
            this.pauseAutoSlide()
        },

        // тимчасово зупиняємо авто і запускаємо таймер на 5 сек
        pauseAutoSlide() {
            clearInterval(this.interval)
            clearTimeout(this.resumeTimeout)

            // через 5 секунд знову стартуємо авто-перелистування
            this.resumeTimeout = setTimeout(() => {
                this.startAutoSlide()
            }, 5000)
        },

        startAutoSlide() {
            if (this.project.images.length > 1) {
                this.interval = setInterval(this.nextImage, 3000)
            }
        },
    },
    mounted() {
        this.startAutoSlide()
    },
    beforeUnmount() {
        clearInterval(this.interval)
        clearTimeout(this.resumeTimeout)
    },
}
</script>

<style scoped>
/* Слайдер */
.slider {
    position: relative;
    width: 100%;
    height: 300px;
    /* фіксована висота */
    overflow: hidden;
}

/* картинка */
.project-img {
    width: 100%;
    height: 100%;
    /* під фіксовану висоту слайдера */
    object-fit: contain;
    /* картинка повністю видно, пропорції зберігаються */
    display: block;
    margin: 0 auto;
    transition: opacity 0.5s ease;
    position: absolute;
    top: 0;
    left: 0;
}

/* Кнопки */
.prev,
.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(8, 253, 216, 0.5);
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 6px;
    color: #000;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

.prev:hover,
.next:hover {
    background: #08fdd8;
    color: #000;
}

/* Fade анімація для transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

/* Карточка */
.project-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 18px;
    overflow: hidden;
    backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    /* вертикально */
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    height: 100%;
    /* щоб flex працював на всю висоту */
}

.project-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 25px rgba(8, 253, 216, 0.4);
}

.project-info {
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    /* щоб кнопки можна було “прилипнути” вниз */
    flex-grow: 1;
    /* дозволяє займати доступний простір */
}

.project-name {
    font-size: 20px;
    color: #08fdd8;
    margin-bottom: 10px;
}

.project-desc {
    font-size: 14px;
    color: #dff;
    margin-bottom: 15px;
}

.tech-icons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 15px;
}

.tech-icons i {
    font-size: 24px;
    transition: transform 0.3s ease;
}

.invert-icon {
    filter: invert(1) brightness(1.2);
}

.tech-icons i:hover {
    transform: scale(1.2);
}

.project-links {
    margin-top: auto;
    display: flex;
    justify-content: center;
    gap: 10px;
}

.project-links a {
    margin: 0 8px;
    padding: 6px 12px;
    border-radius: 8px;
    cursor: pointer;
    background: rgba(8, 253, 216, 0.15);
    color: #08fdd8;
    text-decoration: none;
    font-weight: 500;
    transition:
        background 0.3s ease,
        color 0.3s ease;
}

.project-links a:hover {
    background: #08fdd8;
    color: #000;
}
</style>
