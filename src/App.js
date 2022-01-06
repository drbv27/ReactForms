import { useState } from "react";
const App = () => {
  const [value, setValue] = useState({
    normal: "valor por defecto",
    texto: "",
  });
  const handleChange = (e) => {
    console.log(e.target.name);
    /* setValue({ ...value, [e.target.name]: e.target.value }); */
    setValue((state) => ({
      //state es el mismo value...lo colocamos asi para que no choquen los nombres
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(value);
  return (
    <div>
      {value.length < 5 ? <span>Longitud minima 5_</span> : null}
      <input
        type="text"
        name="normal"
        value={value.normal}
        onChange={handleChange}
      />
      <textarea name="texto" value={value.texto} onChange={handleChange} />
    </div>
  );
};

export default App;
