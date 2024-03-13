import VideoTrimmer from "@/components/VideoTrimmer";
import VideoUploader from "@/components/VideoUploader";
import { useProcessStore } from "@/zustand/store";
import { Flex, Layout, Spin, UploadFile } from "antd";
import { useState } from "react";
import React from "react";
import Qai from "./qai.svg";

const FileTrimmer = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  return (
    <Flex style={{ padding: 20 }} vertical align="center">
      <Qai />
      <p>비디오에서 필요 없는 부분을 자동으로 없애 보세요!</p>
      <VideoUploader fileList={fileList} setFileList={setFileList} />
      {fileList.length && (
        <VideoTrimmer fileList={fileList} setFileList={setFileList} />
      )}
    </Flex>
  );
};

export default FileTrimmer;
