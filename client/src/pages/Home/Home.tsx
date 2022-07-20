import Banner from "../../components/Banner/Banner";
import FeaturedCollection from "../../components/FeaturedCollection/FeaturedCollection";
import Newsletter from "../../components/Newsletter/Newsletter";
import Qoute from "../../components/Quote/Qoute";
import { Container } from "./Home.styled";

const Home = () => {
  return (
    <Container>
      <Banner />
      <Qoute />
      <FeaturedCollection />
      <Newsletter />
    </Container>
  );
};

export default Home;
