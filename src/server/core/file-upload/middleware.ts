//

/**
 * file upload middlware (using multer)
 */

import multer from 'multer';
const upload = multer();
export const fileUploadMiddleware = upload.any()