import { Api } from "@/config/axios";

export const videoUploadApi = (file: File) =>
  Api.post(
    "/upload",
    { file },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

export const videoTrimApi = (url: string) => {
  const formData = new FormData();
  formData.append("path", url);
  return Api.put("/trim_video", formData);
};

export const videoDownloadApi = (url: string) => {
  const formData = new FormData();
  formData.append("path", url);
  return Api.post("/download", formData, { responseType: "blob" });
};
