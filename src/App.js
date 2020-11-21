import React from "react";
import "./styles.css";
import { Form } from "./Form";
export default function App() {
  const [s, setS] = React.useState();
  const [ss, setSs] = React.useState([
    { id: "1", ref: "a1", type: "sea", carrier: "Maersk" },
    { id: "2", ref: "a2", type: "air", airline: "Lufthansa" },
    { id: "3", ref: "a3", type: "rail", lading: "some id" }
  ]);
  const onClose = () => setS();
  const onSubmit = (data) => {
    setSs((curr) =>
      curr.map((shipment) => (shipment.id === data.id ? data : shipment))
    );
    console.log(ss);
    setS();
  };
  return (
    <div className="App">
      {ss.map((s) => (
        <div key={s.ref}>
          {s.ref} <button onClick={() => setS(s)}> edit</button>
        </div>
      ))}
      {s && <Form shipment={s} onClose={onClose} onSubmit={onSubmit} />}
    </div>
  );
}
