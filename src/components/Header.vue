<template>
    <div class="conteiner">
        <div class="menu">
            <p @click="$router.push('/')" class="btn" :class="{ active: $route.path === '/' }">
                {{ $t('menu.home') }}
            </p>
            <p @click="$router.push('/about')" class="btn" :class="{ active: $route.path === '/about' }">
                {{ $t('menu.about') }}
            </p>
            <p @click="$router.push('/projects')" class="btn" :class="{ active: $route.path === '/projects' }">
                {{ $t('menu.projects') }}
            </p>
            <p @click="$router.push('/contact')" class="btn" :class="{ active: $route.path === '/contact' }">
                {{ $t('menu.contact') }}
            </p>
        </div>

        <!-- Перемикач мови -->
        <div class="lang-switch">
            <span :class="{ activeLang: currentLang === 'en' }" @click="setLang('en')">EN</span>
            |
            <span :class="{ activeLang: currentLang === 'ua' }" @click="setLang('ua')">UA</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',

    computed: {
        currentLang() {
            return this.$i18n.locale
        },
    },

    methods: {
        setLang(lang) {
            this.$i18n.locale = lang
            localStorage.setItem('lang', lang)
        },
    },
}
</script>

<style scoped>
.conteiner {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 999;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
}

.menu {
    justify-content: center;
    display: flex;
    gap: 30px;
}

.btn {
    color: aqua;
    cursor: pointer;

    position: relative;
    text-decoration: none;
}

.btn:hover {
    color: #ffffff;
    text-shadow:
        0 0 6px rgba(5, 103, 91, 0.8),
        0 0 20px rgba(5, 103, 91, 0.4),
        0 0 30px rgba(5, 103, 91, 0.2);
}

.btn::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -4px;

    width: 0;
    height: 2px;
    background-color: #088c7c;

    transform: translateX(-50%);
    transition: width 0.2s ease;
}

.btn:hover::after {
    width: 100%;
}

.active::after {
    width: 100%;
}

.lang-switch {
    position: absolute;
    right: 30px;
    color: aqua;
    cursor: pointer;
    user-select: none;
}

.lang-switch span {
    opacity: 0.8;
    transition: 0.2s;
}

.lang-switch span:hover {
    opacity: 1;
}

.activeLang {
    opacity: 1;
    text-decoration: underline;
}

/* ===== Tablets & phones ===== */
@media (max-width: 768px) {
    .conteiner {
        height: auto;
        padding: 10px 15px;
    }

    .menu {
        gap: 18px;
    }

    .btn {
        font-size: 14px;
    }

    .lang-switch {
        right: 15px;
        font-size: 13px;
    }
}

/* ===== Phones ===== */
@media (max-width: 480px) {
    .conteiner {
        flex-direction: column;
        gap: 8px;
        padding: 12px 10px;
    }

    .menu {
        gap: 14px;
        flex-wrap: wrap;
    }

    .btn {
        font-size: 13px;
    }

    .btn:hover {
        text-shadow:
            0 0 4px rgba(5, 103, 91, 0.6),
            0 0 10px rgba(5, 103, 91, 0.3);
    }

    .lang-switch {
        position: static;
        font-size: 12px;
    }
}
</style>
