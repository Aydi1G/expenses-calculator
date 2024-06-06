import "./Header.css";
import bac from "../../photos/acc.jpg";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container__topic">
        <h1>Expenses Calculator</h1>
        <p>Free app to calculate you expenses</p>
      </div>
      <div className="header-container__btn">
        <a href="#workArea">start &gt;</a>
      </div>
    </div>
  );
};

export default Header;
