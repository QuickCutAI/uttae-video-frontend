import { videoUploadApi } from "@/api/videoApi";
import { useVideoStore } from "@/zustand/store";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, message } from "antd";

const VideoUploader = () => {
  const setVideoUrl = useVideoStore((state) => state.setVideoUrl);

  const beforeUpload = (file: File) => {
    const isMP4 = file.type === "video/mp4";
    if (!isMP4) {
      message.error("mp4 파일만 업로드 가능합니다.");
    } else {
      videoUploadApi(file).then((data) => {
        setVideoUrl(data.data.file_url);
      });
    }
  };

  return (
    <Upload maxCount={1} beforeUpload={beforeUpload}>
      <Button icon={<UploadOutlined />}>영상을 업로드하세요.</Button>
    </Upload>
  );
};

export default VideoUploader;
