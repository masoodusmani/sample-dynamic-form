import React from "react";

import { useForm, FormProvider, useFormContext } from "react-hook-form";

const TypeMap = {
  sea: <SeaFields />,
  air: <AirFields />
};
const TransportSpecificFields = ({ shipmentType }) => {
  return React.cloneElement(TypeMap[shipmentType]);
};
export const Form = ({ shipment, onClose, onSubmit }) => {
  return (
    <FormContainer shipment={shipment} onClose={onClose} onSubmit={onSubmit}>
      <HiddenFields />
      <BaseFields />
      {/* {shipment?.type === "sea" && <SeaFields />}
      {shipment?.type === "air" && <AirFields />} */}
      <TransportSpecificFields shipmentType={shipment?.type} />
    </FormContainer>
  );
};

const FormContainer = ({ shipment, onSubmit, onClose, children }) => {
  const defaultValues = React.useMemo(
    () => ({
      id: shipment?.id,
      type: shipment?.type,
      ref: shipment?.ref,
      carrier: shipment?.carrier,
      airline: shipment?.airline
    }),
    [shipment]
  );
  const methods = useForm({
    defaultValues
  });
  const { register, handleSubmit, reset } = methods;
  React.useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);
  const submit = handleSubmit((data) => {
    onSubmit(data);
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={submit}>
        {children}
        <br />
        <button type="submit">Submit</button>
        <button onClick={onClose}>Cancel</button>
      </form>
    </FormProvider>
  );
};
const HiddenFields = () => {
  const { register } = useFormContext();
  return (
    <>
      <input hidden name="id" id="id" ref={register} />
      <input hidden name="type" id="type" ref={register} />
    </>
  );
};
const BaseFields = () => {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor="ref">ref</label>
      <input name="ref" id="ref" ref={register} />
    </div>
  );
};

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
