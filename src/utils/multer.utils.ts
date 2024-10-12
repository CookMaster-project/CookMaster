import * as multer from 'multer';
import * as fs from 'fs'
import * as path from 'path';
export const fileUpload = () =>( {
  storage: multer.diskStorage({
    destination(req, file, callback) {
      const uploadPath = './uploads/videos'
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });

      }
      callback(null,uploadPath)
    },
    filename: function (req, file, cb) {
      const extName = path.extname(file.originalname)
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + "-" + uniqueSuffix + extName)
    }
  })
})