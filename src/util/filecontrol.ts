import { videoDownloadApi } from "@/api/videoApi";

export const handleDownload = async (path: string) => {
  try {
    const resp = await videoDownloadApi(path);
    const url = window.URL.createObjectURL(new Blob([resp.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "video.mp4");
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  } catch (error) {
    console.error("다운로드 중 에러가 발생했습니다: ", error);
  }
};
