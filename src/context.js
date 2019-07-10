import React from 'react';

export const MyContext = React.createContext();

export class MyProvider extends React.Component {
  state = {
    language: 'en'
  }

  changeLang = (e) => {
    this.setState({
      language: e.target.dataset.language
    })
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

