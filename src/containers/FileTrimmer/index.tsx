import VideoTrimmer from "@/components/VideoTrimmer";
import VideoUploader from "@/components/VideoUploader";
import { useProcessStore } from "@/zustand/store";
import { Layout, Spin } from "antd";

const { Content } = Layout;

const FileTrimmer = () => {
  const processing = useProcessStore((state) => state.processing);

  return (
    <Content>
      <VideoUploader />
      <VideoTrimmer />
    </Content>
  );
};

export default FileTrimmer;
