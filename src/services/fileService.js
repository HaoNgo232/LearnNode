const path = require("path");

const uploadSingleFile = async (file) => {
  console.log(">>> file = ", file);
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let uploadPath = __dirname + "/../public/images/upload/";

  // get file extension name
  let extName = path.extname(file.name);

  // get base name
  let baseName = path.basename(file.name, extName);

  let finaName = `${baseName}_${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finaName}`;

  // Use the mv() method to place the file somewhere on your server
  try {
    await file.mv(finalPath);
    return {
      status: "success",
      path: finalPath,
      error: null,
    };
  } catch (error) {
    console.log(">>> err = ", error);
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(error),
    };
  }
};
const uploadMultipleFiles = async (files) => {
  try {
    let uploadPath = __dirname + "/../public/images/upload/";
    let reslutfiles = [];
    let countSuccess = 0;
    for (let i = 0; i < files.length; i++) {
      // get file extension name
      let extName = path.extname(files[i].name);

      // get base name
      let baseName = path.basename(files[i].name, extName);

      let finaName = `${baseName}_${Date.now()}${extName}`;
      let finalPath = `${uploadPath}/${finaName}`;

      // Use the mv() method to place the files[i] somewhere on your server
      try {
        await files[i].mv(finalPath);
        reslutfiles.push({
          status: "success",
          path: finaName,
          fileName: files[i].name,
          error: null,
        });
      } catch (error) {
        console.log(">>> err = ", error);
        return {
          status: "failed",
          path: null,
          fileName: files[i].name,
          error: JSON.stringify(error),
        };
      }
    }
    return {
      countSuccess: countSuccess,
      detail: reslutfiles,
    };
  } catch (error) {
    console.log(">>> err = ", error);
  }
};

module.exports = {
  uploadSingleFile,
  uploadMultipleFiles,
};
