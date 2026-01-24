<template>
    <section class="skillset">
        <section class="about-text">
            <p>
                {{ $t('about.description') }}
            </p>
        </section>

        <h2 class="title">
            {{ $t('about.skills.part1') }}
            <span>{{ $t('about.skills.part2') }}</span>
        </h2>

        <div class="rows">
            <div v-for="(row, rowIndex) in skillRows" :key="rowIndex" class="row" :class="`row-${rowIndex}`">
                <div v-for="skill in row" :key="skill.name" class="skill-card" :style="getHoverStyle(skill)">
                    <i :class="skill.icon"></i>
                    <span class="skill-name">{{ skill.name }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Skillset',

    data() {
        return {
            skillRows: [
                [
                    { name: 'JavaScript', icon: 'devicon-javascript-plain', color: '#f7df1e' },
                    { name: 'Vue.js', icon: 'devicon-vuejs-plain', color: '#47b987' },
                    { name: 'C++', icon: 'devicon-cplusplus-plain', color: '#3378bb' },
                    { name: 'Node.js', icon: 'devicon-nodejs-plain', color: '#468a41' },
                ],
                [
                    { name: 'HTML5', icon: 'devicon-html5-plain', color: '#e34c26' },
                    { name: 'CSS3', icon: 'devicon-css3-plain', color: '#2f60a3' },
                    { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: '#4db33d' },
                    { name: 'Git', icon: 'devicon-git-plain', color: '#f1502f' },
                    { name: 'Python', icon: 'devicon-python-plain', color: '#3776ab' },
                ],
                [
                    { name: 'Unity', icon: 'devicon-unity-plain', color: '#ffffff' },
                    { name: 'C#', icon: 'devicon-csharp-plain', color: '#8c1186' },
                    { name: 'Express', icon: 'devicon-express-original', color: '#ffffff' },
                    { name: 'Postman', icon: 'devicon-postman-plain', color: '#fe6c35' },
                ],
                [
                    { name: 'JSON', icon: 'devicon-json-plain', color: '#fbc02d' },
                    { name: 'Visual Studio', icon: 'devicon-visualstudio-plain', color: '#613494' },
                    { name: 'GitHub', icon: 'devicon-github-plain', color: '#ffffff' },
                    { name: 'C', icon: 'devicon-c-plain', color: '#a9bacd' },
                    { name: 'npm', icon: 'devicon-npm-plain', color: '#cd3e3d' },
                ],
                [
                    { name: 'Bash', icon: 'devicon-bash-plain', color: '#b2f877' },
                    { name: 'VS Code', icon: 'devicon-vscode-plain', color: '#007acc' },
                    { name: 'Railway', icon: 'devicon-railway-plain', color: '#ffffff' },
                    { name: 'Unreal Engine', icon: 'devicon-unrealengine-plain', color: '#ffffff' },
                ],
                [

                    { name: 'Vite', icon: 'devicon-vitejs-plain coro', color: '#ffdd35' },
                    { name: 'Linux', icon: 'devicon-linux-plain', color: '#a9bacd'},
                    { name: 'Arch', icon: 'devicon-archlinux-plain', color: '#4d84b3' },
                    { name: 'Neo Vim', icon: 'devicon-neovim-plain', color: '#5ca446' },
                    { name: 'Vim', icon: 'devicon-vim-plain', color: '#099b39' },
                ],
              [
                    { name: 'Zsh', icon: 'devicon-zsh-plain', color: '#ffffff' },
                    { name: 'Nano', icon: 'devicon-nano-plain', color: '#ffffff' },
                    { name: 'Mark Down', icon: 'devicon-markdown-plain', color: '#b5b5b8' },
                    { name: 'OTHERS', icon: 'devicon-other-plain', color: '#b34' },
              ]
            ],
        }
    },

    methods: {
        getHoverStyle(skill) {
            return {
                '--hover-color': skill.color,
            }
        },
    },
}
</script>

<style scoped>
.about-text {
    max-width: 800px;
    margin: 0 auto 80px;
    font-size: 18px;
    line-height: 1.6;
    color: #dff;
    text-align: center;
}

.skillset {
    padding: 90px 20px;
    text-align: center;
}

.title {
    font-size: 34px;
    margin-bottom: 70px;
    color: #fff;
}

.title span {
    color: #08fdd8;
}

/* rows */
.rows {
    max-width: 1000px;
    margin: 0 auto;
}

.row {
    display: flex;
    justify-content: center;
    margin-bottom: 35px;
}

.row-0 {
    gap: 40px;
}

.row-1 {
    gap: 22px;
    margin-left: 40px;
}

.row-2 {
    gap: 50px;
}

.row-3 {
    gap: 26px;
    margin-left: 35px;
}

.row-4 {
    gap: 46px;
    margin-left: 30px;
}

.row-5 {
    gap: 28px;
    margin-left: 0px;
}


.row-6 {
    gap: 39px;
    margin-left: 35px;
}

/* skill card */
.skill-card {
    width: 140px;
    height: 140px;
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 42px;
    color: #08fdd8;
    transition: all 0.35s ease;
}

.skill-name {
    font-size: 13px;
    letter-spacing: 0.5px;
    color: #dff;
}

.skill-card:hover {
    transform: translateY(-6px) scale(1.08);
    color: var(--hover-color);
    background: color-mix(in srgb, var(--hover-color) 20%, transparent);
    box-shadow: 0 0 30px color-mix(in srgb, var(--hover-color) 60%, transparent);
}

.skill-card:hover .skill-name {
    color: #ffffff;
}

@media (max-width: 768px) {
    .row {
        flex-wrap: wrap;
        gap: 20px !important;
        margin-left: 0 !important;
    }

    .skill-card {
        width: 120px;
        height: 120px;
    }
}
</style>
