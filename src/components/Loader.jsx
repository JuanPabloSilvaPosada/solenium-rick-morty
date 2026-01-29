import { useState, useEffect } from "react";
import "./Loader.css";

const Loader = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev === "..." ? "" : prev + "."));
    }, 500);
    return () => clearInterval(dotsInterval);
  }, []);

  return <p className="loader">Buscando{dots}</p>;
};

export default Loader;
