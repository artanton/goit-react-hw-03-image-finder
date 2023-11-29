import { Formik, ErrorMessage } from 'formik';
import { IoMdSearch } from 'react-icons/io';

import * as Yup from 'yup';
import { Field, Form, SearchFormBtn } from './FormStyled';

const querySchema = Yup.object().shape({
  query: Yup.string().min(2, 'Too Short!').required('Required'),
});

export const QueryForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ query: '' }}
      validationSchema={querySchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values.query);
        resetForm();
      }}
    >
      <Form>
        <SearchFormBtn type="submit">
          <IoMdSearch />
        </SearchFormBtn>
        <Field
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
        <ErrorMessage name="query" component="span" />
      </Form>
    </Formik>
  );
};
