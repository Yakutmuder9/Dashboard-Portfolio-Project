import {useState} from "react";
import "./footer.css";
const Footer = () => {
  const [commentValue, setCommentValue] = useState('')
  return (
    <div className="homefooter bg-transparent">
      <div className="footerSvg">
        <div className="container overflow-hidden">
          <div className="row gx-5 mt-5 pt-2">
            <div className="col-12 col-md-6 gy-5 ">
              <h4 className="text-danger">
                Let eCommerce Link Builders Take your Site’s Traffic and Income
                to the Next-Level
              </h4>
              <div className="text-light mt-4 d-flex w-100">
                <label>
                  <h6>* Your Name</h6>
                  <input
                    placeholder="name"
                    className="px-2 py-2 ms-2 outline-none w-100"
                  />
                </label>
                <label className="ms-2">
                  <h6>* Email</h6>
                  <input
                    placeholder="email"
                    className="px-2 py-2 ms-2 outline-none w-100"
                  />
                </label>
              </div>
              <div className="text-light mt-2 ">
                <div className="text-light mt-3 w-100">
                  <h6>* Add Question or Comment</h6>
                  <textarea name="comments" id="comments" className="w-100 p-2" value={commentValue} onChange={e=> e.target.value}>
                    Hey... add comment here!
                  </textarea>
                </div>
              </div>
            </div>

            
            <div className="col-12 col-md-6 d-flex align-items-end justify-content-between text-white ps-4">
              <div className="px-3 ">
                <h5>Services</h5>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="px-3  ms-3 "><h5>
                 Resource
              </h5>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
                </div>
              <div className="px-3  ms-3"><h5>
                 Address
              </h5>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
               
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
