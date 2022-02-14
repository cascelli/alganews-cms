import Service from "../Service";
import { File } from "../@types";


class FileService extends Service {

    static getSignedUrl(fileInfo: File.UploadRequestInput) {

        return this.Http
            .post<File.UploadRequest>('/upload-requests', fileInfo)
            .then(this.getData)
            .then(res => res.uploadSignedUrl)

    }

    static uploadFileToSognedUrl(signedUrl: string, file: File) {

        return this.Http

            // Implementacao de envio de arquivo parao Google Cloud Platform
            .put<{}>(signedUrl, file, {
                headers: {'Content-Type': file.type }
            })
            .then(this.getData)

    }


}


export default FileService