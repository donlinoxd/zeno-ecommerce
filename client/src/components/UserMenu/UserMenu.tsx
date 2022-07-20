// import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
// import cookies from "../../utils/cookie.utils";
// import jwt_decode from "jwt-decode";
import Heading from "../Heading/Heading";
import {
  Button,
  CartContainer,
  CartSlider,
  Container,
  Email,
  Img,
  Item,
  Profile,
  Signout,
  Text,
  Wrapper,
} from "./UserMenu.styled";
// import { removeSession } from "../../redux/actions/user.action";

// interface TSession {
//   _id: string;
//   userId: string;
//   userAgent: string;
//   valid: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

const UserMenu = () => {
  const { userData } = useAppSelector((state) => state.user);
  // const dispatch = useAppDispatch();

  // const refreshToken = cookies.get("x-refresh") as string;
  // const { _id } = jwt_decode<TSession>(refreshToken);

  return (
    <Container>
      {userData ? (
        <Wrapper>
          <Profile>
            {
              // TODO: Add upload profile image functionality
            }
            <Img src="/images/id-01.jpg" alt="profile picture" />
            <span>{userData.firstName + " " + userData.lastName}</span>
            <Email>{userData.email}</Email>
            {
              // FIXME: Circular reference error! get this in axios interceptor method.
            }
            {/* <Signout onClick={() => dispatch(removeSession(_id))}>
              Sign out
            </Signout> */}
            {/* <Signout>Sign out</Signout> */}
          </Profile>

          {/* <CartContainer>
            <Heading>Your Cart.</Heading>
            <CartSlider>
              {
                // TODO: Get items from redux store cart
              }
              <Item>
                <img src="/images/product1.jpg" alt="item name" />
              </Item>
              <Item>
                <img src="/images/product1.jpg" alt="item name" />
              </Item>
              <Item>
                <img src="/images/product1.jpg" alt="item name" />
              </Item>
            </CartSlider>
          </CartContainer> */}
        </Wrapper>
      ) : (
        <Wrapper>
          <Text>Join now and add items to your cart.</Text>
          <Button to="/login">Login</Button>
          <Button to="/register" secondary>
            Sign up
          </Button>
        </Wrapper>
      )}
    </Container>
  );
};

export default UserMenu;
