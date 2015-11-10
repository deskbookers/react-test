import React, {Component, PropTypes} from 'react';
import DocumentMeta from 'react-document-meta';
import * as bugActions from '../../actions/bugs';
import {connect} from 'react-redux';
import BugList from '../../components/Bugs/BugList';
import BugForm from '../../components/Bugs/BugForm';

@connect(
  state => ({
    bugs: state.bugs,
    filterType: state.filterType
  }),
  {...bugActions})

export default
class Bugs extends Component {
  static propTypes = {
    bugs: PropTypes.array,
    filterType: PropTypes.string
  }

  render() {
    const styles = require('./Bugs.scss');
    const {filterType, bugs, addBug} = this.props;
    return (
      <div className="container">
      	<DocumentMeta title="React Redux Example: Bugs"/>
        <div className="row">
          <div className="col-sm-3">
            {/* <BugFilter type={filterType}/> */}
          </div>
          <div className="col-sm-9">
            <BugList bugs={bugs} filterType={filterType}/>
            <BugForm addBug={addBug}/>
          </div>
        </div>
      </div>
    );
  }
}

