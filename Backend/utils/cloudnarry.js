const { v2: cloudinary } = require("cloudinary");
const fs = require("fs");


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


const uploadfileCloudnarry = async (localfilepath) => {
    try {
        if (!localfilepath) {
            return null
        }

        const responce = await cloudinary.uploader.upload(localfilepath, {
            resource_type: "auto"
        });
        fs.unlinkSync(localfilepath)
        return responce
    } catch (error) {
        console.log(error)
        fs.unlinkSync(localfilepath);
        return null
    }
}

module.exports = { uploadfileCloudnarry }