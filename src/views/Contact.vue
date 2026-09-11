<template>
  <section class="contact">
    <div class="contact-container">
      <!-- ЛІВА ЧАСТИНА: Текст та Заклик -->
      <div class="contact-content">
        <h2 class="title">
          {{ $t('contact.title.part1') }}<span>{{ $t('contact.title.part2') }}</span>
        </h2>
        <p class="description">
          {{ $t('contact.description') }}
        </p>

        <!-- Велика кнопка-акцент -->
        <a href="https://t.me/tkachukarsen" target="_blank" class="main-contact-btn">
          <span>{{ $t('contact.let_talk') || "Let's build something together" }}</span>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.003 9.414l-7.071 7.071-1.414-1.414 7.071-7.071H9.003V6h10v10h-2V9.414z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      <!-- ПРАВА ЧАСТИНА: Соціальні мережі -->
      <div class="contact-links">
        <div class="links-grid">
          <a href="https://github.com/ArseniiTkachuk" target="_blank" class="link-card">
            <img src="https://cdn.simpleicons.org/github/08fdd8" alt="GitHub" />
            <div class="link-text">
              <span class="label">GitHub</span>
              <span class="username">@ArseniiTkachuk</span>
            </div>
          </a>

          <a href="https://t.me/tkachukarsen" target="_blank" class="link-card">
            <img src="https://cdn.simpleicons.org/telegram/08fdd8" alt="Telegram" />
            <div class="link-text">
              <span class="label">Telegram</span>
              <span class="username">@tkachukarsen</span>
            </div>
          </a>

          <a href="https://www.instagram.com/_arsen.tkachuk_" target="_blank" class="link-card">
            <img src="https://cdn.simpleicons.org/instagram/08fdd8" alt="Instagram" />
            <div class="link-text">
              <span class="label">Instagram</span>
              <span class="username">@_arsen.tkachuk_</span>
            </div>
          </a>

          <a href="arsenii.tkachuk.2009.06.12@gmail.com" target="_blank" class="link-card">
            <img src="https://cdn.simpleicons.org/google/08fdd8" alt="Email" />
            <div class="link-text">
              <span class="label">Gmail</span>
              <span class="username">arsenii.tkachuk.200...</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 120px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.contact-container {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 80px;
  max-width: 1100px;
  width: 100%;
}

/* Текстовий блок */
.contact-content {
  text-align: left;
}

.title {
  font-size: clamp(40px, 6vw, 64px);
  color: #fff;
  line-height: 1.1;
  margin-bottom: 25px;
}

.title span {
  color: #08fdd8;
  display: block;
}

.description {
  font-size: 18px;
  color: #cfe;
  max-width: 500px;
  line-height: 1.6;
  margin-bottom: 40px;
}

/* Велика кнопка */
.main-contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  padding: 18px 32px;
  background: transparent;
  border: 1px solid #08fdd8;
  color: #08fdd8;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.main-contact-btn svg {
  width: 20px;
  height: 20px;
}

.main-contact-btn:hover {
  background: rgba(8, 253, 216, 0.1);
  box-shadow: 0 0 30px rgba(8, 253, 216, 0.2);
  transform: translateY(-3px);
}

/* Картки посилань */
.contact-links {
  display: flex;
  align-items: center;
}

.links-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.link-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.link-card img {
  width: 32px;
  height: 32px;
}

.link-text {
  display: flex;
  flex-direction: column;
}

.label {
  color: #08fdd8;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.username {
  color: #fff;
  font-size: 16px;
  opacity: 0.8;
}

.link-card:hover {
  background: rgba(8, 253, 216, 0.05);
  border-color: #08fdd8;
  transform: translateX(10px);
}

/* Адаптивність */
@media (max-width: 992px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }

  .contact-content {
    text-align: center;
  }

  .description {
    margin: 0 auto 40px;
  }

  .link-card:hover {
    transform: translateY(-5px);
  }
}
</style>
