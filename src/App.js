import { useState } from "react";
const App = () => {
  const [value, setValue] = useState({
    normal: "valor por defecto",
    texto: "",
    select: "",
    check: false,
    estado: "orion",
  });
  //Hago un destructuring de target v....para ahorrarme colocar e.
  const handleChange = ({ target }) => {
    console.log(target.value, target.checked);
    /* setValue({ ...value, [e.target.name]: e.target.value }); */
    setValue((state) => ({
      //state es el mismo value...lo colocamos asi para que no choquen los nombres
      ...state,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
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
      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">-- Seleccione --</option>
        <option value="orion">Orion enojado</option>
        <option value="tristan">Tristan meloso</option>
        <option value="guido">Guido canson</option>
      </select>

      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.checked}
      />
      {/*       <div onChange={handleChange}>
        <label>Mascota</label>
        <input type="radio" value="orion" name="estado" />
        Orion
        <input type="radio" value="tristan" name="estado" />
        Tristan
        <input type="radio" value="guido" name="estado" />
        Guido
      </div> */}
      <div>
        <label>Mascota</label>
        <input
          onChange={handleChange}
          type="radio"
          value="orion"
          name="estado"
          checked={value.estado === "orion"}
        />
        Orion
        <input
          onChange={handleChange}
          type="radio"
          value="tristan"
          name="estado"
          checked={value.estado === "tristan"}
        />
        Tristan
        <input
          onChange={handleChange}
          type="radio"
          value="guido"
          name="estado"
          checked={value.estado === "guido"}
        />
        Guido
      </div>
    </div>
  );
};

export default App;
