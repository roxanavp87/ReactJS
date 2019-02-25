import React, {Component} from 'react';
import {render} from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// const name = 'Roxana';
// const element = < h1 > Hello { name } < /h1>
{/* ReactDOM.render(
    element,
    document.getElementById('root')
); */}

class Book extends Component {
    render() {
        return (
            <div>
                <p>Title is {this.props.title}</p>
                <p>Author is {this.props.author}</p>
            </div>
        )
    }
}

render(<Book title="The Selection" author="Kiera Cass" />, document.getElementById('root')); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();