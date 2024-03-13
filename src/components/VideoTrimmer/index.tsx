import { videoDeleteApi, videoTrimApi } from "@/api/videoApi";
import { handleDownload } from "@/util/filecontrol";
import { useVideoStore } from "@/zustand/store";
import { Button, Flex, Spin, UploadFile } from "antd";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface VideoTrimmerProps {
  fileList: UploadFile[];
  setFileList: (files: UploadFile[]) => void;
}

const VideoTrimmer = (props: VideoTrimmerProps) => {
  const { fileList, setFileList } = props;

  const [processing, setProcessing] = useState<boolean>(false);
  const [downloadLink, setDownloadLink] = useState<string | null>(null);
  const downloadref = useRef<HTMLAnchorElement>(null);

  const handleDelete = (fileName: string) => {
    if (fileList && fileList[0].url) {
      videoDeleteApi(fileList[0].url.substring(1)).then(
        (data: { [key: string]: any }) => {
          setFileList([]);
        }
      );

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
          handleDownload(`uploads/${fileName}`, () =>
            handleDelete(`uploads/${fileName}`)
          );
        }
      );
    }
  };

  useEffect(() => {
    if (downloadLink) {
      console.log(downloadref);
      downloadref.current?.click();
    }
  }, [downloadLink]);

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
        <Button onClick={handleTrim}>Download</Button>
      )}

      {downloadLink && (
        <a
          ref={downloadref}
          href={downloadLink}
          download="cutted.mp4"
          style={{ display: "none" }}
        />
      )}
    </>
  );
};

export default VideoTrimmer;
