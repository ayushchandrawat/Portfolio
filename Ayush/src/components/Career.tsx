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
                <h4>10th</h4>
                <h5>Ben's Public H S School Khandwa M.P</h5>
              </div>
              <h3>2022</h3>       

            </div>
            <p>
             Board of Secondary Education M.P • Percentage: 71.2 % <br></br> 2022
            
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma</h4>
                <h5>M.J.P. Govt Polytechnic College, Khandwa — RGPV
</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Diploma in Computer Science & Engineering • CGPA: 7.90 <br></br> 2022-25
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech</h4>
                <h5>Samrat Ashok Technological Institute Vidisha — RGPV (M.P)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
             B.Tech in Computer Science & Engineering Artificial Intelligence and Data Science (AIADS) — Lateral Entry <br></br>
             2025-28
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
