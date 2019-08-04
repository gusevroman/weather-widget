import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { connectModal } from 'redux-modal';

class TestModal extends Component {
  render() {
    const { show, message } = this.props;

    return (
      <Modal show={show}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>{ message }</ModalBody>
        <ModalFooter />
      </Modal>
    );
  }
}

export default connectModal({ name: 'testmodal' })(TestModal);
