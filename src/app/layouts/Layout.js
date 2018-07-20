import React from 'react';

import Menu from '../components/Menu';
//import Main from '../components/Main';
import Modal from '../components/Modal';
import Login from '../components/Login';

export default class Layout extends React.Component {
    render()
    {
        let itemsMenu = [
            {
                title: 'Главная',
                link: '/content',
                class: ''
            },
            {
                title: 'Блог',
                link: '/',
                class: 'active'
            },
            {
                title: 'Контакты',
                link: '/contacts',
                class: ''
            },
            {
                title: 'О нас',
                link: '/about',
                class: ''
            },
            {
                title: 'Комментарии',
                link: '/Comments',
                class: ''
            }
        ];

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <Menu items={itemsMenu} title="Блог" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-6">
                            {this.props.children}
                        </div>
                    </div>
                </div>
               {/* <div className="container">
                    <div className="row">
                        <Main items={itemsMain} />
                    </div>
                </div>*/}
                <div className="container">
                    <div className="row">
                        <div className="col-xs-4" />
                        <div className="col-xs-4">
                            <Login />
                        </div>
                        <div className="col-xs-4" />
                    </div>
                </div>
                <Modal />
            </div>
        );
    }

}
