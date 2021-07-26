import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';

export class CallAboutMe extends Component {
    state = {
        about   :[],
        isLoaded: false
    }

    componentDidMount() {
        axios
        .get('/wp-json/wp/v2/pages/?slug=about-me')
        .then(res => 
            this.setState({
            about   : res.data,
            isLoaded: true
        })
        )
        .catch(err => console.log(err));
    }

    render() {
        const { about, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div className="page-about">

                    {/* About page hero section */}
                    <section className="about-hero">
                        <h2 className="align-left">Get to know</h2>
                        <h1>Jihye</h1> 
                        <h2 className="align-right">- a little better</h2>
                    </section>
                    
                    {/* My Mission as a developer */}
                    <section className="about-mission">
                        <div className="wrapper" dangerouslySetInnerHTML={{ __html: about[0].content.rendered }}></div>
                    </section>

                    {/* About Me Contents */}
                    <div className="about-me-wrapper">
                        <div className="about-me creative-journey">
                            <img src={about[0].acf.my_creative_journey[0].section_thumbnail} alt="Creative wall" />
                            <div className="about-me-content">
                                <h3>{about[0].acf.my_creative_journey[0].section_heading}</h3>
                                <p>{about[0].acf.my_creative_journey[0].section_content}</p>
                            </div>
                        </div>

                        <div className="about-me tech-community">
                            <img src={about[0].acf.tech_community[0].section_thumbnail} alt="Creative wall" />
                            <div className="about-me-content">
                                <h3>{about[0].acf.tech_community[0].section_heading}</h3>
                                <p>{about[0].acf.tech_community[0].section_content}</p>
                            </div>
                        </div>

                        <div className="about-me my-free-time">
                            <img src={about[0].acf.my_free_time[0].section_thumbnail} alt="Creative wall" />
                            <div className="about-me-content">
                                <h3>{about[0].acf.my_free_time[0].section_heading}</h3>
                                <p>{about[0].acf.my_free_time[0].section_content}</p>
                            </div>
                        </div>
                    </div>

                </div>
            );
        }

        return <Loading />
    }
}

export default CallAboutMe;
