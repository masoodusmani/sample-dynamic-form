import React from "react";

import { useForm } from "react-hook-form";
export const Form = ({ shipment, onClose, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: shipment?.id,
      ref: shipment?.ref
    }
  });
  const submit = handleSubmit((data) => {
    console.log(data);
    onSubmit(data);
  });
  return (
    <form onSubmit={submit}>
      <input hidden name="id" id="id" ref={register} />

      <label htmlFor="ref">ref</label>
      <input name="ref" id="ref" ref={register} />
      <button type="submit">Submit</button>
      <button onClick={onClose}>Cancel</button>
    </form>
  );
};
