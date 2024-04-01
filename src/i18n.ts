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
                    language: 'Язык: Русский',
                    copied: 'Cкопировано!'


                }
            },
            en: {
                translation: {
                    title: 'English',
                }
            },
        },
    });

export default i18n;