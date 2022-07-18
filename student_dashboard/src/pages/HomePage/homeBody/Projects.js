import "../homePage.css";
import blob from "../../../app/assets/images/blob.svg";
import dash2 from "../../../app/assets/images/dash2.png";
import Phone3 from "../../../app/assets/images/Phone3.png";
import Phone4 from "../../../app/assets/images/Phone4.png";
const Projects = () => {
  return (
    <div className="Projects overflow-hidden px-4 bg-light">
      <div className="mt-5 ">
        <div className=" w-100 text-center">
          <h4>Our Projects</h4>
          <h2>What Makes Our Link Building Agency Different?</h2>
        </div>
        <div className="row gx-0 gy-0">
          <div className="col-12 col-md-6 g-0 outline-primary leftDashSide">
            <div className="ProjectBg">
              <img src={blob} className="blobSvg " />
              <img
                src="https://www.klipfolio.com/gatsby-files/static/a6f6112608d9c7062825addf759701aa/c5248/executive%20dashboard.webp"
                className="dashSvg rounded"
              />
              <img src={dash2} className="dash2Svg rounded" />
            </div>
          </div>
          <div className="col-12 col-md-6 RightDashSide">
            <div className="PhonePng d-flex p-5">
              <img src={Phone3} className="Phone3Png  " />
              <img src={Phone4} className="Phone4Png  " />
            </div>
          </div>
        </div>

        <div className="row gx-0 gy-0">
          <div className="col-12 col-md-6 RightDashSide">
            <div className="PhonePng d-flex p-5">
              <div>
                <h4 className="text-danger">100% DONE-FOR-YOU</h4>
                <h2>Trustworthy Link Quality Control</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ul>
                  <li>High-quality link control equals</li>
                  <li>high-quality results.</li>
                  <li>You get ZERO wastage on your investment.</li>
                  <li>Your ranking goals are achieved faster.</li>
                  <li>
                    Mitigate risk associated with low-quality guest posting.
                  </li>
                </ul>
                <div>
                  <button className="btn btn-success px-4">See Price</button>
                  <button className="btn btn-outline-secondary ms-3 px-4">Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 g-0 outline-primary leftDashSide">
            <div className="ProjectBg">
              <img src={blob} className="blobSvg " />
              <img
                src="https://www.klipfolio.com/gatsby-files/static/a6f6112608d9c7062825addf759701aa/c5248/executive%20dashboard.webp"
                className="dashSvg rounded"
              />
              <img src={dash2} className="dash2Svg rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
