import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title-{id}</span>
          <p>
            Multiple models are in play on any large project. Yet when code
            based on distinct models is combined, software becomes buggy,
            unreliable, and difficult to understand. Communication among team
            members becomes confusing. It is often unclear in what context a
            model should not be applied.
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by the Net Post</div>
          <div>2nd September,2am</div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
