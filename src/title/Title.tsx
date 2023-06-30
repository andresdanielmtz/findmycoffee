import { useNavigate } from "react-router-dom";

export default function Title() {

  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard");
  }

  return (
    <div>
      <h1 className="mainTitle">
        {" "}
        Find My <div id="special_coffee">Coffee </div>☕️{" "}
      </h1>
      <h3> Let's find your ideal coffee place!</h3>
      <p className="text-3 font-bold underline text-sky-400 py-4"> 
        {" "}
        Powered by Tailwind!{" "}
      </p>
      <p> Made with love from Hermosillo! </p> 
      <button onClick = {handleClick} className = "bg-secondary"> Start </button>
    </div>
  );
}
