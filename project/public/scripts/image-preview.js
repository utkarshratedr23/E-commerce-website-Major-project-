const imagePickerElement=document.querySelector('#image-upload-control');
const imagePreviewElement=document.querySelector('#image-upload-control img');

function updateImagePreview(){
    const files=imagePickerElement.files;
    if(!files || files.length===0){
        imagePreviewElement.display.style='none';
        return;
    }
    const pickedFile=files[0];
    imagePreviewElement.src=URL.createObjectURL(pickedFile);//will genrate URL on our visitors system who pick the file
    imagePreviewElement.style.display='inline';
}

imagePickerElement.addEventListener('change',updateImagePreview)
