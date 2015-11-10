import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as bugActions from '../../actions/bugs';

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
    const {bugs, filterType} = this.props;
    var filteredBugs = bugs ? bugs : [];

    if (filterType){
    	filteredBugs = bugs.filter((bug) => bug.status === filterType);
    }

    return (
    	<div>
			<h1>All bugs ({filteredBugs.length})</h1>
			{filteredBugs && filteredBugs.length > 0 &&
				<div className="list-group">
					{
					filteredBugs.map((bug) => 
						<div className="list-group-item" key={bug.id}>
							<div className="row">
								<div className="col-sm-9">
									<p className="lead">When I {bug.userAction} then {bug.result} (by {bug.user})</p>
									<a href="{bug.onUrl}" target="_blank">{bug.onUrl}</a>
								</div>
								<div className="col-sm-3">
									<div className="btn-group pull-right">
										<button className="btn btn-success" onClick="{closeBug(bug.id)}">Close</button>
										<button className="btn btn-default" onClick="{removeBug(bug.id)}">Remove</button>
									</div>
								</div>
							</div>
						</div>)
					}
				</div>
			}

			{!filteredBugs.length &&
				<p>Well done! No bugs in this list at the moment.</p>
			}
		</div>
    );
  }
}
