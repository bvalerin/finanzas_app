import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'Graficos de ingresos y gastos',
    content: 'Tenes control es importante, sin embargo es mas importante ver el flujo de una manera visual y de facil entendimiento.',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Multiplataforma',
    content: 'Ingresa desde tu telefono Tablet o Cedular, lleva siempre el control donde quiera que vayas.',
  },
  {
    key: '3',
    icon: <i className="fas fa-heart"></i>,
    title: 'Facil de usar',
    content: 'Aparte de los beneficios que te brinda es muy facil de usar.',
  },
]

const AppAbout = () => {
  return (
    <div id="acerca" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Acerca de</h2>
          <p>FinanzasApp, tu aliado financiero.</p>
          <p>Mejora tu situacion financiera controlando tus ingresos y gastos.</p>
        </div>
        <div className="contentHolder">
          <p >Pareciera que este ciclo se repite una vez y otra. Por eso es que pensamos que el dinero no nos alcanza y que no ganamos lo suficiente para pensar en inversiones. Pero esta situación es simplemente un hábito que hemos adquirido.

          Ahora bien, ¿existe alguna buena razón para cambiar esta conducta? La respuesta es sencilla: nuestra tranquilidad financiera. Si comenzáramos a detener los impulsos de correr a las tiendas cada vez que cobramos, tendríamos una cantidad que se podría destinar al ahorro.

          El problema es que cuando decimos ahorro, imaginamos que se requiere mucho capital y muchos años para obtener un beneficio. Sin embargo, nos sorprenderíamos de lo conveniente que es ahorrar una suma pequeña de dinero durante un par de años. Quizás nos permitiría pagar el enganche de nuestro coche o un viaje. Visto de esta manera, resulta menos agobiante dejar de consumir productos de manera desenfrenada. Ya que al cabo de un tiempo, la recompensa es mucho más grande y placentera.

          Controlar los gastos significa comprar de manera consciente y planeada, respetando un margen para otras cosas importantes como el ahorro.

Con el paso del tiempo, los gastos parecen ser más y más necesarios; parecen ineludibles. Es por eso que conviene vigilar nuestros egresos desde la edad más temprana posible. Así aprenderemos también el hábito del ahorro y de la planeación de nuestras finanzas..</p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;