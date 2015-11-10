<DocumentMeta title="Bugs"/>

<div className="row">
  
  <div className="col-sm-3">
    {/*FILTER*/}
    <div className="list-group">
      <a className="list-group-item active" href="">All</a>
      <a className="list-group-item" href="">Open</a>
      <a className="list-group-item" href="">Solved</a>
      <a className="list-group-item" href="">Removed</a>
    </div>
    <button className="btn btn-primary">Report new bug</button>
  </div>

  
  <div className="col-sm-9">
    {/*LIST*/}

    {/*FORM*/}
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