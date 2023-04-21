import { diskStorage } from 'multer';

const storage = diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const [fileName, extension] = file.originalname.split('.');
    cb(null, `${fileName}-${uniqueSuffix}.${extension}`);
  },
});

export default storage;
