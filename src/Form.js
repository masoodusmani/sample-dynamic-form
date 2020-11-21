import React from "react";

import { useForm, FormProvider, useFormContext } from "react-hook-form";
export const Form = ({ shipment, onClose, onSubmit }) => {
  const defaultValues = React.useMemo(
    () => ({
      id: shipment?.id,
      type: shipment?.type,
      ref: shipment?.ref,
      carrier: shipment?.carrier
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
        <input hidden name="id" id="id" ref={register} />
        <input hidden name="type" id="type" ref={register} />

        <label htmlFor="ref">ref</label>
        <input name="ref" id="ref" ref={register} />
        {shipment?.type === "sea" && <SeaFields />}
        <br />
        <button type="submit">Submit</button>
        <button onClick={onClose}>Cancel</button>
      </form>
    </FormProvider>
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
