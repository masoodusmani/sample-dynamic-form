import React from "react";
import { FormContainer } from "./form/FormContainer";
import { TransportSpecificFields } from "./form/TransportSpecificFields";
import { HiddenFields } from "./form/HiddenFields";
import { BaseFields } from "./form/BaseFields";

export const Form = ({ shipment, onClose, onSubmit }) => {
  return (
    // This is also a slight downside, that this component
    // just forwards these props to the container
    // Maybe the solution to both of these is to not forward the props and keep the logic for formContainer here
    <FormContainer shipment={shipment} onClose={onClose} onSubmit={onSubmit}>
      <HiddenFields />
      <BaseFields />
      <TransportSpecificFields shipmentType={shipment?.type} />
    </FormContainer>
  );
};
