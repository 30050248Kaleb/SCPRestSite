import JSON from "./scps.json";
const SCP = JSON.map(
    (scp) =>
    {
      if(scp.imagesrc!==""){
        return(
          <div key={scp.title}>
            <div className="card">
              <div className="card-header alert-primary">
                <h3>Item #: {scp.title}</h3>
                <span class="badge bg-primary">Object Class:</span> {scp.objectclass}
              </div>
              <div className="card-body">
                <img src={scp.imagesrc} className="img-fluid rounded mx-auto my-3 d-block" style={{"min-width":"33%"}} alt={scp.title} />
                <p className="multilineText"><span class="badge bg-warning text-dark">Special Containment Procedures:</span> {scp.procedures}</p>
                <p className="multilineText"><span class="badge bg-secondary">Description:</span> {scp.description}</p>
                <p className="multilineText"><span class="badge bg-primary">Additional:</span> {scp.additional}</p>
              </div>
            </div>
            <hr />
          </div>
        );
      }
      else
      {
        return(
          <div key={scp.title}>
            <div className="card">
              <div className="card-header alert-primary">
                <h3>Item #: {scp.title}</h3>
                <span class="badge bg-primary">Object Class:</span> {scp.objectclass}
              </div>
              <div className="card-body">
                <p className="multilineText"><span class="badge bg-warning text-dark">Special Containment Procedures:</span> {scp.procedures}</p>
                <p className="multilineText"><span class="badge bg-secondary">Description:</span> {scp.description}</p>
                <p className="multilineText"><span class="badge bg-primary">Additional:</span> {scp.additional}</p>
              </div>
            </div>
            <hr />
          </div>
        );
      }
      
    }
  );
function Data(){

    return(<div>
        {SCP}
    </div>);
}

export default Data;