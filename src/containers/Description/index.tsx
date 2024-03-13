import { Space, Typography } from "antd";

const Description = () => {
  const { Title } = Typography;

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <div>
        <Title level={2}>QuickCut AI란?</Title>
        <div>
          편집 작업 중 시간이 제일 많이 가는 컷 편집을 도와 줍니다.
          <br />
          소리가 없는 구간을 자동으로 인식해서 잘라 줍니다.
          <br />
          파일 업로드만으로 편집 시간을 단축해 줍니다.
          <br />
        </div>
      </div>

      <div>
        <Title level={2}>이런 분들께 추천해요</Title>
        <ul>
          <li>인터뷰 영상 편집자</li>
          <li>라이브 스트리머</li>
          <li>팟캐스트 형식의 콘텐츠 크리에이터</li>
          <li>
            <b>편집 시간 단축을 원하시는 분</b>
          </li>
        </ul>
      </div>

      <div>
        <Title level={2}>이런 분들께 추천하지 않아요</Title>
        <ul>
          <li>여행 유튜버</li>
          <li>예능 형식의 편집자</li>
          <li>ASMR 크리에이터</li>
          <li>
            <b>야외 혹은 동적인 촬영이 많은 경우</b>
          </li>
        </ul>
      </div>
    </Space>
  );
};

export default Description;
