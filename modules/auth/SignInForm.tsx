import * as React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import {
  FormControl,
  useToast,
  Input,
  Button,
  Stack,
  Flex,
  Box,
  Text,
  Link,
  Container,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useRouter } from "next/router";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

interface ISignInFormProps {
  email: string;
  password: string;
}
export default function SignInForm() {
  console.log(API_ENDPOINT);
  const router = useRouter();
  const toast = useToast();
  const initialValues: ISignInFormProps = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={({ email, password }) => {
        const postBody = { email, password };
        console.log(postBody);

        const handleSubmit = async () => {
          try {
            const response = await fetch(`${API_ENDPOINT}/seller/login`, {
              method: "POST",
              body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
              console.log("Login failed");
            }
            // const {token} = await response.json()
            // console.log(token)
            // localStorage.setItem('token', token)
            // router.push('/')
            console.log(response);
          } catch (error) {
            toast({
              title: "Login failed",
              description: `${error}`,
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }

          const response = await fetch(`${API_ENDPOINT}seller/login`, {
            method: "POST",
            headers: {
              // 'Content-Type': 'application/json',
              // "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ email, password }),
          });
          console.log(response);

          const data = await response.json();
          console.log(data);
        };
        handleSubmit();
      }}
    >
      {({ values, handleBlur, errors, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Box>
            <Flex
              direction={{ base: "column", md: "column" }}
              wrap="wrap"
              mx={{ md: "unset", base: 8 }}
              align="center"
              justify="center"
            >
              <FormControl
                w={{ base: "100%", md: "70%" }}
                mx={{ md: "2" }}
                my={4}
                flex={{ base: "1 0 100%", md: "1 0 45%" }}
              >
                <Input
                  css={{
                    padding: "30px",
                    border: "1px solid black;", // apply custom border style
                  }}
                  rounded={"none"}
                  size={"lg"}
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage name="email" />
              </FormControl>

              <FormControl
                w={{ base: "100%", md: "70%" }}
                mx={{ md: "2" }}
                my={4}
                flex={{ base: "1 0 100%", md: "1 0 45%" }}
              >
                <Input
                  css={{
                    padding: "30px",
                    border: "1px solid black;", // apply custom border style
                  }}
                  rounded={"none"}
                  placeholder="Password"
                  size={"lg"}
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <ErrorMessage name="password" />
              </FormControl>
            </Flex>

            <Box>
              <Flex
                mx={{ md: "unset", base: 8 }}
                align="center"
                color={"green.800"}
                mb={8}
                justify={"right"}
              >
                <Link fontWeight={900} mr={{ md: "15%" }}>
                  Forgot Password?
                </Link>
              </Flex>

              <Flex
                mx={{ md: "unset", base: 8 }}
                justify="center"
                pt={2}
                align="center"
              >
                <Button
                  w={{ base: "100%", md: "60%" }}
                  mx={2}
                  rounded={"none"}
                  onClick={() => handleSubmit()}
                  // w={{base: '100%', md: '100%'}}
                  loadingText="Submitting"
                  size="lg"
                  bg={"green.900"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  LogIn
                </Button>
              </Flex>

              <Stack pt={6}>
                <Text align={"center"} color="green.900" fontWeight={900}>
                  I do not have an account?{" "}
                  <Link
                    href={"/auth/sign-up"}
                    fontWeight={"extrabold"}
                    color={"#03373A"}
                  >
                    Sign Up
                  </Link>
                </Text>
              </Stack>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
