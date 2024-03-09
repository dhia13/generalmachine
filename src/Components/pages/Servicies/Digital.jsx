import styled from "styled-components";

const Digital = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full absolute top-0  ease transform duration-300 transition-all ${
        subPage === "digital" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      }`}
    >
      <h1>
        And how to travel quickly other than by the WEB? ! Creating a website is
        not that difficult. Many already do!
      </h1>
      <p>
        But at AdVision agency, we create and deploy a real high-performance
        digital strategy for your brand that is consistent with all of your
        off-line communication tools.
      </p>
      <p>
        We build ergonomics capable of effectively meeting the expectations of
        your brand's users by favoring optimal browsing comfort to build
        loyalty.
      </p>
      <p>
        We support you in the “intelligent writing” of content to generate good
        SEO.
      </p>
      <p>
        We are committed to providing your users with a memorable experience by
        creating memories and emotions.
      </p>
      <p>
        And because we know that "only the result counts", we create online
        marketing tools to improve the performance of your site and optimize
        your RO
      </p>
      <h1>What we offer</h1>
      <ul>
        <li>marketing & digital strategy: advice & support</li>
        <li>creation of Profetional Wpa mobile apps</li>
        <li>development & CMS</li>
        <li>graphic design, web design & responsive design</li>
        <li>e-marketing, m-marketing and contests</li>
        <li>email campaigns</li>
        <li>referencing and visibility</li>
        <li>social media & social networks</li>
      </ul>
    </Container>
  );
};

export default Digital;
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
