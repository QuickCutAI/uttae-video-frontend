import { videoTrimApi } from "@/api/videoApi";
import { useVideoStore } from "@/zustand/store";
import { Button, Spin } from "antd";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const VideoTrimmer = () => {
  const videoUrl = useVideoStore((state) => state.videoUrl);
  const [processing, setProcessing] = useState<boolean>(false);
  const [downloadLink, setDownloadLink] = useState<string | null>(null);
  const downloadref = useRef<HTMLAnchorElement>(null);

  const handleTrim = () => {
    if (videoUrl) {
      setProcessing(true);
      videoTrimApi(videoUrl.substring(1)).then((data) => {
        setDownloadLink(data.data.file_url);
        setProcessing(false);
      });
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
        <Spin />
      ) : (
        <Button onClick={handleTrim}>영상 편집 및 다운로드</Button>
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
