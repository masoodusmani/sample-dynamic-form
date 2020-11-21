import React from "react";
import { FormContainer } from "./form/FormContainer";
import { TransportSpecificFields } from "./form/TransportSpecificFields";
import { HiddenFields } from "./form/HiddenFields";
import { BaseFields } from "./form/BaseFields";

export const Form = ({ shipment, onClose, onSubmit }) => {
  return (
    <FormContainer shipment={shipment} onClose={onClose} onSubmit={onSubmit}>
      <HiddenFields />
      <BaseFields />
      <TransportSpecificFields shipmentType={shipment?.type} />
    </FormContainer>
  );
};
