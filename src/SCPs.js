import { useEffect } from "react";
import { useState } from "react";

function SCPs()
{
  function LoadSCPs()
    {
      var data = null;
  
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
  
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            const scpData = JSON.parse(this.responseText);
            console.log(scpData);
            setState(scpData);
        }
      });
  
      xhr.open("GET", "https://project-c7cb.restdb.io/rest/scps-new");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("x-apikey", "628ae5af4cca5010d1293f3a");
      xhr.setRequestHeader("cache-control", "no-cache");
  
      xhr.send(data);
    }

    const [currentState, setState] = useState([]);

    useEffect(
        () => {
            LoadSCPs();
        }, [currentState]
    );

    return(
    <div>
      <div className="card card-body bg-dark text-light rounded my-3">
        <h3>Featured SCP Entries</h3>
        <p>Click on an SCP entry below to expand the contents.</p>
      </div>
        {
          currentState && currentState.map(
            scp =>
            <div key={scp.title}>
              <div className="card border-0 shadow">
                <div className="card-header bg-secondary text-light" type="button" data-bs-toggle="collapse" data-bs-target={("#"+scp.title)} aria-expanded="false" aria-controls={("#"+scp.title)}>
                  <h3>Item #: {scp.title}</h3>
                  <span class="badge bg-primary">Object Class:</span> {scp.objectclass}
                </div>
                <div className="collapse" id={scp.title}>
                  <div className="card-body bg-dark text-light">
                    <img src={scp.imagesrc} className="img-fluid rounded mx-auto my-3 d-block" style={{"min-width":"33%"}} alt={scp.title} />
                    <p className="multilineText"><span class="badge bg-warning text-dark">Special Containment Procedures:</span> {scp.procedures}</p>
                    <hr />
                    <p className="multilineText"><span class="badge bg-secondary">Description:</span> {scp.description}</p>
                    <hr />
                    <p className="multilineText"><span class="badge bg-primary">Additional:</span> {scp.additional}</p>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          )
        }
    </div>);
}

export default SCPs;