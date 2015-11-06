import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';

export default
class Experiments extends Component {

  render() {
    const styles = require('./Experiments.scss');
    return (
      <div className={styles.experiments + ' container'}>
        <DocumentMeta title="Experiments"/>

        <div className="row">

          <div className="col-sm-3">
            <div className="list-group">
              <a className="list-group-item" href="">Homepage<br/><small>Active</small></a>
              <a className="list-group-item" href="">Search Filter<br/><small>Succeeded</small></a>
              <a className="list-group-item" href="">Search Filter<br/><small>Cancelled</small></a>
            </div>
          </div>

          <div className="col-sm-9">
            <h1>
              Search Price Filter

              {/* for just created experiments */}
              <div className="btn-group pull-right">
                <a className="btn btn-success">Start experiment</a>
              </div>

              {/* for activated experiments */}
              <div className="btn-group pull-right">
                <a className="btn btn-success">Succeeded</a>
                <a className="btn btn-danger">Failed</a>
              </div>
            </h1>
            <table className="table">
              <tbody>
                <tr>
                  <td>Responsible</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Reviewed by</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Goal</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Hypothese</td>
                  <td></td>
                </tr>
                <tr>
                  <td>KPI</td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <div className="well">
                      <div className="btn-group">
                        <a className="btn btn-default btn-sm" href="">+ Add column</a>
                        <a className="btn btn-default btn-sm" href="">+ Add row</a>
                      </div>
                      <table className="table">
                        <thead>
                          <tr>
                            <td></td>
                            <td>22-10-2015</td>
                            <td>09-11-2015</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>A: unique views</td>
                            <td>413</td>
                            <td>516</td>
                          </tr>
                          <tr>
                            <td>A: unique views</td>
                            <td>413</td>
                            <td>516</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Other metrics</td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <div className="well">
                      <div className="btn-group">
                        <a className="btn btn-default btn-sm" href="">+ Add column</a>
                        <a className="btn btn-default btn-sm" href="">+ Add row</a>
                      </div>
                      <table className="table">
                        <thead>
                          <tr>
                            <td></td>
                            <td>22-10-2015</td>
                            <td>09-11-2015</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>A: unique views</td>
                            <td>413</td>
                            <td>516</td>
                          </tr>
                          <tr>
                            <td>A: unique views</td>
                            <td>413</td>
                            <td>516</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Data</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Start date</td>
                  <td></td>
                </tr>
                <tr>
                  <td>End date</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Total time</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Total &euro;</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Conclusion</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Next action</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

