import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma - Mechanical</h4>
                <h5>Vasavi Polytechnic College</h5>
              </div>
              <h3>2018 - 2021</h3>
            </div>
            <p>
              Completed Diploma in Mechanical Engineering with 71.82%. Developed foundational engineering skills and practical knowledge.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech - Mechanical</h4>
                <h5>G. Pulla Reddy Engineering College</h5>
              </div>
              <h3>2022 - 2025</h3>
            </div>
            <p>
              Pursued B.Tech with 8.15 CGPA. Expanded technical knowledge, focusing on analytical skills and systematic problem solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Intern</h4>
                <h5>Tap Academy</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developed full-stack web applications integrating frontend interfaces with Java-based backend services using Spring Boot, JDBC, and MySQL. Built RESTful APIs and executed scalable CRUD operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
