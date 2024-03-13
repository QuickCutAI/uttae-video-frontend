import Description from "@/containers/Description";
import FileTrimmer from "@/containers/FileTrimmer";
import { Layout } from "antd";

const Home = () => {
  return (
    <Layout
      style={{
        padding: 48,
      }}
    >
      <FileTrimmer />
      <Description />
    </Layout>
  );
};

export default Home;
