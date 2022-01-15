import Tilty from "react-tilty";
import "./Logo.css";
import brain from "./brain.png";
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilty
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner pa3">
          {" "}
          <img alt="logo" src={brain} style={{ paddingTop: "5px" }} />{" "}
        </div>
      </Tilty>
    </div>
  );
};

export default Logo;
