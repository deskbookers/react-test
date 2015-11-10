import React, {Component, PropTypes} from 'react';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import bugActions from '../../actions/bugs';
// import {load} from 'redux/modules/info';

@connect(
  state => ({
    bugs: state.bugs,
    filterType: state.filterType
  }),
  {...bugActions})

export default class BugList extends Component {
  static propTypes = {
    bugs: PropTypes.array,
    filterType: PropTypes.string
  }

  render() {
    const {bugs, filterType} = this.props; // eslint-disable-line no-shadow
    return (
    	<div>
			<h1>All bugs</h1>
			<div className="list-group">
				<div className="list-group-item">
					<div className="row">
						<div className="col-sm-9">
							<p className="lead">When I enter the page then shit doesn't work anymore</p>
							<a href="" target="_blank">https://www.deskbookers.com/nl-nl/s-hertogenbosch/hnk-den-bosch/workplace/19592</a>
						</div>
						<div className="col-sm-3">
							<div className="btn-group pull-right">
								<button className="btn btn-success">Solve</button>
								<button className="btn btn-default">Remove</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}
