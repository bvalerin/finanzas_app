import React from 'react';
import { Button, Input, Tooltip, Row, Col } from 'antd';

import { MailOutlined, InfoCircleOutlined } from '@ant-design/icons';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Controla tus finanzas personales',
    content: 'FacturacionApp es una aplicacion con la cual puedes llevar control de tus finanzas, ingresos, gastos de una forma facil y divertida.',
  },
  {
    key: '2',
    title: 'Work better together. Schedule meetings',
    content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '3',
    title: 'The best app to increase your productivity',
    content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
]

function AppHero() {
  return (
    <div id="inicio" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">

                  <Row>
                    <Col span={12}>
                      <Input
                        size="large"
                        placeholder="Ingresa tu correo"
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        suffix={
                          <Tooltip title="Ingresa tu correo electronico para empezar a controlar tus finanzas!">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                          </Tooltip>
                        }
                      />

                    </Col>
                    <Col span={12}>
                      <Button type="primary" size="large"><i className="fas fa-arrow-right"></i> Iniciar</Button>
                    </Col>
                  </Row>


                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;