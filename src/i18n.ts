import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        lng: "ru",
        fallbackLng: "en",
        interpolation: {
        escapeValue: false,
        },
        backend: {
        loadPath: '/nohello-react/locales/{{lng}}/{{ns}}.json',
        },
        resources:{
            ru: {
                translation: {
                    title: 'Русский',
                    short_description: 'Пожалуйста, не начинайте разговор в чате с одного «привет». Сообщение без конткеста может заставить собеседника ждать и чувствовать себя немного расстроенным. Вместо этого проявите инициативу и включите свой вопрос или просьбу прямо в первое сообщение! *',
                    instead: 'Вместо этого',
                    try_use: 'Попробуйте использовать',
                    find_more: 'Узнать больше',
                    hello: 'Привет',
                    have_a_minute_q: 'Есть минутка?',
                    yes: 'Да',
                    meeting_time_q: 'Во сколько у нас сегодня собрание по поводу дальнейших планов?',
                    meeting_time: 'В 16:30',
                    long_hello: 'Привет! У меня есть несколько вопросов по текущей задаче, предлагаю организовать видеовстречу завтра. Скажи во сколько тебе будет удобно, я все подготовлю и пришлю тебе ссылку!',
                    long_answer: 'Привет! Давай в 12:15, спасибо!',
                    importance_q: 'Почему это важно?',
                    first_paragraph: 'Представьте, что вы позвонили кому-то по телефону, поздоровались и поставили его на удержание...',
                    second_paragraph: 'Вы пытаетесь быть вежливым и не сразу переходите к просьбе, как если бы вы делали это лично или по телефону. Но чат не является ни тем, ни другим. Печатать гораздо медленнее, чем говорить. Вместо того, чтобы быть вежливым, вы просто заставляете собеседника ждать, пока вы сформулируете свой вопрос, а это приводит к потере продуктивности.',
                    third_paragraph: 'Если вы считаете, что просто сказать "Привет" и задать вопрос - это немного грубовато, вы все равно можете предварить свое сообщение таким количеством любезностей, какое сочтете нужным.',
                    fourth_paragraph: 'Кажется банальным, но описание своего вопроса до получения отклика от собеседника, делает возможным асинхронное общение. Если собеседник в отъезде, и вы уходите до его возвращения, он все равно сможет ответить на ваш вопрос, вместо того, чтобы просто смотреть на "Привет" и гадать, что вы хотели.',
                    fifth_paragraph: 'Когда общение идет правильно - всем хорошо!',
                    more_examples: 'Еще несколько примеров',
                    wrong_ex_1: 'Привет, на связи?',
                    wrong_ex_2: 'Привет, Соня. Есть небольшой вопрос',
                    wrong_ex_3: 'Есть минутка?',
                    wrong_ex_4: 'тут?',
                    true_ex_1: 'Привет, как дела? Не подскажешь, к какому сроку это надо будет сделать?',
                    true_ex_2: 'Привет! Надеюсь, у тебя все хорошо. Мне нужно обсудить следующий релиз, когда у тебя будет минутка :)',
                    true_ex_3: 'Хай, если не занят, не мог бы ты обновить инструкцию по деплою?',
                    generator: 'Сгенерируйте нужное сообщение',
                    generator_description: 'Не всегда есть возможность думать над тем, как описать все кратко. Введите тему, о которой будет сообщение или вопросы, о которых нужно узнать в поле ниже, и получите готовое сообщение за несколько секунд',
                    input_question: 'Введите тему или ключевые вопросы сообщения',
                    generate: 'Генерировать',
                    clear: 'Очистить',
                    loading: 'Генерируем... Это займет несколько секунд',
                    error: 'Ошибка',
                    your_message: 'Ваше сообщение:',
                    another_variant: 'Другой вариант',
                    copy: 'Скопировать',
                    future_message: 'Введите запрос в поле выше, ответ будет в этом окне',
                    about: '* Это шутливые рекомендации (но в каждой шутке…), поэтому, пожалуйста, не злитесь на того, кто отправил Вас сюда. Если Вы увидите URL этого сайта в чьем-то статусе/био, будьте готовы к тому, что Вас проигнорируют, если вы напишите в сообщении только "Привет!". Основано на nohello.com',
                    github_page: 'Страница проекта на',
                    language: 'Язык',
                    copied: 'Cкопировано!'


                }
            },
            en: {
                translation: {
                    title: 'English',
                    short_description: "Please don't start a chat conversation with just 'hello'. A message without context can leave the other person waiting and feeling a little frustrated. Instead, be proactive and include your question or request right in the first message! *",
                    instead: 'Instead of this',
                    try_use: 'Try using',
                    find_more: 'Learn more',
                    hello: 'Hi',
                    have_a_minute_q: 'Have a minute?',
                    yes: 'Yes',
                    meeting_time_q: 'What time do we have a meeting today about future plans?',
                    meeting_time: 'At 4:30 p.m.',
                    long_hello: 'Hello! I have several questions about the current task, I suggest organizing a video meeting tomorrow. Tell me what time is convenient for you, I will prepare everything and send you a link!',
                    long_answer: "Hello! Let's go at 0:15 p.m., thanks!",
                    importance_q: 'Why is it important?',
                    first_paragraph: 'Imagine calling someone on the phone, saying hello and putting them on hold...',
                    second_paragraph: "You try to be polite and don't jump right into the request as you would if you did it in person or over the phone. But chat is neither one nor the other. Typing is much slower than speaking. Instead of being polite, you simply force the other person to wait while you formulate your question, which leads to a loss of productivity.",
                    third_paragraph: "If you think it's a little rude to simply say 'Hi' and ask a question, you can still preface your message with as many pleasantries as you see fit.",
                    fourth_paragraph: "It seems trivial, but describing your question before receiving a response from the interlocutor makes asynchronous communication possible. If the other person is away and you leave before they return, they will still be able to answer your question instead of just looking at 'Hello' and guessing what you wanted.",
                    fifth_paragraph: 'When communication goes well, everyone is happy!',
                    more_examples: 'Few more examples',
                    wrong_ex_1: 'Hello, are you in touch?',
                    wrong_ex_2: 'Hello, Sonya. I have a little question',
                    wrong_ex_3: 'Have a minute?',
                    wrong_ex_4: 'Are you here?',
                    true_ex_1: 'Hi, how are you? Can you tell me by what time this will need to be done?',
                    true_ex_2: 'Hello! Hope you are fine. I need to discuss the next release when you have a minute :)',
                    true_ex_3: "Hey, if you're not busy, could you update the deployment instructions?",
                    generator: 'Generate the message',
                    generator_description: 'It is not always possible to think about how to describe everything briefly. Enter the topic that the message will be about or the questions you want to know about in the field below and receive a ready-made message in a few seconds',
                    input_question: 'Type the subject or key points of the message',
                    generate: 'Generate',
                    clear: 'Delete',
                    loading: 'Generating... It will take a few seconds',
                    error: 'error',
                    your_message: 'Your message:',
                    another_variant: 'Another variant',
                    copy: 'Copy',
                    future_message: 'Enter your request in the field above, the answer will be in this window',
                    about: "* These are humorous recommendations (but in every joke...), so please don't be mad at whoever sent you here. If you see the URL of this site in someone's status/bio, be prepared to be ignored if you only write 'Hi!' in the message. Based on nohello.com",
                    github_page: 'Page on',
                    language: 'Language',
                    copied: 'Copied!'


                }
            },
        },
    });

export default i18n;