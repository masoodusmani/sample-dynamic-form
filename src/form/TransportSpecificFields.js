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

export const TypeMap = {
  sea: <SeaFields />,
  air: <AirFields />
};
export const TransportSpecificFields = ({ shipmentType }) => {
  console.log(shipmentType);
  return React.cloneElement(TypeMap[shipmentType]);
};
