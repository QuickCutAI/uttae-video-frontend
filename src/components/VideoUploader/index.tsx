import { videoUploadApi } from "@/api/videoApi";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Flex, Upload, UploadFile, UploadProps, message } from "antd";

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
      return Upload.LIST_IGNORE;
    }
    if (file.size > 2 * 1024 ** 3) {
      message.error("2GB 까지만 업로드 가능합니다.");
      return Upload.LIST_IGNORE;
    }
    videoUploadApi(file).then((data) => {
      setFileList([
        {
          uid: "uid",
          name: file.name,
          url: data.data.file_url,
        },
      ]);
    });
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
      <Flex vertical align="center">
        <Button size="large" type="primary" icon={<UploadOutlined />}>
          Upload
        </Button>
        <p style={{ textAlign: "center" }}>* 최대 2GB까지 업로드 가능합니다.</p>
      </Flex>
    </Upload>
  );
};

export default VideoUploader;
