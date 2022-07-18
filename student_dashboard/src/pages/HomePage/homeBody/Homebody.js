import "../homePage.css";
import wave from "../../../app/assets/images/wave2.svg";
import Asset from "../../../app/assets/images/static.svg";


const Homebody = () => {
  return (
    <div className="Homebody">
      <div className="svgContainer d-flex flex-column align-items-center justify-content-between">
        <div className=" bg-danger w-100 "></div>

        <div className="container px-4 middleCont">
          <div className="row gx-5">
            <div className="col-md-6 col-12">
              <div className=" text-white  rightBodyText">
                Quality Link Building Services. Results Focused & Done For You.
              </div>
              <div className=" text-white pt-4">
              Our US & UK based link building agency operates the strictest blogger outreach and guest post solutions – Real websites, quality links, and next-level ROI.
              </div>
              <p className=" text-white pt-4">
              Find out more about our high-quality backlinks and white label SEO services.
              </p>
              <button className="btn btn-primary px-4 mt-2">Get Started</button>
            </div>
            <div className="col-md-6 col-12 shadow-lg rounded">
              <div className=" svgiconleft">
                <img src={Asset} className="w-100 h-100" />
              </div>
            </div>
          </div>
        </div>

        <div className="svgBackground w-100 ">
          <img src={wave} className="" />
        </div>
      </div>

      {/* <div className="container">
        <div className="carousel">
          <div className="carousel__face">
            <span>This is something</span>
          </div>
          <div className="carousel__face">
            <span>Very special</span>
          </div>
          <div className="carousel__face">
            <span>Special is the key</span>
          </div>
          <div className="carousel__face">
            <span>For you</span>
          </div>
          <div className="carousel__face">
            <span>Just give it</span>
          </div>
          <div className="carousel__face">
            <span>A try</span>
          </div>
          <div className="carousel__face">
            <span>And see</span>
          </div>
          <div className="carousel__face">
            <span>How IT Works</span>
          </div>
          <div className="carousel__face">
            <span>Woow</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Homebody;
