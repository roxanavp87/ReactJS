import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import NewSingle from './NewSingle.js';
import Grid from '@material-ui/core/Grid';
import './News.css';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount() {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d28743d2ace349b78cc457266796cbcb';
        fetch(url)
         .then(response => {
             return response.json();
         })
         .then(data => {
            //  console.log(data);
             this.setState({news: data.articles});
         })
         .catch( error => console.log(error));
    }

    renderItems() {
        return this.state.news.map((item) => (
                <NewSingle key={item.url} item={item} />
        ));
    }

    render() {
        return (
            <div className='news-conatiner'>
                {/* <Button variant="contained" color="primary">
                Hello user!</Button> */}

                {this.renderItems()}
                
            </div>
        )
    }
}

export default News;