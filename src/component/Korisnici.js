import React, { useState } from "react";

const Korisnici = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Unesena vrijednost:", inputValue);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="e.g. facebook"
      />
      <br></br>
      <button type="submit">Pošalji</button>
    </form>
    </div>
  );
};

export default Korisnici;
