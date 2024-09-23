import Home from "./home/page";
import Wrapper from "./layout-wrapper/wrapper";

export const metadata = {
  title: "Home | LaLouge - Real Estate",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
