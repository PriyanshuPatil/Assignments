import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Flex, Grid, Heading, Image, Input, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

const Homepage = () => {
    return (
        <>

            <Grid gridTemplateColumns={'repeat(2,1fr)'} gap='50px' w={"90%"} m={"auto"} pt='60px'>

                <Box p={'60px 40px'} ml='90px'>
                    <Heading fontSize={'50px'}>Getting you <Box display={'inline'} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} border={"3px solid white"} padding={'16px'} w={"60px"} h={"60px"} borderRadius={"50%"} backgroundColor={"#db0731"} fontSize={'15px'} color={'white'} textAlign={'center'} fontWeight={'600'}>4.9</Box> </Heading>
                    <Heading fontSize={'50px'} mt='10px'><Image src={"https://img.freepik.com/premium-photo/woman-red-tshirts-posing-modern-style-isolated-background-unaltered_561613-22288.jpg?w=996"} display={'inline'} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} border={"3px solid white"} padding={'2px'} w={"60px"} h={"60px"} borderRadius={"50%"} backgroundColor={"#db0731"} fontSize={'15px'} color={'white'} textAlign={'center'} fontWeight={'600'}></Image> where you</Heading>

                    <Heading fontSize={'50px'} mt='10px'>want to study.

                        <Image src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTl6gowFV-XZsBw59C-3UfHGRYVxPFXe2_8eVndU-L0UD0G-0Tx' w={'80px'} h={'80px'} ml='330px' mt={'-70px'} />
                    </Heading>
                    {/* https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTl6gowFV-XZsBw59C-3UfHGRYVxPFXe2_8eVndU-L0UD0G-0Tx */}
                    <Box w={'70%'} fontWeight={'600'} color={'gray.600'} mt='10px'>Everything you need to know for your study abroad journey: from first search to your first day on campus.</Box>
                    <Tabs w='80%' position="relative" variant="unstyled" boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}>
                        <TabList p={'10px'} mt='20px'>
                            <Tab>Courses</Tab>
                            <Tab>Services</Tab>
                        </TabList>
                        <TabIndicator
                            mt="-1.5px"
                            height="2px"
                            bg="blue.500"
                            borderRadius="1px"
                        />
                        <TabPanels>
                            <TabPanel >
                                <Box border={"2px solid gray"} borderRadius={'10px'} padding={'3px'} color={'blackAlpha.700'} fontWeight={500}>
                                    <Box fontSize={'12px'} marginLeft={'15px'}>Subject</Box>
                                    <Input fontSize={'12px'} focusBorderColor={"transparent"} mt='-10px' border={'0px'} placeholder='what do you want to study ?' />
                                </Box>
                                <Box border={"2px solid gray"} color={'blackAlpha.700'} fontWeight={500} borderRadius={"10px"} mt='10px' padding={'3px'}>
                                    <Box fontSize={'12px'} marginLeft={'15px'}>Where</Box>
                                    <Input fontSize={'12px'} focusBorderColor={"transparent"} mt='-10px' border={'0px'} placeholder='Your ideal country / region or institution' />
                                </Box>
                            </TabPanel>
                            <TabPanel>
                                <Box border={"2px solid gray"} borderRadius={'10px'} padding={'3px'} color={'blackAlpha.700'} fontWeight={500}>
                                    <Box fontSize={'12px'} marginLeft={'15px'}>Topic</Box>
                                    <Input fontSize={'12px'} focusBorderColor={"transparent"} mt='-10px' border={'0px'} placeholder='what do you want to learne ?' />
                                </Box>

                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
                <Box p={'40px'} mr='50px'>
                    <Image w={'80%'}   boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} borderRadius={'3%'} src="https://i.postimg.cc/ZKBycS2x/landingright-5b5e9ec0.png" />
                </Box>
            </Grid>
        </>
    )
}

export default Homepage