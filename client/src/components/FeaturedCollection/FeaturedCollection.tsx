import useRequest from "../../hooks/useRequest";
import { TProduct } from "../../interfaces/product.interface";
import ProductCard from "../ProductCard/ProductCard";
import {
  Collection,
  Container,
  Img,
  Title,
  Wrapper,
} from "./FeaturedCollection.styled";

const FeaturedCollection = () => {
  const { data, isLoading, isError } = useRequest<TProduct[]>(
    "products",
    "/api/products"
  );

  return (
    <Container>
      <Title>FEATURED COLLECTION</Title>
      <Wrapper>
        {
          // TODO: Add some qoute here and button link
        }
        <Img src="/images/pexels-jimmy-jimmy-1484808.jpg" alt="" />
      </Wrapper>

      <Collection>
        {data?.map((product, index) =>
          index < 8 ? (
            <ProductCard
              _id={product._id}
              key={product._id}
              title={product.title}
              image={`http://localhost:5000/images${product.image}`}
              price={product.price}
            />
          ) : null
        )}
      </Collection>
      <Collection>
        {data?.map((product, index) =>
          index > 7 && index < 16 ? (
            <ProductCard
              _id={product._id}
              key={product._id}
              title={product.title}
              image={`http://localhost:5000/images${product.image}`}
              price={product.price}
            />
          ) : null
        )}
      </Collection>
      <Wrapper>
        <Img src="/images/pexels-rfstudio-3819775.jpg" alt="" />
      </Wrapper>
    </Container>
  );
};

export default FeaturedCollection;
