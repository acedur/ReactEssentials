import reactImg from "../../assets/react-core-concepts.png";
import "./header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const decripition = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {decripition} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
