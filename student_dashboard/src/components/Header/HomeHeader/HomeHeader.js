import { useState } from "react";
import LoginPage from "../../../pages/HomePage/LoginModal/LoginModal";
import "../../../pages/HomePage/LoginModal/loginModal.css";
import { Button, Modal, ModalHeader } from "reactstrap";
import AppBar from '@mui/material/AppBar';
import './header.css'

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [navDark, setNavDark] = useState(false);
  const [menulist, setMenulist] = useState(false);
  window.addEventListener("scroll", navHandler);
  window.addEventListener("resize", menulistHandler);
  
  
  function navHandler() {
    if (window.scrollY >= 80) {
      setNavDark(true);
      console.log("navdark")
    } else {
      setNavDark(false);
      console.log("Notnavdark")
    }
  }

  

  function menulistHandler() {
    if (window.screen.width <= 560) {
      setMenulist(true);
    } else {
      setMenulist(false);
    }
  }
  return (
    <nav  className={navDark? "navactive" : "rounded shadow-lg"} id='headerNav'>
      <div className="logo">
        <h1 className="pt-1 text-white">MyDashbord</h1>
      </div>
      <Button
        id="ModelBtn"
        outline={modalOpen}
        onClick={() => setModalOpen(true)}
        className='text-danger shadow'
      >
        <h6>Sign Up</h6>
      </Button>
      <Modal
        fullscreen
        isOpen={modalOpen}
        className="shadow p-md-5 p-sm-3 rounded"
        id="modaloverLay"
      >
        <ModalHeader toggle={() => setModalOpen(false)}></ModalHeader>{" "}
        <LoginPage />
      </Modal>
    </nav>
  );
};

export default Navbar;
