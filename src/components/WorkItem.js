import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import SvgButtonArrow from '../icons/SvgButtonArrow';

export class WorkItem extends Component {
    state = {
        imgUrl  : '',
        categoriesInfo : [],
        isLoaded: false
    }

    static propTypes = {
        work: PropTypes.object.isRequired
    }

    componentDidMount() {
        const { featured_media } = this.props.work;
        const getImageUrl = axios.get(`/wp-json/wp/v2/media/${featured_media}`);
        const getCategoryInfo = axios.get('/wp-json/wp/v2/work_category') 

        Promise.all([getImageUrl, getCategoryInfo]).then(res => {
            this.setState({
                imgUrl  : res[0].data.media_details.sizes.full.source_url,
                categoriesInfo: res[1].data,
                isLoaded: true
            });
        });
    }

    render() {
        const { slug, title, excerpt } = this.props.work;
        const { imgUrl, isLoaded, categoriesInfo } = this.state;
        console.log(categoriesInfo[0]);


        if ( isLoaded ) {
            return (
                <section className="work-list">
                    {/* Project Thumbnail */}
                    <div className="work-thumbnail">
                        <Link to={`/work/${slug}`}>
                            <img src={imgUrl} alt={title.rendered} />
                        </Link>
                    </div>

                    {/* Project Summary */}
                    <div className="work-information">
                        <Link to={`/work/${slug}`}>
                            <h2>{ title.rendered }</h2>
                        </Link>

                        <div className="work-summary" dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
                        
                        {/* Project Information */}
                        <div className="button">
                            <Link to={`/work/${slug}`}>See Details<SvgButtonArrow/></Link>
                        </div>
                    </div>
                </section>
            );
        }
        return null;
    }
}

export default WorkItem
