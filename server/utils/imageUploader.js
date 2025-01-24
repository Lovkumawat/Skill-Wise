const cloudinary=require('cloudinary').v2

// uploade all type of files 
exports.uploadImageToCloudinary=async(file,folder,height,quality)=>{
const options={folder};
if(height){
    // for comresion the height 
    options.height=height;
}
if(quality){
    options.quality=quality;
}
// SchemaTypeOptions.resource_type="auto";
options.resource_type = "auto";
return await cloudinary.uploader.upload(file.tempFilePath, options);
}