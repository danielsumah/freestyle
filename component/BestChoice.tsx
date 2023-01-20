
import { ComponentState, ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, Spacer, Button } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { SearchIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import fourKHouse from 'public/FourKHouse.svg'
import threeKHouse from 'public/threeKHouse.svg'
import sixKHouse from 'public/sixKHouse.png'

interface FeatureProps {
  title: string;
  location: string;
  money: number;
  icon: ComponentState;
}

const Feature = ({ title, location, money, icon }: FeatureProps) => {
  return (
    
    <Stack>
      <Flex
        
        >
        <Image src={icon} alt={title}/>
      </Flex>
      <Text color='#1CA5AE' fontSize={'2xl'} fontWeight={600}>${money}K</Text>
      <Text fontSize='30' fontWeight={500}>{title}</Text>
      <Text fontSize='20' fontWeight={500} color={'gray.600'}>{location}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box px={16} mt={12}>
    
        <Flex >
            <Box py={4}>
                <Heading fontSize='21px' color='#1CA5AE'>Best Choices  </Heading>
                <Heading fontSize='30px' py={4}>Popular Residencies</Heading>
            </Box>

            <Spacer/>
        
            <Button mt={4} leftIcon={<SearchIcon />}  colorScheme='teal' bg='#03373A' variant='solid'>
                Search by Location
            </Button>
        </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={fourKHouse}
          money={4000}
          title={'Lifetime Support'}
          location={
            'Abuja Lagos'
          }
        />
        <Feature
          icon={threeKHouse}
          money={3500}
          title={'Unlimited Donations'}
          location={
            'Abuja Lagos'
          }
        />
        <Feature
          icon={sixKHouse}
          money={6000}
          title={'Instant Delivery'}
          location={
            'Abuja Lagos'
          }
        />
      </SimpleGrid>
    </Box>
  );
}