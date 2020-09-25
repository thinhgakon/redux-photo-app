import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import Images from "constants/images";
import PropTypes from "prop-types";
import React from "react";
import { FastField, Field, Form, Formik, useFormik } from "formik";
import Select from "react-select";
import { Button, FormGroup, Input, Label } from "reactstrap";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  // npm i --save react-select
  return (
    <Formik
      initialValues={{
        title: "",
        categoryId: null,
        photo: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
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

        <FormGroup>
          <Label for="categoryId">Photo</Label>

          <div>
            <Button type="button" outline color="primary">
              Random a photo
            </Button>
          </div>
          <div>
            <img
              width="200px"
              height="200px"
              src={Images.COLORFUL_BG}
              alt="colorful background"
            />
          </div>
        </FormGroup>

        <FormGroup>
          <Button color="primary">Add to album</Button>
        </FormGroup>
      </Form>
    </Formik>
  );
}

export default PhotoForm;
