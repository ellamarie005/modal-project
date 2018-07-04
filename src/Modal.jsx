import React, { Component } from 'react';
import styled from 'styled-components';

//can also just do export default props => {this is where the render is placed}
export default class Modal extends Component {
  render() {
    return (
      <Overlay className={this.props.active ? 'active' : ''}>
        <Content className='modal__wrapper'>
          <p>I am a modal</p>
          <button onClick={this.props.handCloseModal}>Close Modal</button>
        </Content>
      </Overlay>
    )
  }
}



const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out, transform 0.3s ease-out;

/* & is saying that WHEN it is active */
     &.active {
       opacity: 1;
       pointer-events: all;

       .modal__wrapper {
         transform: translateY(0);
       }
     }
  `;



const Content = styled.div`
    width: 80%;
    max-width: 500px;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    position: relative;

    &.modal__wrapper {
      transform: translateY(-50px);
    }
    
  `;
