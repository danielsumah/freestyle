
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Spacer,
    Select,
    Heading,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  import { CompanyName } from '../../CompanyName';
import { useState } from 'react';
import { useRouter } from 'next/router';


  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Rent',
      href: '#'
    },
    {
      label: 'Buy',
      href: './buy',
    },
    {
      label: 'Sell',
      href: '#',
    },
    {
      label: 'Agents',
      href: '#',
    },
  ];
  export default function Nav() {
    const { isOpen, onToggle } = useDisclosure();
    const router = useRouter()
   console.log(router.route)
    
    
    return (
      <Box   >
        <Flex
          
          minH={'60px'}
          py={{ base: 2 }}
          mx={{base: 6, md:24}}
          mt={8}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
  
  
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Box
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              {CompanyName}
            </Box>
          </Flex>
  
  
          <Flex display={{ base: 'none', md: 'flex' }} pl={8} ml={20} >
            <DesktopNav />
          </Flex>
          <Spacer/>
  
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <SelectAndContact />
          </Flex>
         
          
  
          <Flex
            //flex={{ base: 1, md: '1' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon mt={1} w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity >
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}  ml={28}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={8}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: 'teal',
                  }}
                  _active={{
                    borderBottom:"2px dashed blue"
                  }}
                  >
                    <Heading  whiteSpace="nowrap" fontStyle={'normal'} color={'#011213'} fontWeight={500} fontSize={15} >
                    {navItem.label}
                    </Heading>
                  
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
  
  
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
          <Box ml={4}
          
          >
            
            {NAV_ITEMS.map((navItem) => (
              
            <MobileNavItem  key={navItem.label} {...navItem} />           
            ))}
  
            <Button
              // my={4}
              mr={4}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'#03373A'}
              // href={'#'}
              _hover={{
                bg: '#1CA5AE',
              }}>
              Contact
            </Button>
  
              <Select variant='unstyled' size='sm' w={20} >
                <option value='option1'>ENG</option>
                <option value='option2'>Option 2</option>  
              </Select>
                
          </Box>
        
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4}  onClick={children && onToggle}>
        <Flex
  
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  
  const SelectAndContact = () => {
    
    const router = useRouter()
    const status = router.route === '/auth/login' ?  'sign-up' : 'sign in'
    function handleNavPush(){
      if(status === 'sign-up'){
        router.push('/auth/sign-in')
      }else{
        router.push('/auth/sign-up')
      }
    }
    return(
      <Stack
      flex={{ base: 1, md: 0 }}
      justify={'flex-end'}
      direction={'row'}
      spacing={6}
      
    >
    
      
     <Link onClick={() => handleNavPush()}> 
      <Heading mt={2}
     
       as={'h5'} whiteSpace="nowrap" fontWeight={600} fontSize={16}>{status}</Heading>
     </Link>
     
  
      
  
      <Button
        
        rounded={'none'}
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'#03373A'}
        onClick={() => router.push('/contact')}
        _hover={{
          bg: '#1CA5AE',
        }}>
        Contact
      </Button>
    </Stack> 
  
    )
  }
  
  
  
  
  