<template>
  <div id="cursor-glow"></div>

  <MyHeader />
  <router-view />
  <MyFooter />
</template>
<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",

  components: {
    MyHeader: Header,
    MyFooter: Footer,
  },

  data() {
    return {

    }
  },

    mounted() {
        const glow = document.getElementById('cursor-glow')

        window.addEventListener('mousemove', (e) => {
            glow.style.left = e.clientX + 'px'
            glow.style.top = e.clientY + 'px'
        })
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

</style>
