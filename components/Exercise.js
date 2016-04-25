import React, { Component, PropTypes } from 'react';
import {
  Thumbnail
} from 'react-bootstrap'
import CSSModules from 'react-css-modules'
import styles from './Exercise.css'

class Exercise extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const {
      id,
      name,
      description,
      image
    } = this.props;

    return (
      <div id={id} styleName="pin">
        <img src={image} />
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    )
  }
}

Exercise.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default CSSModules(Exercise, styles);
