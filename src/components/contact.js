import React from 'react';
import {MyContext} from '../context';

import * as EN from '../translations/en.json';
import * as FR from '../translations/fr.json';
import * as DE from '../translations/de.json';

class Contact extends React.Component {
  render () {
    return (
      <MyContext.Consumer> {(context) => {
        <div className="contact_background"><div className="page">
          <div className="centreHeading">Contact Me!</div>
          <div className="contact_list">
            <div className="contact_elem">email - shane@collinz.ca</div>
            <div className="contact_elem">phone - 1-630-577-7568</div>
            <div className="contact_elem"></div>
          </div>
        </div></div>
      }}

      </MyContext.Consumer>
    );
  }
};

export default Contact;