import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { HStack, Icon, Stack, Box, Text, Heading } from "@chakra-ui/react";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
  const navLinks = [
    {
      icon: RiDashboardFill,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transaction",
      link: "/transactions",
    },
  ];
  return (
    <Stack justify={"space-between"} boxShadow="lg" maxWidth="256px" h="100vh">
      <Box>
        <Heading textAlign={"center"} fontSize={"20px"} pt={"56px"} as={"h1"}>
          @CRYPTO-ANALYSIS
        </Heading>
        <Box mt={"6"} mx={"3"}>
          {navLinks.map((nav) => (
            <HStack
              borderRadius={"10px"}
              mx={"12px"}
              key={nav.text}
              py={"3"}
              px={"4"}
              _hover={{ bg: "#F3F3F7", color: "#171707" }}
              color={"#797E82"}
            >
              <Icon as={nav.icon} />
              <Text fontSize={"14px"} fontWeight={"medium"} color={"#797E82"}>
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box mt={"6"} mx={"3"} mb={"6"}>
        <HStack
          borderRadius={"10px"}
          mx={"12px"}
          py={"3"}
          px={"4"}
          _hover={{ bg: "#F3F3F7", color: "#171707" }}
          color={"#797E82"}
        >
          <Icon as={BiSupport} />
          <Text fontSize={"14px"} fontWeight={"medium"} color={"#797E82"}>
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Sidenav;
