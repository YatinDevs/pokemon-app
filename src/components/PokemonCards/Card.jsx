import React, { useState, useEffect } from "react";
import "./pokemoncards.css";
import Modal from "../UI/Modal";
import fetchDataFromApi from "../../utils/api";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
function Card({ name, url }) {
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchDataFromApi(url).then((data) => {
      console.log(data);
      setPokemonDetails(data[0]);
    });
  }, []);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    console.log("showModal value changed", showModal);
    if (showModal) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [showModal]);

  return (
    <>
      <div className={pokemonDetails?.type + " pokemon-card"}>
        <div className="number">#{pokemonDetails?.id} </div>
        <img src={pokemonDetails?.image} alt={name} />
        <h3> {name.toUpperCase()} </h3>
        <small>Type: {pokemonDetails?.type}</small>
        <div className={"detail-wrapper"}>
          <button
            className={"btn-" + pokemonDetails?.type}
            onClick={handleModal}
          >
            Know more...
          </button>
        </div>
      </div>
      {showModal && (
        <Modal>
          <PokemonDetails handleModal={handleModal} {...pokemonDetails} />
        </Modal>
      )}
    </>
  );
}

export default Card;
