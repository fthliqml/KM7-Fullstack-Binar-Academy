const multer = require("multer");

const multerFiltering = (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
        cb(null, true);
    } else {
        throw new Error("Image format is not valid...");
    }
};

const upload = multer({
    fileFilter: multerFiltering,
    // dest: "public/image/users",
});

// kalo export gapake kurung kurawal, import juga gapake kurung kurawal
module.exports = upload;
