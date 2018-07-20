import React from 'react';

export default class Main extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            style: {background: 'blue'}
        }
    }

    render() {
        let items = this.props.items.map((item, index) => {

            let style = this.state.style;

            return (
                <div className="col-md-4" key={index}>
                    <div className="thumbnail" style={style} onClick={() => {
                            this.setState({
                                style: {background: 'rgb(49, 151, 116)'}
                            });
                    }
                    }>
                        <img src={item.image} alt={item.title}/>
                        <div className="caption">
                            <h2>{item.title}</h2>
                            <p className="text-justify">{item.body}</p>
                            <hr/>
                            <p>Автор: {item.userName}</p>
                            <a href={item.link}>Читать полностью</a>
                        </div>
                    </div>
                </div>
            );
        });

        return (
                <div>
                    {items}
                </div>
        );


    }
}