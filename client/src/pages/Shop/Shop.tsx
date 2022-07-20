import Heading from "../../components/Heading/Heading";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Container, Products } from "./Shop.styled";
import { TProduct } from "../../interfaces/product.interface";
import useRequest from "../../hooks/useRequest";

const Shop = () => {
  const { data, isError, isLoading } = useRequest<TProduct[]>(
    "products",
    "/api/products",
    {},
    {}
  );

  return (
    <Container>
      <Heading>Shop.</Heading>
      {
        // TODO: Make skeleton loading
      }
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error on getting the data</div>}
      {data && (
        <Products>
          {data.map((product) => (
            <ProductCard
              key={product._id}
              image={`http://localhost:5000/images${product.image}`}
              price={product.price}
              title={product.title}
              _id={product._id}
            />
          ))}
        </Products>
      )}
    </Container>
  );
};

export default Shop;
