import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        menu: {
                    home: 'Home',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact',
        },
        footer: {
            title: {
                part1: 'You can ',
                part2: 'Find',
                part3: ' Me On',
            },
            text: {
                part1: 'Feel free to ',
                part2: 'connect',
                part3: ' with me',
            },
        },
        me: {
            fullName: 'Arsenii Tkachuk',
            talk: "Let's Talk",
            displayText: {
                txt1: 'Unity game developer',
                txt2: 'Website developer',
                txt3: 'Open Source Contributor',
                txt4: 'Software Developer',
            },
        },
        introduce: {
            title: {
                part1: 'LET ME ',
                part2: 'INTRODUCE',
                part3: ' MYSELF',
            },
            text: {
                part1:
                    'I’m a Software Engineer who loves transforming ideas into reliable, \
                scalable products. Over time, I’ve explored several technologies and found \
                my passion in building high-performance systems and intuitive user experiences.',
                part2: {
                    part1: 'I’m proficient in ',
                    and: 'and',
                    part2: '— and I enjoy working across both backend and frontend stacks.',
                },
                part3: {
                    part1: 'Whenever possible, I love building projects with ',
                    part2: ' and modern frameworks like ',
                    part3: ' and other.',
                },
            },
        },
        about: {
            description:
                'I build scalable applications with a focus on code quality, \
            performance, and long-term maintainability. I enjoy working across \
            both frontend and backend technologies.',
            skills: {
                part1: 'My ',
                part2: 'Skillset',
            },
        },
        projects: {
            my: 'My ',
            projects: 'Projects',
            install: 'Install',
        },
        contact: {
            title: {
                part1: 'Get In ',
                part2: 'Touch',
            },
            description: 'Feel free to contact me for collaboration, questions, or just to say hello.',
            placeholder: {
                message: 'Your Message',
            },
            btn_send: 'Send Message',
            anonymous_note: "Send me an anonymous message"
        },
    },
    ua: {
        menu: {
            home: 'Головна',
            about: 'Про мене',
            projects: 'Проєкти',
            contact: 'Контакти',
        },
        footer: {
            title: {
                part1: 'Ви можете ',
                part2: 'Знайти',
                part3: ' Мене Тут',
            },
            text: {
                part1: 'Не соромтеся ',
                part2: "зв'язатися",
                part3: ' зі мною',
            },
        },
        me: {
            fullName: 'Арсеній Ткачук',
            talk: "Зв'язатися зі мною",
            displayText: {
                txt1: 'Розробник ігор на Unity',
                txt2: 'Розробник веб сайтів',
                txt3: 'Автор відкритого коду',
                txt4: 'Розробник програмного забезпечення',
            },
        },
        introduce: {
            title: {
                part1: 'ДОЗВОЛЬТЕ МЕНІ ',
                part2: 'ПРЕДСТАВИТИСЬ',
                part3: '',
            },
            text: {
                part1:
                    'Я програмний індженер, який любить перетворювати ідеї на надійні \
                та масштабовані продукти. З часом я дослідив кілька технологій і знайшов \
                свою пристрасть у створенні високопродуктивних систем та інтуїтивно \
                зрозумілого користувацького інтерфейсу.',
                part2: {
                    part1: 'Я вільно володію ',
                    and: 'та',
                    part2: 'і мені подобається працювати як з backend, так і з frontend стеками.',
                },
                part3: {
                    part1: 'Завжди, коли це можливо, я люблю створювати проекти за допомогою ',
                    part2: ' та сучасних фреймворків, таких як ',
                    part3: ' та інших.',
                },
            },
        },
        about: {
            description:
                'Я розробляю масштабовані застосунки, \
            приділяючи особливу увагу якості коду, швидкодії та \
            довгостроковій підтримці. Мені комфортно працювати як із \
            фронтенд-, так і з бекенд-технологіями.',
            skills: {
                part1: 'Мої ',
                part2: 'Навички',
            },
        },
        projects: {
            my: 'Мої ',
            projects: 'Проєкти',
            install: 'Завантажити',
        },
        contact: {
            title: {
                part1: '',
                part2: "Зв'язатися",
            },
            description:
                'Не соромтеся звертатися до мене для співпраці, питань або просто щоб привітатися.',
            placeholder: {
                message: 'Ваше повідомлення',
            },
            btn_send: 'Надіслати Повідомлення',
            anonymous_note: "Надіслати мені анонімне повідомлення"
        },
    },
}

export const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'en',
    fallbackLocale: 'en',
    messages,
})
