import React, { Component } from 'react';
import { appTitle } from '../globals/globals';
import axios from 'axios';
import Loading from '../components/Loading';
import SvgButtonArrow from '../icons/SvgButtonArrow';


export class PageWorkInfo extends Component {
    state = {
        work: {},
        isLoaded: false,
   }

    componentDidMount() {
        let id ;

        switch(this.props.match.params.id) {
            case 'seoul-alleys':
                id = 138;
                break;
            case 'kine-movie':
                id = 155;
                break;
            case 'portfolio':
                id = 161;
                break;
            case 'velou':
                id = 166;
                break;
            default: 
                id = null;
              // code block
        }

        axios.get(`/wp-json/wp/v2/works/${id}`)

        .then(res => this.setState({
            work: res.data,
            isLoaded: true,
        }))
        .catch(err => console.log(err));
    }

    render() {
        const { work, isLoaded } = this.state;

        if ( isLoaded ) {
            // Page title
            document.title= `${work.title.rendered} - ${appTitle}`;
            
            return (
                <div className="page-work-info">
                    {/* Hero Section */}
                    <div className="work-hero">
                        <img src={work.acf.hero_bg_image} alt="Page hero" />
                        <h1>{work.title.rendered}</h1>
                    </div>

                    <div className="marquee">
                        <div className="marquee-inner" aria-hidden="true">
                            <span className="work-keyword">{work.acf.overview[0].project_keyword}</span>
                            <span className="work-keyword">{work.acf.overview[0].project_keyword}</span>
                            <span className="work-keyword">{work.acf.overview[0].project_keyword}</span>
                            <span className="work-keyword">{work.acf.overview[0].project_keyword}</span>
                        </div>
                    </div>
                    {/* Overview */}
                    <div className="work-overview wrapper">
                        <h3>Overview</h3>

                        <div className="col-2">
                            <p>{work.acf.overview[0].overview}</p>
                            <div className="term-button-wrapper">
                                <div className="work-terms">
                                    { work.acf.overview[0].used_skills.map(skill => (
                                    <div className="work-term">{skill.name}</div>
                                ))}
                                </div>
                                <div className="button">
                                    <a href={work.acf.overview[0].view_live} target="_blank" rel="noreferrer">View Live<SvgButtonArrow/></a>
                                </div>
                            </div>
                        </div>
                        <div className="work-process" dangerouslySetInnerHTML={{ __html: work.content.rendered }}></div>
                    </div>
                </div>
            );
        }
        return <Loading/>
    }
}

export default PageWorkInfo;