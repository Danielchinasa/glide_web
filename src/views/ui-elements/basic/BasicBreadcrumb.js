import React from 'react';
import { Row, Col, Card, Tab, Table, Badge, Tabs } from 'react-bootstrap';
import Avatar from 'react-avatar';
const dashSalesData = [
  { title: 'Total Drivers', amount: '55', icon: 'icon-arrow-up text-c-green', value: 10, class: 'progress-c-theme' },
  { title: 'Active Drivers', amount: '20', icon: 'icon-arrow-up text-c-green', value: 10, class: 'progress-c-theme2' },
  { title: 'Pending Approvals', amount: '30', icon: 'icon-arrow-up text-c-green', value: 70, color: 'progress-c-theme' },
  { title: 'Approved Drivers', amount: '25', icon: 'icon-arrow-up text-c-green', value: 70, color: 'progress-c-theme' }
];

const BasicBreadcrumbPagination = () => {
  return (
    <React.Fragment>
      <Col md={12} xl={12}>
        <h6 className="mb-1"> Drivers</h6>
      </Col>
      <Row>
        {dashSalesData.map((data, index) => {
          return (
            <Col key={index} xl={4} xxl={3}>
              <Card>
                <Card.Body>
                  <h6 className="mb-4">{data.title}</h6>
                  <div className="row d-flex align-items-center">
                    <div className="col-7">
                      <h3 className="f-w-300 d-flex align-items-center m-b-0">{data.amount}</h3>
                    </div>
                    <div className="col-5 text-end">
                      <p className="m-b-0 ">
                        <label className="label theme-bg2 success-color f-14 f-w-400 float-end">
                          <i className={`feather ${data.icon} f-20`} />
                          {data.value}%
                        </label>
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        <Tabs defaultActiveKey="home">
          <Tab eventKey="home" title="Approved Drivers">
            <Table responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Vehicle</th>
                  <th>Vehicle Plate</th>
                  <th>Rating</th>
                  <th>Successful Trips</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Avatar googleId="118096717852922241760" size="20" round={true} /> App Update v2.3
                  </td>
                  <td>Toyota Camry</td>
                  <td>
                    <Badge bg="info" className="ms-1 text-dark">
                      BWR236GJ
                    </Badge>
                  </td>

                  <td>12.12.23</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>
                    <Avatar googleId="118096717852922241760" size="20" round={true} /> New Week Ride
                  </td>
                  <td>Toyota Camry</td>
                  <td>
                    <Badge bg="info" className="ms-1 text-dark">
                      BWR236GJ
                    </Badge>
                  </td>

                  <td>12.12.23</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>
                    <Avatar googleId="118096717852922241760" size="20" round={true} /> Karis Atanda
                  </td>
                  <td>Toyota Camry</td>
                  <td>
                    <Badge bg="info" className="ms-1 text-dark">
                      BWR236GJ
                    </Badge>
                  </td>

                  <td>12.12.23</td>
                  <td>12</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="profile" title="Denied Drivers">
            <Table responsive>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Frequency</th>
                  <th>Set Date</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Avatar googleId="118096717852922241760" size="20" round={true} /> App Update v2.3
                  </td>
                  <td>
                    <Badge bg="info" className="ms-1 text-dark">
                      ACTIVE
                    </Badge>
                  </td>
                  <td>Once</td>
                  <td>12.12.23</td>
                  <td>edit/update</td>
                  <td>
                    <Card.Text className="text-danger">Delete</Card.Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Avatar googleId="118096717852922241760" size="20" round={true} /> New Week Ride
                  </td>
                  <td>
                    <Badge bg="info" className="ms-1 text-dark">
                      ACTIVE
                    </Badge>
                  </td>
                  <td>Weekly</td>
                  <td>12.12.23</td>
                  <td>edit/update</td>
                  <td>
                    <Card.Text className="text-danger">Delete</Card.Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Avatar googleId="118096717852922241760" size="20" round={true} /> Karis Atanda
                  </td>
                  <td>
                    <Badge bg="info" className="ms-1 text-dark">
                      ACTIVE
                    </Badge>
                  </td>
                  <td>Weekly</td>
                  <td>12.12.23</td>
                  <td>edit/update</td>
                  <td>
                    <Card.Text className="text-danger">Delete</Card.Text>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="pending" title="Pending Approval">
            <Table responsive>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Frequency</th>
                  <th>Set Date</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Avatar googleId="118096717852922241760" size="20" round={true} /> App Update v2.3
                  </td>
                  <td>
                    <Badge bg="info" className="ms-1 text-dark">
                      ACTIVE
                    </Badge>
                  </td>
                  <td>Once</td>
                  <td>12.12.23</td>
                  <td>edit/update</td>
                  <td>
                    <Card.Text className="text-danger">Delete</Card.Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Avatar googleId="118096717852922241760" size="20" round={true} /> New Week Ride
                  </td>
                  <td>
                    <Badge bg="info" className="ms-1 text-dark">
                      ACTIVE
                    </Badge>
                  </td>
                  <td>Weekly</td>
                  <td>12.12.23</td>
                  <td>edit/update</td>
                  <td>
                    <Card.Text className="text-danger">Delete</Card.Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Avatar googleId="118096717852922241760" size="20" round={true} /> Karis Atanda
                  </td>
                  <td>
                    <Badge bg="info" className="ms-1 text-dark">
                      ACTIVE
                    </Badge>
                  </td>
                  <td>Weekly</td>
                  <td>12.12.23</td>
                  <td>edit/update</td>
                  <td>
                    <Card.Text className="text-danger">Delete</Card.Text>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Row>
    </React.Fragment>
  );
};

export default BasicBreadcrumbPagination;
