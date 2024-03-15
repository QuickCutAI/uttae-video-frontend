import Description from "@/containers/Description";
import FileTrimmer from "@/containers/FileTrimmer";
import { ConfigProvider, Layout, theme } from "antd";

const { Content } = Layout;

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#692498",
        },
      }}
    >
      <Layout>
        <Content
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            padding: 16,
          }}
        >
          <FileTrimmer />
          <Description />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default Home;
