import { useFormContext } from "react-hook-form";

export const BaseFields = () => {
  const { register } = useFormContext();
  return (
    <div>
      <label htmlFor="ref">ref</label>
      <input name="ref" id="ref" ref={register} />
    </div>
  );
};
