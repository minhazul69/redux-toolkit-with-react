import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "./photosSlice";
import "./photos.css";

const PhotosView = () => {
  const { isLoading, photos, error } = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  console.log(photos);
  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);
  return (
    <div>
      {isLoading && <h4>Loading....</h4>}
      {error && <h4>{error.message}</h4>}
      <section className="photo-section">
        {photos.map((photo) => (
          <div key={photo.id} className="photos-div">
            <img className="div-img" src={photo.thumbnailUrl} alt="" />
            <p>{photo.title}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PhotosView;
