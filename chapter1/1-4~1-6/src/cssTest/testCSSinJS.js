import styled from "styled-components";

const BoxCommon = styled.div`
  width: ${(props) => (props.isBig ? 100 : 50)}px;
  height: 30px;
`;
const YellowBox = styled(BoxCommon)`
  background-color: yellow;
`;

export default function TestCSSinJS({ size }) {
  const isBig = size === "big";
  return <YellowBox isBig={isBig}>{isBig ? "큰 버튼" : "작은 버튼"}</YellowBox>;
}
