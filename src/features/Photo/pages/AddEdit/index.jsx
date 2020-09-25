import { addToAlbum } from "actions/photo";
import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./styles.scss";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(addToAlbum(values));
    history.push("/photos");
  };
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;
