import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import  './ManageImage.css';

const ManageImage = () => {
    const [images, setImages] = useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
    };
    
    return (

      <section className="page-section custom-page">
  

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
            <button className="btn btn-success btn-sm"
              id="upload"
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Upload Image
            </button>
            &nbsp;
            <button id="removeAll" className="btn btn-danger btn-sm" onClick={onImageRemoveAll}>Remove all</button>
          
            <div className="row">            
                                         {imageList.map((image, index) => (
                                             <div key={index} className="col-md-2  image-item">
                                                 <div className="card mt-3">
                                                     <figure>
                                                         <img src={image.data_url} alt="" width="199"  />
                                                     </figure>
                                                     <div className="card-body d-flex justify-content-between">
                                                         <button className="btn btn-success btn-sm" onClick={() => onImageUpdate(index)}>Update</button>
                                                         <button className="btn btn-danger btn-sm" onClick={() => onImageRemove(index)}>Remove</button>
                                                    </div>
                                                 </div>
                                             </div>
                                       ))}
                                   </div>
                                   
            
          </div>
        )}
      </ImageUploading>
    </div>   
    </section> 
    );
};

export default ManageImage;