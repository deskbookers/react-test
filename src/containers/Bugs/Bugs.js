import React, {Component, PropTypes} from 'react';
import DocumentMeta from 'react-document-meta';
import bugActions from '../../actions/bugs';
import {connect} from 'react-redux';
import BugList from '../../components/Bugs/BugList';

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
    const {filterType, bugs} = this.props;
    return (
      <div className="container">
      	<DocumentMeta title="React Redux Example: Bugs"/>
        <div className="row">
          <div className="col-sm-3">
            {/* <BugFilter type={filterType}/> */}
          </div>
          <div className="col-sm-9">
            <BugList bugs={bugs} filterType={filterType}/>
            {/* <BugForm /> */}
          </div>
        </div>
      </div>
    );
  }
}

