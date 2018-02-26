import React, { Component } from 'react';
import './HeroeOverview.css';

class HeroeOverview extends Component {
    render() {
        return (<div className='heroe-overview-container'>
        	<div className = 'heroe-image'>
        		<img class='heroe-overview-img'src={this.props.image} alt={this.props.name} />
        		<div class="centered">
        			<a className='heroe-title-link'href={this.props.link}><h1 className = 'heroe-title'>{this.props.name}</h1></a>
        		</div>
            </div>
            <div class ='heroe-text-container'>
            	<p className='heroe-overview-text'>{this.props.overview}</p>
            	<a href={this.props.link}>More info..</a>
            </div>
        </div>);
    }
}

export default HeroeOverview;