import * as yup from 'yup';

export const commentValidationSchema = yup.object().shape({
  content: yup.string().required(),
  post_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
