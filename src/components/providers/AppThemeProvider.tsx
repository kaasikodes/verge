"use client";

import {
  ChakraProvider,
  extendBaseTheme,
  theme as chakraTheme,
  ChakraProviderProps,
} from "@chakra-ui/react";
import React from "react";

type TProps = {
  children: React.ReactNode;
};

const { Button, Input, Skeleton, Card, Heading , Drawer} = chakraTheme.components;

const theme: ChakraProviderProps["theme"] = extendBaseTheme({
  // TODO: Setup fonts, colors, etc.
  // TODO: Ensure the types are correct for the passed in object
  components: {
    Button,
    Input,
    Skeleton,
    Card,
    Heading,
    Drawer  
  },
});

const AppThemeProvider: React.FC<TProps> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default AppThemeProvider;
