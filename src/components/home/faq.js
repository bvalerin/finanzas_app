import React from 'react';

import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

function AppFaq() {
  return(
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Preguntas frecuentes</h2>
          <p>Estas son algunas de las preguntas que se hacen los usuarios de FinanzasApp!</p>
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Como creo una cuenta?" key="1">
            <p>Para crear una cuenta nada mas debes registrarte en el siguiente enlace. <a href="#inicio">Click</a> </p>
          </Panel>
          <Panel header="Puedo usarla en cualquier dispositivo?" key="2">
            <p>Si, al ser una aplicacion web la convierte en multiplataforma.</p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Cuanto tiempo duran en contestar un correo o mensaje de soporte?</h3>
          <p>Tratamos de responder en menos de 24 horas, sin embargo depende de la cantidad de preguntas que ingresen al mismo tiempo.</p>
          <Button type="primary" size="large"><i className="fas fa-envelope"></i>  Envianos tu consulta! </Button>
        </div>
      </div>
    </div>  
  );
}

export default AppFaq;