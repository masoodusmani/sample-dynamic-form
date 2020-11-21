import { useFormContext } from "react-hook-form";

export const HiddenFields = () => {
  const { register } = useFormContext();
  return (
    <>
      <input hidden name="id" id="id" ref={register} />
      <input hidden name="type" id="type" ref={register} />
    </>
  );
};
