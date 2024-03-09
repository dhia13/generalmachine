import styled from "styled-components";

const Graphics = ({ subPage }) => {
  return (
    <Container
      className={`w-full h-full absolute top-0  ease transform duration-300 transition-all ${
        subPage === "graphics" ? "left-0 opacity-1" : "left-[-100%] opacity-0"
      }`}
    >
      <h1>At AdVision, we share this “sweet” point of view!</h1>
      <p>
        To be known and recognized, it is necessary and essential to communicate
        constantly.
      </p>
      <p>
        It is by repeating the messages, by capturing the attention of your
        target regularly, by informing and reassuring your customers... that you
        will retain them and attract new ones.
      </p>
      <p>
        Studying and creating the most suitable communication solutions, these
        are the missions of our integrated graphic studio.
      </p>
      <p>
        Always keeping your communication strategy and your brand identity in
        mind, our creatives rack their brains (using coffee mugs!) to build
        inventive, attractive and impactful communication media.
      </p>
      <h1>What we offer</h1>
      <ul>
        <li>advertising concepts</li>
        <li>pads, folders</li>
        <li>catalogs, brochures</li>
        <li>packaging</li>
        <li>flyers, leaflets, posters</li>
        <li>advertisement</li>
        <li>booth cover</li>
      </ul>
    </Container>
  );
};

export default Graphics;
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
