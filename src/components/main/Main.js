import React, { useContext } from 'react';
import { Layout, Row, Col } from 'antd';

import { WebSceneView } from '../scene/Scene';
import { Panel } from '../panel/Panel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { store } from '../../store/store';
import './Main.css';

const { Header, Content } = Layout;

function Main() {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  return (
    <Layout>
      <Header className="headerStyle">
        <span className="iconSpan">
          <div className="weatherIcon">
            <div className="sunny">
              <div className="inner"></div>
            </div>
          </div>
        </span>
        <span className="title">3D Weather App</span>
        <span className="iconSpan">
          <div className="weatherIcon">
            <div className="tstorms">
              <div className="inner"></div>
            </div>
          </div>
        </span>
        <span className="headerRightSide">
          <span className="iconSpan">
            <div className="weatherIcon">
              <div className="cloudy">
                <div className="inner"></div>
              </div>
            </div>
          </span>
          <span>
            <a
              href="https://twitter.com/ialixandroae"
              target="_blank"
              className="twitterTag"
            >
              <FontAwesomeIcon icon={faTwitter} size="1x" />
              ialixandroae
            </a>
            <span className="iconSpanRight">
              <div className="weatherIcon">
                <div className="snow">
                  <div className="inner"></div>
                </div>
              </div>
            </span>
          </span>
        </span>
      </Header>
      <Layout>
        <Content>
          <Row gutter={[0, 0]}>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 20 }}
              xl={{ span: 20 }}
              className="leftCol"
            >
              <WebSceneView />
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 4 }}
              xl={{ span: 4 }}
              className="rightCol"
            >
              <Row className="rightCol">
                {globalState.state.data.length === 0 ? <div></div> : <Panel />}
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Main;
