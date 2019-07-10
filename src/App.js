import React from 'react';
import Index from "./components/index";
import './App.css';
import Experience from "./components/Experience";
import Education from './components/Education';
import { MyProvider } from './context';

// import translations
import * as DE from './translations/de.json';
import * as EN from './translations/en.json';
import * as FR from './translations/fr.json';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.myEducation = React.createRef();
        this.myExperience = React.createRef();
        this.currentLang = "en";
    }

    scrollToExperience = () => window.scrollTo(0, this.myExperience.current.offsetTop);
    scrollToEducation = () => window.scrollTo(0, this.myEducation.current.offsetTop);

    activateDE () {this.currentLang = "de"; console.log(this.currentLang);}
    activateFR () {this.currentLang = "fr"; console.log(this.currentLang);}
    activateEN () {this.currentLang = "en"; console.log(this.currentLang);}

    render() {
        return (
            <MyProvider>
            <div className="backgroundImg">
                <Index scrollToExperience={this.scrollToExperience} 
                        scrollToEducation={this.scrollToEducation}/>
                <div ref={this.myExperience}>
                    <Experience />
                </div>
                <div ref={this.myEducation}>
                    <Education />
                </div>
            </div>
            </MyProvider>
        );
    }
}
export default App;