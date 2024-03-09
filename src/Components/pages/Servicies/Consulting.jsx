import styled from "styled-components";
import Lottie from "lottie-react";
import consulting from "../../../Lottie/consulting.json";

const Consulting = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full absolute top-0  ease transform duration-300 transition-all ${
        subPage === "consulting" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      }`}
    >
      <Lottie animationData={consulting} />
      <h1>
        At AdVision agency, we give you the means to achieve your ambitions
      </h1>
      <h3>You want to grow !</h3>
      <p>
        Communicate intelligently with your targets and get support from our
        communication and strategy consulting agency!
      </p>
      <p>
        You are looking for: an external and professional view of your brand and
        your market, a partnership of trust with an experienced, friendly team
        experienced in communication techniques, a new creative, innovative and
        original approach... solutions to develop your brand and a real
        communication strategy ?
      </p>
      <h2>What we do for you</h2>
      <ul>
        <li>audit, benchmarking and monitoring</li>
        <li>communication strategy </li>
        <li>support & advice</li>
        <li>campaign management</li>
        <li>positioning</li>
        <li>multimedia advertising concepts and campaigns</li>
        <li>marketing analysis</li>
        <li>purchase of spaces</li>
      </ul>
    </Container>
  );
};

export default Consulting;
const GrayText = styled.p`
  color: gray;
  font-size: 16px;
`;
const Heading = styled.p`
  color: black;
  font-size: 24px;
  padding-top: 4px;
  padding-bottom: 4px;
`;
const ContentText = styled.p`
  color: gray;
  font-size: 18px;
`;
const Content = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c084fc;
  }
`;
const Container = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c084fc;
  }
`;
