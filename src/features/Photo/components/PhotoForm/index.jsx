import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-fields/InputField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import SelectField from "custom-fields/SelectField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup } from "reactstrap";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  // npm i --save react-select
  const { initialValues, isAddMode } = props;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        title: Yup.string()
          .max(30, "Must be 15 characters or less")
          .required("This field is required."),
        categoryId: Yup.number().required("This field is required.").nullable(),
        photo: Yup.string().required("This field is required."),
      })}
      onSubmit={props.onSubmit}
    >
      <Form>
        <FastField
          name="title"
          component={InputField}
          label="Title"
          placeholder="Eg: Wow nature ..."
        />

        <FastField
          name="categoryId"
          component={SelectField}
          label="Category"
          placeholder="What's your photo category?"
          options={PHOTO_CATEGORY_OPTIONS}
        />

        <FastField name="photo" component={RandomPhotoField} label="Photo" />

        <FormGroup>
          <Button color={isAddMode ? "primary" : "success"}>
            {isAddMode ? "Add to album" : "Update your photo"}
          </Button>
        </FormGroup>
      </Form>
    </Formik>
  );
}

export default PhotoForm;
