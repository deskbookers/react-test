import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';

export default
class Bugs extends Component {

  render() {
    const styles = require('./Bugs.scss');
    return (
      <div className="container">
        <DocumentMeta title="Bugs"/>

        <div className="row">

          <div className="col-sm-3">
            <div className="list-group">
              <a className="list-group-item active" href="">All</a>
              <a className="list-group-item" href="">Open</a>
              <a className="list-group-item" href="">Solved</a>
              <a className="list-group-item" href="">Removed</a>
            </div>
            <button className="btn btn-primary">Report new bug</button>
          </div>

          <div className="col-sm-9">

            <h1>All bugs</h1>

            {/* This part is a list of all the bugs filtered by the filter on the left */}
            <div className="list-group">
              <div className="list-group-item">
                <div className="row">
                  <div className="col-sm-9">
                    <p className={styles.mBottom0 + ' lead'}>When I enter the page then shit doesn't work anymore</p>
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
              <div className="list-group-item">
                <div className="row">
                  <div className="col-sm-9">
                    <p className={styles.mBottom0 + ' lead'}>When I enter the page then shit doesn't work anymore</p>
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
              <div className="list-group-item">
                <div className="row">
                  <div className="col-sm-9">
                    <p className={styles.mBottom0 + ' lead'}>When I enter the page then shit doesn't work anymore</p>
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

            {/* Show this part when having clicked on "report new bug" */}
            <h2>Report new bug</h2>
            <form>
              <div className="form-group">
                <label>When I </label>
                <input className="form-control" type="text" placeholder="What actions did you do?"/>
              </div>
              <div className="form-group">
                <label>then </label>
                <input className="form-control" type="text" placeholder="What happens?"/>
              </div>
              <div className="form-group">
                <label>on </label>
                <input className="form-control" type="text" placeholder="The url"/>
              </div>
              <div className="form-group">
                <label>by </label>
                <input className="form-control" type="text" placeholder="Who are you?"/>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox"/> Yes, I could reproduce this error when trying again
                </label>
              </div>
              <button className="btn btn-success btn-lg" type="submit">Report bug</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

