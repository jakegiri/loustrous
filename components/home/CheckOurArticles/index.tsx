import { useQuery } from "@apollo/client";
import { Button, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { GET_ALL_POSTS } from "../../../graphql/queries/blogs";
import useMediaQuery from "../../../lib/hooks/useMediaQuery";
import LContainer from "../../common/ui/Containers/LContainers";
import CardsForLargeScreen from "./CardsForLargeScreen";
import { CardsForSmallScreen } from "./CardsForSmallScreen";

export default function CheckOurArticles() {
  const isMinWidth992 = useMediaQuery("(min-width: 992px)");
  const headingSize = useBreakpointValue({ md: "2xl" });
  const { loading, error, data } = useQuery(GET_ALL_POSTS, {
    variables: {
      skip: 0,
      limit: 6,
    },
  });

  if (loading) return "loading";
  if (error) return "Error";

  console.log(data);
  if (!isMinWidth992) {
    return (
      <LContainer bg="grayGradient" centerContent>
        <Heading mb="120px" size={headingSize}>
          <Text color="pink.900" display="inline">
            CHECK{" "}
          </Text>
          OUR ARTICLES
        </Heading>
        <CardsForSmallScreen />
        <Button variant="pinkOutline" mt="100px" boxShadow="xxxsPink">
          Check All Blogs
        </Button>
      </LContainer>
    );
  }

  return (
    <LContainer bg="grayGradient" centerContent>
      <Heading mb="50px" size={headingSize}>
        <Text color="pink.900" display="inline">
          CHECK{" "}
        </Text>
        OUR ARTICLES
      </Heading>
      <Button variant="pinkOutline" mb="126px" boxShadow="xxxsPink">
        Check All Blogs
      </Button>
      <CardsForLargeScreen />
    </LContainer>
  );
}
