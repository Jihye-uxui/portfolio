import React, { Component } from 'react';
import WorkItem from './WorkItem';
import axios from 'axios';
import Loading from './Loading';

export class Works extends Component {
    state = {
        works   :[],
        isLoaded: false
    }

    componentDidMount() {
        axios
        .get('/wp-json/wp/v2/works')
        .then(res => 
            this.setState({
            works   : res.data,
            isLoaded: true
        })
        )
        .catch(err => console.log(err));
    }

    render() {
        const { works, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div className="wrapper">
                    { works.map(work => (
                        <WorkItem key={work.id} work={work} />
                    ))}
                </div>
            );
        }

        return <Loading />
    }
}

export default Works;
