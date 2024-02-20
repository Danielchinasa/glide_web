import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import PieBasicChart2 from '../../charts/nvd3-chart/chart/PieBasicChart2';
import LineChart from '../../charts/nvd3-chart/chart/LineChart';

const dashSalesData = [
  { title: 'Gross Total Revenue', amount: 'N3,550,000', icon: 'icon-arrow-up text-c-green', value: 10, class: 'progress-c-theme' },
  { title: 'Driver Earnings', amount: 'N500,000', icon: 'icon-arrow-up text-c-green', value: 10, class: 'progress-c-theme2' },
  { title: 'Deductions from Promotions', amount: 'N-50,000', icon: 'icon-arrow-down text-c-red', value: 70, color: 'progress-c-theme' }
];

const dashSalesData3 = [
  { title: 'Charge per KM (Private)', amount: 'N400', icon: 'icon-edit text-c-grey', value: 10, class: 'progress-c-theme' },
  { title: 'Charge per KM (Shared)', amount: 'N300', icon: 'icon-edit text-c-grey', value: 10, class: 'progress-c-theme2' }
];

const BasicButton = () => {
  return (
    <React.Fragment>
      <Col md={12} xl={12}>
        <h6 className="mb-1">This Month</h6>
      </Col>
      <Row>
        {dashSalesData.map((data, index) => {
          return (
            <Col key={index} xl={6} xxl={4}>
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

        <Col md={6} xl={4}>
          <Card>
            <Card.Body className="border-bottom">
              <div className="col-auto">
                <i className="feather icon-info f-30 text-c-grey float-end" />
              </div>
              <div className="row d-flex align-items-center">
                <div className="col">
                  <span className="d-block text-uppercase">Net Total Earnings from Trips</span>
                  <h3 className="f-w-300">N3,000,000</h3>
                </div>
              </div>
            </Card.Body>
            <Card.Body className="text-center">
              <PieBasicChart2 />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={8}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Earnings Trend</Card.Title>
            </Card.Header>
            <Card.Body>
              <LineChart />
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={12}>
          <h6 className="mb-1"> Pricing</h6>
        </Col>
        {dashSalesData3.map((data, index) => {
          return (
            <Col key={index} xl={4}>
              <Card>
                <Card.Body>
                  <h6 className="mb-4">{data.title}</h6>
                  <div className="row d-flex align-items-center">
                    <div className="col-7">
                      <h3 className="f-w-300 d-flex align-items-center m-b-0">{data.amount}</h3>
                    </div>
                    <div className="col-5 text-end">
                      <p className="m-b-0">
                        <i className={`feather ${data.icon} f-20 m-r-5`} />
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </React.Fragment>
  );
};

export default BasicButton;
