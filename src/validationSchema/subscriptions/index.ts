import * as yup from 'yup';

export const subscriptionValidationSchema = yup.object().shape({
  organization_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
