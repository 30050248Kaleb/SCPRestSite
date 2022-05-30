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
  
      xhr.open("GET", "https://project-c7cb.restdb.io/rest/scpitems");
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

    return(<div>
        {
          currentState && currentState.map(
            scp =>
            <div key={scp.title}>
              <div className="card border-dark">
                <div className="card-header alert-primary">
                  <h3>Item #: {scp.title}</h3>
                  <span class="badge bg-primary">Object Class:</span> {scp.objectclass}
                </div>
                <div className="card-body bg-dark text-light">
                  <img src={scp.imagesrc} className="img-fluid rounded mx-auto my-3 d-block" style={{"min-width":"33%"}} alt={scp.title} />
                  <p className="multilineText"><span class="badge bg-warning text-dark">Special Containment Procedures:</span> {scp.procedures}</p>
                  <p className="multilineText"><span class="badge bg-secondary">Description:</span> {scp.description}</p>
                  <p className="multilineText"><span class="badge bg-primary">Additional:</span> {scp.additional}</p>
                </div>
              </div>
              <hr />
            </div>
          )
        }
    </div>);
}

export default SCPs;