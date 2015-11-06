import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';

export default
class Experiments extends Component {

  render() {
    // const styles = require('./Experiments.scss');
    return (
      <div className="container">
        <h1>Experiments</h1>
        <DocumentMeta title="Experiments"/>
      </div>
    );
  }
}

