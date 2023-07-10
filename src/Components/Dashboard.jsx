import { Heading, Container, Box, SimpleGrid, Card, CardFooter, CardHeader, Button, CardBody } from "@chakra-ui/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCross, faIndianRupeeSign, faReceipt, faBox, faChurch, faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Styles/Styles.css';

library.add(faCross, faIndianRupeeSign, faReceipt, faBox, faChurch, faTableColumns);

export default function Dashboard() {
  return (
    <div>
      <Container className="container1" maxWidth="90%">
        <Heading className="heading1">Reports</Heading>
        <Heading size="md" className="heading1"> Generate New Report </Heading>     
        
        <Box as="section" className="box1">
          <SimpleGrid templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card align="center">
              <CardHeader>
                <FontAwesomeIcon icon={faCross} size="2xl" />
              </CardHeader>
              <CardBody>
                <Heading size='md'>Grave Sites</Heading>
              </CardBody>
              <CardFooter>
                <Button borderRadius='100px' colorScheme='green'>Select</Button>
              </CardFooter>
            </Card>

            <Card align="center">
              <CardHeader>
                <FontAwesomeIcon icon={faReceipt} size="2xl" />
              </CardHeader>
              <CardBody>
                <Heading size='md'>Payment History</Heading>
              </CardBody>
              <CardFooter>
                <Button borderRadius='100px' colorScheme='green'>Select</Button>
              </CardFooter>
            </Card>

            <Card align="center">
              <CardHeader>
                <FontAwesomeIcon icon={faIndianRupeeSign} size="2xl" />
              </CardHeader>
              <CardBody>
                <Heading size='md'>Payment Types</Heading>
              </CardBody>
              <CardFooter>
                <Button borderRadius='100px' colorScheme='green'>Select</Button>
              </CardFooter>
            </Card>

            <Card align="center">
              <CardHeader>
                <FontAwesomeIcon icon={faBox} size="2xl" />
              </CardHeader>
              <CardBody>
                <Heading size='md'>Burial Types</Heading>
              </CardBody>
              <CardFooter>
                <Button borderRadius='100px' colorScheme='green'>Select</Button>
              </CardFooter>
            </Card>

            <Card align="center">
              <CardHeader>
                <FontAwesomeIcon icon={faChurch} size="2xl" />
              </CardHeader>
              <CardBody>
                <Heading size='md'>Funeral Homes</Heading>
              </CardBody>
              <CardFooter>
                <Button borderRadius='100px' colorScheme='green'>Select</Button>
              </CardFooter>
            </Card>

            <Card align="center">
              <CardHeader>
                <FontAwesomeIcon icon={faTableColumns} size="2xl" />
              </CardHeader>
              <CardBody>
                <Heading size='md'>Section Codes</Heading>
              </CardBody>
              <CardFooter>
                <Button borderRadius='100px' colorScheme='green'>Select</Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Box>
      
         <Heading size="md" className='heading1'> Recently Generated </Heading>

        <Box as="section" maxWidth="90%">
        <SimpleGrid columns={4} spacing={20} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
          <Card className="card1">
            <CardHeader>
              <FontAwesomeIcon icon={faCross} size="lg" />
            </CardHeader>
            <CardBody>
              <Heading size='sm'>Grave Site Report</Heading>
            </CardBody>
            <CardFooter>
              <table>
                <tr>
                  <td>Owner: Mrs.Jack Karmer</td>
                </tr>
                <tr>
                  <td>Date: All</td>
                </tr>
              </table>
            </CardFooter>
          </Card>

          <Card width="325px">
            <CardHeader>
              <FontAwesomeIcon icon={faReceipt} size="lg" />
            </CardHeader>
            <CardBody>
              <Heading size='sm'>Payment History Report</Heading>
            </CardBody>
            <CardFooter>
              <table>
                <tr>
                  <td>Posting Date: 10/1/2022-12/31/2022</td>
                </tr>
                <tr>
                  <td>Payment Type: All</td>
                </tr>
              </table>
            </CardFooter>
          </Card>

          <Card width="325px">
            <CardHeader>
              <FontAwesomeIcon icon={faCross} size="lg" />
            </CardHeader>
            <CardBody>
              <Heading size='sm'>Grave Site 01-1001-01.0</Heading>
            </CardBody>
            <CardFooter>
              <table>
                <tr>
                  <td>Buried Person: All</td>
                </tr>
                <tr>
                  <td>Date: 12/31/2022 - 02/07/2022</td>
                </tr>
              </table>
            </CardFooter>
          </Card>
        
          <Card width="325px">
            <CardHeader>
              <FontAwesomeIcon icon={faBox} size="lg" />
            </CardHeader>
            <CardBody>
              <Heading size='sm'>Burial Types</Heading>
            </CardBody>
            <CardFooter>
              <table>
                <tr>
                  <td>All Burial Types</td>
                </tr>
                <tr>
                <td></td>
                </tr>
              </table>
            </CardFooter>
          </Card>
          </SimpleGrid>
        </Box>
      </Container>
    </div>
  )
}
