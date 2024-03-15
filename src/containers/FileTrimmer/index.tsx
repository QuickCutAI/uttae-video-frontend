import VideoTrimmer from "@/components/VideoTrimmer";
import VideoUploader from "@/components/VideoUploader";
import { Flex, Layout, Spin, UploadFile, Image } from "antd";
import React, { useState } from "react";

const FileTrimmer = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  return (
    <Flex style={{ padding: 20 }} vertical align="center">
      <Image src="/assets/qai.svg" />
      <p>비디오에서 필요 없는 부분을 자동으로 없애 보세요!</p>
      <VideoUploader fileList={fileList} setFileList={setFileList} />
      {fileList.length > 0 && (
        <VideoTrimmer fileList={fileList} setFileList={setFileList} />
      )}
    </Flex>
  );
};

export default FileTrimmer;
