import React from "react";
import { useFormContext } from "react-hook-form";

const LadingField = ({ register }) => {
  return (
    <>
      <label htmlFor="lading">lading</label>
      <input name="lading" id="lading" ref={register} />
    </>
  );
};
const SeaFields = () => {
  const { register } = useFormContext();
  return (
    <>
      <div>
        <label htmlFor="carrier">carrier</label>
        <input name="carrier" id="carrier" ref={register} />
      </div>

      <div>
        <LadingField register={register} />
      </div>
    </>
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
      <LadingField register={register} />
    </div>
  );
};

export const TypeMap = {
  sea: <SeaFields />,
  air: <AirFields />,
  rail: <RailFields />
};
export const TransportSpecificFields = ({ shipment }) => {
  return React.cloneElement(TypeMap[shipment?.type]);
};
const defaultMap = {
  sea: (shipment) => ({ lading: shipment.lading, carrier: shipment.carrier }),
  air: (shipment) => ({ airline: shipment.airline }),
  rail: (shipment) => ({ lading: shipment.lading })
};
export const transportSpecificFields = (shipment) => {
  return defaultMap[shipment?.type]?.(shipment);
};
