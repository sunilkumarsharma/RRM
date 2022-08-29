
import * as yup from "yup";


export const common = {
    imageValidate: (extention, size, msg) => {
        extention = extention || ['image/jpg', 'image/jpeg', 'image/png']
        msg = msg || "You need to attach image";
        size = size || 1024 * 1024
        let image = yup
          .mixed()
          .required(msg)
          .test("fileSize", "The image is too large", (value) => {
            if (value == undefined || value == null) {
              return false;
            }
            return value && value?.size <= size;
          }).test("type", `Only the following formats are accepted: ${extention}`, (value) => {
            if (value == undefined || value == null) {
              return false;
            }
            let fileType = value.type;
            return value && (extention.indexOf(fileType) != -1);
          })
        return image;
    },
    previewURL: (file) => {
        let URL = '';
        if (file != '') {
          URL = window.URL.createObjectURL(file)
        }
        return URL;
    },
}