import React from "react";
import "./pokemondetails.css";
function PokemonDetails({
  handleModal,
  name,
  weight,
  height,
  stats,
  image,
  type,
}) {
  return (
    <>
      <div>
        <div className={"expanded-overlay " + type}>
          <button className="close-button" onClick={handleModal}>
            X
          </button>
          <div className="expanded-left">
            <img className="expanded-image" src={image} alt={name} />
            <h3 className="expanded-name">{name}</h3>
          </div>
          <div className={"expanded-right " + type}>
            <table className="expanded-table">
              <tr>
                <td>Weight: {weight}</td>
              </tr>
              <tr>
                <td>Height: {height}</td>
              </tr>
            </table>
            <table className="expanded-table">
              {stats?.map((item, index) => (
                <tr key={index}>
                  <td>Stat{index + 1}</td>
                  <td>{item.stat.name}</td>
                </tr>
              ))}
            </table>
            <table className="expanded-table">
              {stats?.map((item, index) => (
                <tr key={index}>
                  <td>Bs{index + 1}</td>
                  <td>{item.base_stat}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonDetails;
