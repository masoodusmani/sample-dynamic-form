import React from "react";
import { useFormContext } from "react-hook-form";

const SeaFields = () => {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor="carrier">carrier</label>
      <input name="carrier" id="carrier" ref={register} />
    </div>
  );
};

const AirFields = () => {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor="airline">airline</label>
      <input name="airline" id="airline" ref={register} />
    </div>
  );
};
const RailFields = () => {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor="lading">lading</label>
      <input name="lading" id="lading" ref={register} />
    </div>
  );
};

export const TypeMap = {
  sea: <SeaFields />,
  air: <AirFields />,
  rail: <RailFields />
};
export const TransportSpecificFields = ({ shipmentType }) => {
  console.log(shipmentType);
  return React.cloneElement(TypeMap[shipmentType]);
};
