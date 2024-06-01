import React, { useEffect } from "react";
import ImageUploading ,{ ImageListType }from "react-images-uploading";

const PostUploader = ({
  addImage,
  remove,
}: {
  addImage: (image:File|undefined) => void;
  remove: boolean;
}) => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList:ImageListType) => {
    // data for submit
    setImages(imageList as never[]);
    addImage(imageList[0].file) ;
  };
  useEffect(() => {
    setImages([]);
  }, [remove]);

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI

          <div className="upload__image-wrapper">
            <button
              className="upload"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image["data_url"]} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};
export default PostUploader;
