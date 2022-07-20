import { useParams } from "react-router-dom";
import { Flex } from "../../components/Flex/Flex.styled";
import Heading from "../../components/Heading/Heading";
import useRequest from "../../hooks/useRequest";
import { TProduct } from "../../interfaces/product.interface";
import {
  Button,
  Container,
  Desc,
  headingcss,
  Img,
  Price,
  Wrapper,
} from "./ProductPage.styled";

const ProductPage = () => {
  const { productId } = useParams();

  const { data, isLoading, isError } = useRequest<TProduct>(
    productId as string,
    `/api/products/${productId}`,
    {},
    { onError: (error) => console.log("goes here: ", error) }
  );

  return (
    <Container>
      {isError && <div>Error on getting data</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <>
          <Wrapper>
            <Img
              src={`http://localhost:5000/images/${data.image}`}
              alt={data.title}
            />
          </Wrapper>
          <Flex direction="column">
            <Heading css={headingcss}>{data.title.toUpperCase()}</Heading>
            <Desc>{data.description}</Desc>
            <Price>$ {data.price.toFixed(2)}</Price>
            <Button>Add to Cart</Button>
          </Flex>
        </>
      )}
    </Container>
  );
};

export default ProductPage;
