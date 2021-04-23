import React, { Component } from 'react';
import { iconStyles } from 'styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';


export default class ScrollIcon extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });
    }
    // componentWillUnmount() {
    //     var scrollComponent = this;
    //     document.removeEventListener("scroll", function(e) {
    //         scrollComponent.toggleVisibility();
    //     });
    // }

    toggleVisibility() {
        if (window.pageYOffset > 500) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const { is_visible } = this.state;
        return (
            
            <span className="scrollTop">
                {is_visible && (
                <FontAwesomeIcon
                // icon="spinner" 
                icon={faArrowAltCircleUp}
                size="lg"
                className="top"
                onClick={() => this.scrollToTop()}
                />
                )}
                <style jsx global>{iconStyles}</style>
            </span>
            
        )
    }
}
