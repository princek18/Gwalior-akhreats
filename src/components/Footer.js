import { useContext } from "react";
import developerContext from "../utils/developerContext";

const Footer = () => {
  const { developer } = useContext(developerContext);
  return (
    <>
      <hr />
      <h3>This website is being build by {developer.name}</h3>
      <p>feel free to reach to him {developer.email}</p>
    </>
  );
};

export default Footer;
