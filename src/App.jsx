import React, { Component } from 'react';
import Modal from './Modal';
import styled from 'styled-components';

class App extends Component {
  // no more constructor and this().bind because its react v16
  state = {
    openModal: false
  }

  handleToggleModal = () => {
    this.setState({ openModal: !this.state.openModal })
  }

  render() {
    return (
      <Home>
        <p style={{ margin: 0 }}>I am some content...</p>
        <button onClick={this.handleToggleModal}>Open Modal</button>
        <Modal
          active={this.state.openModal}
          handCloseModal={this.handleToggleModal} />
      </Home>
    )
  }
}

const Home = styled.div`
height: 100vh;
width: 100%;
background-color: yellow;
position: relative;
`;

export default App;