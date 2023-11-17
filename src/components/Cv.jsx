import React from "react";
import im1 from "../assets/png1.png";

const Cv = () => {
  return (
    <>
      <div className="cv-container">
        <div className="left-con">
          <div className="img-con">
            <img src={im1} width={"100%"} height={"100%"} />
          </div>
          <div className="content">
            <h2>Ahiesha Majeed</h2>
            <div className="line"></div>
            <p>Frontend Developer</p>
          </div>
          <br></br>
          <div className="detail-con">
            <h2>Details:</h2>
            <div className="line"></div>
            <ul>
              <li>
                <span>
                  <b>Address:</b>{" "}
                </span>
                Kharian,Pakistan
              </li>
              <li>
                <span>
                  <b>Email:</b>{" "}
                </span>
                ahiesha515@gmail.com
              </li>
              <li>
                <span>
                  <b>Phone Number:</b>{" "}
                </span>
                03304367404
              </li>
            </ul>
          </div>
          <br></br>
          <div className="skill-con">
            <h2>Skills:</h2>
            <div className="line"></div>
            <ul>
              <li>CSS</li>
              <li>Html</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Django</li>
            </ul>
          </div>
        </div>
        <div className="right-con">
          <br></br>
          <h2>Objectives:</h2>
          <div className="line"></div>
          <br></br>
          <p>
            I am a software developer.I want to manage a simple project and be
            able to contribute to a more complex project as a team member.
          </p>
          <div className="cer-con">
            <h2>Certificates:</h2>
            <ul>
              <li>Model Making</li>
              <li>SNC Training</li>
              <li>EDD Training</li>
              <li>Full Stack Development</li>
            </ul>
            <div className="Edu-con">
              <h2>Education:</h2>
              <ul>
                <li>BSc in Compuer Science</li>
                <li>MSc in Compuer Science</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cv;
