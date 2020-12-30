import React from 'react';

import { Button, Modal } from 'antd';

class AppWorks extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="como_funciona" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Como funciona_</h2>
            <p>Para iniciar solo debes registrarte y empezaras a disfrutas de todos los beneficios!</p>
          </div>
          <div className="contentHolder">
            <Button size="large" onClick={this.showModal}><i className="fas fa-play"></i></Button>
          </div>
          <Modal
            title="Tutorial  de Uso"
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
          >
            <iframe title="This is a unique title" width="100%" height="400px" src="https://www.youtube.com/embed/p92esPIJJmc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
          </Modal>
        </div>
      </div>
    );
  }
}

export default AppWorks;