import React from 'react';

import Main from '../components/Main';

export default class Content extends React.Component
{
    render()
    {
        let itemsMain = [
            {
                title: 'Что-же такое React',
                link: '#',
                image: './img/ReactTOP.jpg',
                userId: '1',
                userName: 'Олег',
                body: 'React - это библиотека JavaScript, которая используется для создания пользовательского интерфейса. React был создан компанией Facebook, а первый релиз библиотеки увидел свет в марте 2013 года. Текущей версий на данный момент (октябрь 2017 года) является версия React v16.0.\n' +
                '\n' +
                'Первоначально React предназначался для веба, для создания веб-сайтов, однако позже появилась платформа React Native, которая уже предназначалась для мобильных устройств.\n' +
                '\n' +
                'React представляется идеальный инструмент для создания масштабируемых веб-приложений (в данном случае речь идет о фронтенде), особенно в тех ситуациях, когда приложение представляет SPA (одностраничное приложение).\n' +
                '\n' +
                'React относительно прост в освоении, имеет понятный и лаконичный синтаксис.',
            },
            {
                title: 'Виртуальный DOM',
                link: '#',
                image: './img/ReactTOP.jpg',
                userId: '2',
                userName: 'Иван',
                body: 'Вся структура веб-страницы может быть представлена с помощью DOM (Document Object Model)- организация элементов html, которыми мы можем манипулировать, изменять, удалять или добавлять новые. Для взаимодействия с DOM применяется язык JavaScript. Однако когда мы пытаемся манипулировать html-элементами с помощью JavaScript, то мы можем столкнуться со снижением производительности, особенно при изменении большого количества элементов. А операции над элементами могут занять некоторое время, что неизбежно скажется на пользовательском опыте. Однако если бы мы работали из кода js с объектами JavaScript, то операции производились бы быстрее.\n' +
                '\n' +
                'Для решения проблемы производительности как раз и появилась концепция виртуального DOM.\n' +
                '\n' +
                'Виртуальный DOM представляет легковесную копию обычного DOM. И отличительной особенностью React является то, что данная библиотека работает именно с виртуальным DOM, а не обычным.\n' +
                '\n' +
                'Если приложению нужно узнать информацию о состоянии элементов, то происходит обращение к виртуальному DOM.\n' +
                '\n' +
                'Если необходимо изменить элементы веб-страницы, то изменения вначале вносятся в виртуальный DOM. Потом новое состояние виртуального DOM сравнивается с текущим состоянием. И если эти состояния различаются, то React находит минимальное количество манипуляций, которые необходимы до обновления реального DOM до нового состояния и производит их.\n' +
                '\n' +
                'В итоге такая схема взаимодействия с элементами веб-страницы работает гораздо быстрее и эффективнее, чем если бы мы работали из JavaScript с DOM напрямую.',
            },
            {
                title: 'Другие особенности React',
                link: '#',
                image: './img/ReactTOP.jpg',
                userId: '3',
                userName: 'Ольга',
                body: 'Другой отличительной чертой библиотеки является концентрация на компонентах - мы можем создать отдельные компоненты и затем их легко переносить из проекта в проект.\n' +
                '\n' +
                'Еще одна особенность React - использование JSX. JSX представляет комбинацию кода JavaScript и XML и предоставляет простой и интуитивно понятный способ для определения кода визуального интерфейса.\n' +
                '\n' +
                'React развивается как открытый проект, и все сайты библиотеки доступны на https://github.com/facebook/react. Кроме того, при изучении Reacta также будет полезен официальный сайт с документацией - https://reactjs.org/, где можно найти всю информацию по библиотеке.',
            },
        ];

        return <div className="container">
            <div className="row">
                <Main items={itemsMain} />
            </div>
        </div>
    }
}

