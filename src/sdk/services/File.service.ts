import Service from "../Service";
import { File } from "../@types";


class FileService extends Service {

    static getSignedUrl(fileInfo: File.UploadRequestInput) {

        return this.Http
            .post<File.UploadRequest>('/upload-requests', fileInfo)
            .then(this.getData)
            .then(res => res.uploadSignedUrl)

    }

}

export default FileService