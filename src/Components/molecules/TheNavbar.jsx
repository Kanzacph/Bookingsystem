import cphlogo from "../atoms/cphlogo.png";
import { useState } from "react";
import "./CSS/TheNavbar.css";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

export default function TheNavbar(props) {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleClick = (route) => {
    navigate(route);
    closeModal();
  };

  return (
    <div className="App-header">
      <img className="logo" src={cphlogo}  onClick={() => {
              handleClick("/");
            }} width="200px" alt="cphlogo" />

      <div className="menuknap">
        <button className="openmenu" onClick={openModal}>
          Menu
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Update booking form"
        className="menu-dropdown"
        overlayClassName="menu-dropdown-overlay"
      >
        <ul className="bullets">
          <li className="menu-dropdown-item"
            onClick={() => {
              handleClick("/");
            }}
          >
            Hjem
          </li>
          <li className="menu-dropdown-item"
            onClick={() => {
              handleClick("/my-bookings");
            }}
          >
            Mine bookinger
          </li>
          <li className="menu-dropdown-item"
            onClick={() => {
              handleClick("/new-booking");
            }}
          >
          Book lokale
          </li>
        </ul>
      </Modal>
    </div>
  );
}
