<template>
    <div class="conteiner">
        <div class="content">
            <h1>
                {{ $t('footer.title.part1') }}<span class="select">{{ $t('footer.title.part2') }}</span>{{
                    $t('footer.title.part3') }}
            </h1>
            <p>
                {{ $t('footer.text.part1') }}<span class="select">{{ $t('footer.text.part2') }}</span>{{
                    $t('footer.text.part3') }}
            </p>
        </div>

        <div class="social">
            <!-- GitHub -->
            <a href="https://github.com/ArseniiTkachuk" class="social_item" target="_blank" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M12 0.297C5.372 0.297 0 5.669 0 12.297c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.263.793-.583 0-.288-.01-1.05-.015-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.082-.73.082-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.304-5.467-1.332-5.467-5.932 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.522.117-3.176 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 0 1 3-.403c1.02.005 2.045.138 3 .403 2.288-1.553 3.294-1.23 3.294-1.23.655 1.654.243 2.873.12 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.815 1.096.815 2.207 0 1.593-.015 2.875-.015 3.266 0 .323.19.7.8.582C20.565 22.092 24 17.592 24 12.297 24 5.669 18.627.297 12 .297z" />
                </svg>
            </a>

            <!-- Telegram -->
            <a href="https://t.me/tkachukarsen" class="social_item" target="_blank" aria-label="Telegram">
                <svg viewBox="0 0 32 32" fill="currentColor">
                    <path
                        d="M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zM23.613 11.119l-2.544 11.988c-0.188 0.85-0.694 1.056-1.4 0.656l-3.875-2.856-1.869 1.8c-0.206 0.206-0.381 0.381-0.781 0.381l0.275-3.944 7.181-6.488c0.313-0.275-0.069-0.431-0.482-0.156l-8.875 5.587-3.825-1.194c-0.831-0.262-0.85-0.831 0.175-1.231l14.944-5.763c0.694-0.25 1.3 0.169 1.075 1.219z" />
                </svg>
            </a>

            <!-- Instagram -->
            <a href="https://www.instagram.com/_arsen.tkachuk_" target="_blank" class="social_item"
                aria-label="Instagram">
                <svg viewBox="0 0 1024 1024" fill="currentColor">
                    <path
                        d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z" />
                </svg>
            </a>
        </div>

        <span class="end">© 2026 Portfolio</span>
    </div>
</template>
<script></script>
<style scoped>
.conteiner {
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.content {
    justify-items: center;
    text-shadow:
        0 0 10px rgba(24, 51, 226, 0.7),
        0 0 50px rgba(24, 51, 226, 0.5),
        0 0 100px rgba(24, 51, 226, 0.2);
}

h1,
p {
    color: azure;
}

.select {
    color: blueviolet;
}

.social {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
}

.social_item {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        background-color 0.3s ease;
}

.social_item svg {
    width: 28px;
    height: 28px;
    fill: #fff;
    transition: fill 0.3s ease;
}

/* Hover ефекти */
.social_item:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(5, 103, 91, 0.6);
    background-color: rgba(5, 103, 91, 0.3);
}

.social_item:hover svg {
    fill: #00ffc3;
}

.end {
    color: #a4a3a3;
}

/* ===== Mobile (phones) ===== */
@media (max-width: 768px) {
    .conteiner {
        padding: 20px 15px;
        text-align: center;
    }

    .content {
        text-shadow:
            0 0 6px rgba(24, 51, 226, 0.6),
            0 0 20px rgba(24, 51, 226, 0.4);
    }

    h1 {
        font-size: 22px;
        line-height: 1.3;
        margin-bottom: 12px;
    }

    p {
        font-size: 14px;
        line-height: 1.6;
    }

    .social {
        gap: 14px;
        margin-top: 20px;
        margin-bottom: 20px;
        flex-wrap: wrap;
    }

    .social_item {
        width: 46px;
        height: 46px;
    }

    .social_item svg {
        width: 22px;
        height: 22px;
    }

    .end {
        font-size: 12px;
    }
}

/* ===== Small phones ===== */
@media (max-width: 480px) {
    h1 {
        font-size: 20px;
    }

    p {
        font-size: 13px;
    }

    .social_item {
        width: 42px;
        height: 42px;
    }

    .social_item svg {
        width: 20px;
        height: 20px;
    }
}
</style>
