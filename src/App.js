import React from 'react';
import Index from "./components/index";
import './App.css';
import Experience from "./components/Experience";
import Education from './components/Education';
import About from './components/about';
import Projects from './components/Projects';
import { MyProvider, MyContext } from './context';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.myEducation = React.createRef();
        this.myExperience = React.createRef();
        this.myAbout = React.createRef();
        this.myTop = React.createRef();
    }

    scrollToExperience = () => window.scrollTo(0, this.myExperience.current.offsetTop);
    scrollToEducation = () => window.scrollTo(0, this.myEducation.current.offsetTop);
    scrollToAbout = () => window.scrollTo(0, this.myAbout.current.offsetTop);
    scrollToTop = () => window.scrollTo(0, this.myTop.current.offsetTop);

    render() {
        return (
            <MyContext.Consumer>
            {(context) =>(
            <div className="rowC">
            
                <div className="backgroundImg">
                    <div ref={this.myTop}>
                        <Index scrollToExperience={this.scrollToExperience} 
                                scrollToEducation={this.scrollToEducation}
                                scrollToAbout={this.scrollToAbout}/>
                    </div>
                    <div ref={this.myExperience}>
                        <Experience scrollToTop={this.scrollToTop} />
                    </div>
                    <div ref={this.myEducation}>
                        <Education scrollToTop={this.scrollToTop} />
                    </div>
                    <div ref={this.myAbout}>
                        <About scrollToTop={this.scrollToTop} />
                    </div>
                </div>
            </div>
            )}
            </MyContext.Consumer>
        );
    }
}
export default App;