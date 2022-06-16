import React, { useState } from 'react'
import ReactImagePickerEditor, { ImagePickerConf } from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css'
function ImagePicker() {
   const [ImageSrc,setImageSrc] = useState('')
    const config2 = {
        borderRadius: '8px',
        language: 'en',
        width: '330px',
        height: '250px',
        objectFit: 'contain',
        compressInitial: null,
      };
      // const initialImage: string = '/assets/images/8ptAya.webp';
      const initialImage = '';
  
    return (
        <div>

         <ReactImagePickerEditor
             config={config2}
             imageSrcProp={initialImage}
             imageChanged={(newDataUri) => { setImageSrc(newDataUri) }} />

             {console.log('ImageSrc',ImageSrc)}
         </div>
  )
}

export default ImagePicker