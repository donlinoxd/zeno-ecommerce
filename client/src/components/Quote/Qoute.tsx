import { Author, Container, Text } from "./Qoute.styled";
import { MdRemove } from "react-icons/md";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Qoute = () => {
  return (
    <Container>
      <FaQuoteLeft />
      <Text>
        We have spent the past eight years perfecting the fit, feel and fabrics
        of our products to bring you the highest quality caps possible.
        <Author>
          <MdRemove /> Z & Z Co.
        </Author>
      </Text>
      <FaQuoteRight />
    </Container>
  );
};

export default Qoute;
