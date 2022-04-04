import { FieldError } from "generated/baseGraphql";

export const parseFieldErrors = (errors: FieldError[]) => {
  const fieldErrors = {};
  for (let i = 0; i < errors.length; i++) {
    fieldErrors[errors[i].field] = errors[i].message;
  }
  return fieldErrors;
};
