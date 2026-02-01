<template>
  <section class="projects-page">
    <h2 class="title">
      {{ $t('projects.my') }}<span>{{ $t('projects.projects') }}</span>
    </h2>

    <div class="projects-grid">
      <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
    </div>
  </section>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  name: 'Projects',
  components: { ProjectCard },
  data() {
    return {
      projects: [
        {
          name: 'Portfolio Website',
          description: {
            en: 'Portfolio is a website that presents information \
                        about me as a developer. The site showcases my skills, \
                        completed projects, and a brief overview of my experience. \
                        It also includes a contact section that makes it easy to get \
                        in touch with me for collaboration or new opportunities.',

            ua: 'Portfolio — це вебсайт, що представляє інформацію \
                        про мене як розробника. На сайті зібрані мої навички, \
                        реалізовані проєкти та коротка інформація про мій досвід. \
                        Також доступний розділ контактів, де можна легко зв’язатися \
                        зі мною для співпраці або обговорення ідей.',
          },
          images: Object.values(
            import.meta.glob('@/assets/photo/projects/prj1/*.png', {
              eager: true,
              import: 'default',
            }),
          ),
          technologies: [
            { icon: 'devicon-vuejs-plain colored' },
            { icon: 'devicon-css3-plain colored' },
            { icon: 'devicon-html5-plain colored' },
            { icon: 'devicon-javascript-plain colored' },
          ],
          github: 'https://github.com/ArseniiTkachuk/Portfolio',
          demo: 'https://arseniitkachuk.github.io/Portfolio',
        },
        {
          name: 'Testly',
          description: {
            en: 'This web platform allows teachers to create \
                        quizzes and receive unique links and codes for each \
                        test, which they can share with students. Students \
                        can take quizzes without registering, using either \
                        the provided link or entering the test code on the \
                        site. All answers and results are visible only to \
                        the test author, enabling teachers to easily track \
                        each student’s performance. The intuitive interface \
                        and modern design make both creating and taking quizzes \
                        simple and convenient.',

            ua: 'Цей веб-сайт дозволяє вчителям створювати \
                        тести, отримувати для них унікальні посилання та коди, \
                        і відправляти їх учням. Учні можуть проходити тести без \
                        реєстрації, використовуючи посилання або код тесту на сайті. \
                        Всі відповіді та результати проходження доступні лише автору \
                        тесту, що дозволяє вчителям легко перевіряти знання кожного \
                        учня. Інтуїтивний інтерфейс і сучасний дизайн роблять процес \
                        створення та проходження тестів простим і зручним.',
          },
          images: Object.values(
            import.meta.glob('@/assets/photo/projects/prj2/*.png', {
              eager: true,
              import: 'default',
            }),
          ),
          technologies: [
            { icon: 'devicon-vuejs-plain colored' },
            { icon: 'devicon-css3-plain colored' },
            { icon: 'devicon-html5-plain colored' },
            { icon: 'devicon-javascript-plain colored' },
            { icon: 'devicon-nodejs-plain colored' },
            { icon: 'devicon-express-original colored', dark: true },
            { icon: 'devicon-mongodb-plain colored' },
          ],
          github: 'https://github.com/ArseniiTkachuk/TichProject',
          demo: 'https://arseniitkachuk.github.io/TichFrontendHost',
        },
        {
          name: 'Casual Mobile Game',
          description: {
            en: 'Casual Mobile Game is a small mobile game \
                        made with Unity, featuring simple yet engaging \
                        gameplay. Players navigate through various levels \
                        while enjoying vibrant visuals and immersive music. \
                        Perfect for quick gaming sessions on the go.',

            ua: 'Casual Mobile Game – це невелика мобільна \
                        гра на Unity з простим і захоплюючим геймплеєм. \
                        Гравець проходить різні рівні, насолоджуючись яскравим \
                        дизайном та атмосферною музикою. Ідеально підходить для \
                        коротких ігор на ходу.',
          },
          images: Object.values(
            import.meta.glob('@/assets/photo/projects/prj3/*.png', {
              eager: true,
              import: 'default',
            }),
          ),
          technologies: [
            { icon: 'devicon-unity-plain colored', dark: true },
            { icon: 'devicon-csharp-plain colored' },
          ],
          github: 'https://github.com/ArseniiTkachuk/CasualGame',
          file: '/files/casual.apk',
        },
        {
          name: 'Python Mario Game',
          description: {
            en: 'Python Mario Game is a 2D game built \
                        with Python and Pygame, where the player controls \
                        a hero who runs, jumps, and shoots at ghost enemies. \
                        Players can customize the environment and types of \
                        enemies in the settings, making each playthrough unique \
                        and engaging. The game combines classic platforming with \
                        action elements and level customization.',

            ua: 'Python Mario Game – це 2D гра на Python \
                        з Pygame, де гравець керує героєм, який бігає, стрибає \
                        та стріляє по привидам-противникам. Гравець може змінювати \
                        місцевість та тип ворогів у налаштуваннях, роблячи гру \
                        різноманітною та цікавою. Гра поєднує класичний платформер \
                        з елементами екшену та кастомізації рівнів.',
          },
          images: Object.values(
            import.meta.glob('@/assets/photo/projects/prj4/*.png', {
              eager: true,
              import: 'default',
            }),
          ),
          technologies: [{ icon: 'devicon-python-plain colored' }],
          github: 'https://github.com/ArseniiTkachuk/Mario',
          file: '/files/mario.exe',
        },
        {
          name: 'Raner',
          description: {
            en: 'Raner is a 3D endless runner game where the player \
                        controls a character, avoids obstacles, and aims to survive \
                        for as long as possible. The game features a skin shop system \
                        that allows players to unlock and customize the character’s \
                        appearance. The project focuses on dynamic gameplay, intuitive \
                        controls, and scalability for adding new mechanics and content.',

            ua: 'Raner — це 3D безкінечний ранер-гра, у якій гравець \
                        керує персонажем, уникає перешкод та намагається протриматися \
                        якомога довше. У грі реалізована механіка магазину скінів, \
                        що дозволяє відкривати та змінювати зовнішній вигляд персонажа. \
                        Проєкт орієнтований на динамічний геймплей, інтуїтивне керування \
                        та можливість масштабування з новими механіками й контентом.',
          },
          images: Object.values(
            import.meta.glob('@/assets/photo/projects/prj5/*.png', {
              eager: true,
              import: 'default',
            }),
          ),
          technologies: [
            { icon: 'devicon-unity-plain colored', dark: true },
            { icon: 'devicon-csharp-plain colored' },
          ],
          github: 'https://github.com/ArseniiTkachuk/3DRaner',
          file: '/files/raner.apk',
        },
        {
          name: 'New Years 2026',
          description: {
            en: 'New Years 2026 is a festive greeting website designed to spread \
                        holiday spirit and warm emotions. The site features animated elements, \
                        atmospheric design, and a welcoming message that captures the magic \
                        of the New Year 2026. The project focuses on simplicity, visual appeal, \
                        and creating a positive experience for every visitor.',

            ua: 'New Years 2026 — це святковий вебсайт-привітання, створений \
                        для того, щоб подарувати новорічний настрій та теплі емоції. \
                        Сайт містить анімовані елементи, атмосферний дизайн і привітальний \
                        текст, що передає магію Нового 2026 року. Проєкт орієнтований на \
                        простоту, візуальну привабливість і позитивні враження для кожного \
                        відвідувача.',
          },
          images: Object.values(
            import.meta.glob('@/assets/photo/projects/prj6/*.png', {
              eager: true,
              import: 'default',
            }),
          ),
          technologies: [
            { icon: 'devicon-html5-plain colored' },
            { icon: 'devicon-css3-plain colored' },
          ],
          github: 'https://github.com/ArseniiTkachuk/new-year-for-programmers',
          demo: 'https://arseniitkachuk.github.io/new-year-for-programmers',
        },
        {
          name: 'Python Tanks for 2 player Game',
          description: {
            en: 'Tanks is a 2D two-player game written in Python, where \
            players compete against each other by controlling tanks on a \
            single computer. Each player can move around the game field, \
            maneuver, and engage in tank battles against the opponent. The \
            project focuses on local multiplayer gameplay, dynamic action, \
            and competitive interaction between two players.',

            ua: 'Tanks — це 2D гра для двох гравців, написана на Python, у якій \
            гравці змагаються між собою, керуючи танками з одного комп’ютера. \
            Кожен гравець може пересуватися по ігровому полю, маневрувати та вести \
            бій проти суперника.Проєкт зосереджений на локальному мультиплеєрі, \
            динамічному геймплеї та змагальній взаємодії між двома гравцями.',
          },
          images: Object.values(
            import.meta.glob('@/assets/photo/projects/prj7/*.png', {
              eager: true,
              import: 'default',
            }),
          ),
          technologies: [{ icon: 'devicon-python-plain colored' }],
          github: 'https://github.com/ArseniiTkachuk/Tanks',
        },
      ],
    }
  },
}
</script>

<style scoped>
.projects-page {
  padding: 80px 20px;
  text-align: center;
}

.title {
  font-size: 34px;
  color: #fff;
  margin-bottom: 50px;
}

.title span {
  color: #08fdd8;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: auto;
}
</style>
