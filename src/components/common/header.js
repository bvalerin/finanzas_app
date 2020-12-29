import React, { useState } from 'react';
import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-dollar-sign"></i>
          <a href="#inicio">FinanzasApp</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#inicio" title="Inicio" />
            <Link href="#acerca" title="Acerca" />
            <Link href="#beneficios" title="Beneficios" />
            <Link href="#como_funciona" title="Como funciona?" />
            <Link href="#faq" title="FAQ" />
            <Link href="#precio" title="Precio" />
            <Link href="#contacto" title="Contacto" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="left"
            closable={true}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#inicio" title="Inicio" />
              <Link href="#acerca" title="Acerca" />
              <Link href="#beneficios" title="Beneficios" />
              <Link href="#como_funciona" title="Como funciona?" />
              <Link href="#faq" title="FAQ" />
              <Link href="#precio" title="Precio" />
              <Link href="#contacto" title="Contacto" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;