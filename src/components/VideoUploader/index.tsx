import { videoUploadApi } from "@/api/videoApi";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, UploadFile, UploadProps, message } from "antd";

interface VideoUploaderProps {
  fileList: UploadFile[];
  setFileList: (files: UploadFile[]) => void;
}

const VideoUploader = (props: VideoUploaderProps) => {
  const { fileList, setFileList } = props;

  const beforeUpload = (file: File) => {
    const isMP4 = file.type === "video/mp4";
    if (!isMP4) {
      message.error("mp4 파일만 업로드 가능합니다.");
    } else {
      videoUploadApi(file).then((data) => {
        setFileList([
          {
            uid: "uid",
            name: file.name,
            url: data.data.file_url,
          },
        ]);
      });
    }
  };

  const handleChange: UploadProps["onChange"] = (info) => {
    const newFileList = [...info.fileList];

    setFileList(newFileList.slice(-1));
  };

  return (
    <Upload
      maxCount={1}
      beforeUpload={beforeUpload}
      fileList={fileList}
      onChange={handleChange}
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
};

export default VideoUploader;
