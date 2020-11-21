import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { transportSpecificFields } from "./TransportSpecificFields";
export const FormContainer = ({ shipment, onSubmit, onClose, children }) => {
  // This seems to be the only downside, that the
  // default values are separated from the fields themselves,
  // so it's easy to forget to add them here
  const defaultValues = React.useMemo(
    () => ({
      id: shipment?.id,
      type: shipment?.type,
      ref: shipment?.ref,
      ...transportSpecificFields(shipment)
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
