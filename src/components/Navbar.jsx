import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={NavLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.700' }} _activeLink={{ bg: 'teal.700' }}>
            Home
          </Link>
          <Link as={NavLink} to="/employees" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.700' }} _activeLink={{ bg: 'teal.700' }}>
            Employees
          </Link>
          <Link as={NavLink} to="/shifts" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.700' }} _activeLink={{ bg: 'teal.700' }}>
            Shifts
          </Link>
          <Link as={NavLink} to="/contracts" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.700' }} _activeLink={{ bg: 'teal.700' }}>
            Contracts
          </Link>
          <Link as={NavLink} to="/roster-length" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'teal.700' }} _activeLink={{ bg: 'teal.700' }}>
            Roster Length
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;