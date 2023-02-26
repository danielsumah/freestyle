import { Box, Button, Container, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import contactPic from 'public/contactPic.svg'
import Image from 'next/image'
export interface iLandingPage{}

const LandingContact = (props: iLandingPage) => {
  return (
    <Box mt={24} px={[6, 16]}>
      
        <Box 
           marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between"
        >
            <Box display={{base: 'block', sm: 'none'}}>
                <Text mb={4} fontSize='3xl' color='#1CA5AE'>Contact us</Text>
                <Heading fontSize='40px'  fontWeight='600'>
                 Get Started with RealEstatery
                </Heading>
            </Box>

            <Box>
                <Image alt='home' src={contactPic}/>
            </Box>

            <Spacer/>
            
            <Box maxW='45rem' ml={4}>
                <Box display={{base: 'none', sm: 'block'}}>
                    <Text mb={4} fontSize='3xl' color='#1CA5AE'>Contact us</Text>
                    <Heading fontSize='30px'  fontWeight='500'>
                    Get Started with RealEstatery
                    </Heading>
                </Box>
                
                <Text mt={8} >Is there a problem finding your dream home? Need a guide in buying, selling or renting your first home? 
                    Need a consultation on residential issues? Just contact us. We are readily available 24/7.
                </Text>
                <Button size='lg' bg='#03373A' color='white' mt='40px' >
                    Message Now
                </Button>
            </Box>
           
            
        </Box>
    </Box>
  )
}
export default LandingContact



