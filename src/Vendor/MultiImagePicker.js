// import React, { useEffect, useState } from 'react'
// import '../CSS/AddProduct.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactImagePickerEditor from 'react-image-picker-editor';


// function MultiImagePicker() {


//    const [images, setimage] = useState([]) 
//    useEffect(()=>{
// //     var imgUpload = document.getElementById('upload_imgs')
// //     ,imgPreview = document.getElementById('img_preview')
// //     ,imgUploadForm = document.getElementById('img-upload-form')
// //     ,totalFiles
// //     ,previewTitle
// //     ,previewTitleText
// //     ,img;

// // imgUpload?.addEventListener('change', previewImgs, false);
// // imgUploadForm?.addEventListener('submit', function (e) {
// // e.preventDefault();
// // alert('Images Uploaded! (not really, but it would if this was on your website)');
// // }, false);

// // function previewImgs(event) {
// // totalFiles = imgUpload.files.length;

// // if(!!totalFiles) {
// // imgPreview.classList.remove('quote-imgs-thumbs--hidden');
// // previewTitle = document.createElement('p');
// // previewTitle.style.fontWeight = 'bold';
// // previewTitleText = document.createTextNode(totalFiles + ' Total Images Selected');
// // previewTitle.appendChild(previewTitleText);
// // imgPreview.appendChild(previewTitle);
// // }

// // for(var i = 0; i < totalFiles; i++) {
// // img = document.createElement('img');
// // img.src = URL.createObjectURL(event.target.files[i]);
// // img.classList.add('img-preview-thumb');
// // imgPreview.appendChild(img);
// // }
// // }

//    },[])
//    var imageList = [
//     {
//         id: 1,
//         dataURL: "https://picsum.photos/seed/1/600",
//       },
//       {
//         id: 2,
//         dataURL: "https://picsum.photos/seed/2/600",
//       },
//       {
//         id: 3,
//         dataURL: "https://picsum.photos/seed/3/600",
//       },
//       {
//         id: 4,
//         dataURL: "https://picsum.photos/seed/4/600",
//       },
//   ];
//   const config2 = {
//     borderRadius: '100%',
//     language: 'en',
//     width: '120px',
//     height: '120px',
//     objectFit: 'contain',
//     compressInitial: 100,
//     hideEditBtn:'true',
//     hideDownloadBtn:'false'
//   };

//  const fileSelectedHandler = (e) => {
//     setimage([...images,e.target.files]) 
//   }
//  const initialImage = '';

//  const handledeleteimage =(e,data)=>{
//     console.log('data',data)
//     setimage(images.filter(item=>item.name === data.name)
//     )
    

//    }  
// return (
//     <>
//         {/* <div class="grid-x grid-padding-x">
//         <div class="small-10 small-offset-1 medium-8 medium-offset-2 cell">
//             <h1>Multiple Image File Upload with Preview</h1>
//             <form action="upload_file.php" id="img-upload-form" method="post" enctype="multipart/form-data">
//             <p>
//                 <label for="upload_imgs" class="button hollow">Select Your Images +</label>
//                 <input class="show-for-sr" type="file" id="upload_imgs" name="upload_imgs[]" multiple/>
//             </p>
//             <div class="quote-imgs-thumbs quote-imgs-thumbs--hidden" id="img_preview" aria-live="polite"></div>
//             <p>
//                 <input class="button large expanded" type="submit" name="submit" value="Upload Images"/>
//             </p>
//             </form>
//         </div>
  
//         </div> */}
    
//         <div  id="image_picker" class="row"></div>

//         <div><h2>Upload images</h2></div>
//         <h3>Images</h3>
//         {/* <input type="file" multiple onChange={fileSelectedHandler} /> */}
//         {console.log(images)}

  
//         {images.map(data=>{
//             return (
//                  <>
//                    <div> <img style={{width:'50px', height:'50px'}} src={URL.createObjectURL(data)}/>       
//                    </div>
//                    <button onClick={(e)=>{handledeleteimage(e,data)}}> Delete Image</button>
//                  </>
//                    )
//         })}
//         {/* <ReactImagePickerEditor
//                                 config={config2}
//                                 imageSrcProp={initialImage}
//                                 imageChanged={(urldata,name) => {
//                                     setimage([...images,urldata]) 
//                                     // handleimagechangeMain()
//                                     console.log('name',name)
//                                 }} 
                
//                             /> */}
//        <input type="file" multiple accept="image/*" onChange={(e)=>{
//         setimage([...images,e.target.files[0]]) 
//         console.log(e)
//        }} />                     

//         </>
//   )
// }

// export default MultiImagePicker