import { useNavigate } from "react-router";
import { useState } from "react";
import Modal from "react-modal";
import klasselokale from "../atoms/klasselokale.png";
import kryds from "../../Components/atoms/kryds.png";
import { transformToArray } from "./firebase-utils";
import { useEffect } from "react";
import { type } from "@testing-library/user-event/dist/type";

export default function LocalsModal() {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [allRooms, setAllRooms] = useState([]);

  const getRooms = async () => {
    const response = await fetch(
      `https://frontend-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/rooms.json`,
      {
        method: "GET",
      }
    );

    setAllRooms(transformToArray(await response.json()));
    console.log(allRooms);
  };

  useEffect(() => {
    getRooms();
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const handleClick = (route) => {
    navigate(route);
    setModalIsOpen(false);
  };

  return (
    <div>
      <div onClick={openModal}>
        <button className="knap">Læs om lokalerne her</button>
      </div>
      <Modal isOpen={modalIsOpen}>
        <img
          className="button"
          onClick={() => {
            handleClick("/new-booking");
          }}
          src={kryds}
          alt="Kryds til at komme ud af modalen"
        />
          <h1 className="text-black">Beskrivelse af lokaler</h1>
        {allRooms.map((room) => {
          return (
            <div>
              <div>
                <div className="locals-container">
                  <div>
                    <h2 className="text-black">Lokale {room.id}</h2>
                  </div>
                  <div className="et">
                    <img
                      className="klasselokale"
                      src={klasselokale}
                      alt="klasselokale"
                    />
                    <p>
                      Undervisningslokalet ligger på {room.floor}. sal <br />
                      <br />
                      Udstyr: <br />
                      - {room.equipment.whiteboards} whiteboards <br />
                      - {room.equipment.projectors} projektorer <br />
                      - Mørklægningsgardiner? {room.equipment.blackout_curtain ? "Ja" : "Nej"} <br />
                      <br />
                      Størrelse: <br />
                      {room.size} m2 <br />
                      <br />
                      Max kapacitet: <br />
                      {room.max_capacity} personer, {room.seats} siddepladser <br />
                      <br />
                      Type: <br />
                      {room.type}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div>
          <img
            className="button"
            onClick={() => {
              handleClick("/new-booking");
            }}
            src={kryds}
            alt="Kryds til at komme ud af modalen"
          />
        </div>
      </Modal>
    </div>
  );
}
