import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
         <strong className="black"> Days I Code</strong>
      </h1>
      <GitHubCalendar
        username="Nishtha191"
        blockSize={15}
        blockMargin={5}
        color="#6484db"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;