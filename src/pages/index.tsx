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
    </Layout>
  );
};

export default Home;
