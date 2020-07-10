import React from 'react';

export const MyContext = React.createContext();

export class MyProvider extends React.Component {
  state = {
    language: 'en'
  }

  changeLang = (e) => {
    console.log("Change_Lang: " + e.target.dataset.language);
    this.setState({
      language: e.target.dataset.language
    })
    console.log("state: " + this.state.language);
  }

  render () {
    return (
      <MyContext.Provider value={{
        state: this.state,
        changeLang: this.changeLang
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

