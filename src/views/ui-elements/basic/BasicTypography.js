import React, { useState } from 'react';
import { Row, Col, Tabs, Tab, Card, Table, Badge } from 'react-bootstrap';
import Switch from 'react-switch';
import Avatar from 'react-avatar';

const BasicTypography = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (isChecked) => {
    setChecked(isChecked);
  };
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Tabs defaultActiveKey="home">
            <Tab eventKey="home" title="Notifications Settings">
              <Row>
                <Col lg={6} md={6}>
                  <h4>Ride Alerts</h4>
                  <Card.Text className="text-muted mb-4">Get notified of your scheduled rides</Card.Text>
                </Col>
                <Col lg={6} md={6}>
                  <Switch onChange={handleChange} checked={checked} />
                </Col>
                <Col lg={6} md={6}>
                  <h4>Nearby Rides Alert</h4>
                  <Card.Text className="text-muted mb-4"> Get notified of your Nearby rides</Card.Text>
                </Col>
                <Col lg={6} md={6}>
                  <Switch onChange={handleChange} checked={checked} />
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="profile" title="Scheduled In-App Campaigns">
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
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BasicTypography;
