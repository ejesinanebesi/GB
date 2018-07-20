import React from 'react';
import {Link} from 'react-router';

export default class Menu extends React.Component {

    constructor(){
        super(...arguments);
        this.state = {
            /*menu: [],*/
            title: 'Блог',
            focused: 1
        };
    }

    /*componentWillMount(){
        let _this = this;
        let xhr = new XMLHttpRequest();
        xhr.open( 'GET', './json/menu22.json', true);
        xhr.send();

        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) return;

            if (xhr.status != 200) {
                console.log('JSON: Error', xhr.status, xhr.statusText);
            } else {
                let getMenu = JSON.parse(xhr.responseText);
                _this.setState({
                    menu: getMenu.itemsMenu
                });
                console.log('JSON: Good', xhr.status, xhr.statusText);
            }
        };

    }*/

    clickMenu(index, title) {
        this.setState({
            focused: index,
            title: title
        });
    }

    render() {
        let items = this.props.items.map((item, index) => {
            let style = '';
            if (this.state.focused == index) {
                style='active';
            }
            return (
                <li role="presentation" key={index} className={style} onClick={this.clickMenu.bind(this,index,item.title)}>
                    <Link to={item.link}>{item.title}</Link>
                </li>
            );
        });

        return (
            <div>
                {this.props.children}
                <div className="page-header">
                    <h1>
                        {this.state.title}
                    </h1>
                </div>
                <ul className="nav nav-pills">
                    {items}
                </ul>
                <hr />
            </div>
        );
    }
}