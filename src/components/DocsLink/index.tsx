import { Button, Flex } from "antd";
import { useRouter } from "next/router";

const DocsLink = () => {
  const router = useRouter();

  return (
    <Flex vertical align="center">
      <div
        style={{
          textAlign: "center",
        }}
      >
        아래 설문을 통해 여러분의 의견을 남겨 주세요.
        <br />
        QuickCut AI는 더 좋은 서비스를 위해 항상 노력하고 있습니다.
        <br />
        설문 조사는 약 3분 소요됩니다.
      </div>
      <Button
        type="primary"
        onClick={() =>
          window.open("https://forms.gle/LVdBZuCQ16zZJ3Zy5", "_blank")
        }
      >
        설문조사 바로가기
      </Button>
    </Flex>
  );
};

export default DocsLink;
