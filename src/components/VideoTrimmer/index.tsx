import { videoDeleteApi, videoTrimApi } from "@/api/videoApi";
import { handleDownload } from "@/util/filecontrol";
import { Button, Flex, Spin, UploadFile } from "antd";
import { useState } from "react";

interface VideoTrimmerProps {
  fileList: UploadFile[];
  setFileList: (files: UploadFile[]) => void;
  setDownloadDone: (param: boolean) => void;
}

const VideoTrimmer = (props: VideoTrimmerProps) => {
  const { fileList, setFileList, setDownloadDone } = props;

  const [processing, setProcessing] = useState<boolean>(false);

  const handleDelete = (fileName: string) => {
    if (fileList && fileList[0].url) {
      // videoDeleteApi(fileList[0].url.substring(1)).then(
      //   (data: { [key: string]: any }) => {
      //     setFileList([]);
      //   }
      // );

      videoDeleteApi(fileName);
    }
  };

  const handleTrim = () => {
    if (fileList && fileList[0].url) {
      setProcessing(true);
      videoTrimApi(fileList[0].url.substring(1)).then(
        (data: { [key: string]: any }) => {
          setProcessing(false);
          const path = data.data.file_url;
          const fileName = path.split("filename=")[1];
          handleDownload(`uploads/${fileName}`, () => {
            handleDelete(`uploads/${fileName}`);
            setDownloadDone(true);
          });
        }
      );
    }
  };

  return (
    <>
      {processing ? (
        <Spin
          tip={
            <Flex vertical align="center">
              <p>영상을 편집하고 있습니다.</p>
              <p>잠시만 기다려 주세요.</p>
            </Flex>
          }
        />
      ) : (
        <Button type="primary" onClick={handleTrim} size="large">
          Download
        </Button>
      )}
    </>
  );
};

export default VideoTrimmer;
