import React, { useContext } from 'react';
import { Layout, Card, Typography, Row, Col } from 'antd';
import { store } from '../../store/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
  faMapPin,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import './Panel.css';
import { getToday, getDate, getTimeFromTimestamp } from '../../helpers/helpers';

const { Title } = Typography;
const { Content } = Layout;

export const Panel = () => {
  // console.log("Render Panel");
  const globalState = useContext(store);

  return (
    <Content>
      <Card className="cardStyle" style={{ border: '0' }}>
        <article className="box weather">
          <Row>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 24 }}
              xl={{ span: 24 }}
            >
              <Title className="textColor" level={3}>
                {getToday()}
              </Title>
              <span
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FontAwesomeIcon
                  className="textColor icons"
                  icon={faCalendar}
                  size="2x"
                  style={{ marginRight: '0.5rem' }}
                />
                <Title className="textColor" level={5}>
                  {getDate()}
                </Title>
              </span>

              <span
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FontAwesomeIcon
                  className="textColor icons"
                  icon={faMapPin}
                  size="2x"
                  style={{ marginRight: '0.5rem' }}
                />
                <h1 className="textColor">
                  {globalState.state.searchArea.name}
                </h1>
              </span>

              <div className="icon bubble black">
                <div className="spin">
                  <img
                    src={`http://openweathermap.org/img/wn/${globalState.state.data[0].weather[0].icon}@2x.png`}
                  />
                </div>
              </div>

              <Title className="textColor" level={1}>
                {globalState.state.data[0].weather[0].main}
              </Title>
              <Title className="textColor" level={3}>
                {globalState.state.data[0].weather[0].description}
              </Title>
              <span className="temp textColor">
                {globalState.state.data[0].main.temp}&deg;
              </span>
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 24 }}
              xl={{ span: 24 }}
            >
              <span className="high-low textColor ">
                {globalState.state.data[0].main.temp_min}&deg;/{' '}
                {globalState.state.data[0].main.temp_max}&deg;
              </span>

              <div className="textColor descriptionText">
                Feels like {globalState.state.data[0].main.feels_like}&deg;
              </div>
              <div className="descriptionText">
                <FontAwesomeIcon
                  className="textColor icons"
                  icon={faSun}
                  size="2x"
                  style={{ marginRight: '0.5rem' }}
                />
                <span className="textColor sunriseSunset">
                  {getTimeFromTimestamp(
                    globalState.state.data[0].sys.sunrise,
                    globalState.state.data[0].timezone
                  )}
                </span>
              </div>
              <div>
                <FontAwesomeIcon
                  className="textColor icons"
                  icon={faMoon}
                  size="2x"
                  style={{ marginRight: '0.5rem' }}
                />
                <span className="textColor sunriseSunset">
                  {getTimeFromTimestamp(
                    globalState.state.data[0].sys.sunset,
                    globalState.state.data[0].timezone
                  )}
                </span>
              </div>
            </Col>
          </Row>
        </article>
      </Card>
    </Content>
  );
};
