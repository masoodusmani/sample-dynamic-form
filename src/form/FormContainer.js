import React from "react";
import { useForm, FormProvider } from "react-hook-form";

export const FormContainer = ({ shipment, onSubmit, onClose, children }) => {
  const defaultValues = React.useMemo(
    () => ({
      id: shipment?.id,
      type: shipment?.type,
      ref: shipment?.ref,
      carrier: shipment?.carrier,
      airline: shipment?.airline,
      lading: shipment?.lading
    }),
    [shipment]
  );
  const methods = useForm({
    defaultValues
  });
  const { handleSubmit, reset } = methods;
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
