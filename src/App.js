import React from "react";
import "./styles.css";

class Modal extends React.Component {
  closeModal = () => {
    this.props.close();
  };

  render() {
    const { show, children } = this.props;
    return show ? (
      <div className="modal">
        <h1>Modal Header</h1>
        <div className="content">{children}</div>
        <div className="actions">
          <button type="button" onClick={this.closeModal}>
            close
          </button>
        </div>
      </div>
    ) : null;
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.input = React.createRef();
    this.state = {
      input: "",
      open: false
    };
  }

  openModal = () => {
    this.setState({
      open: true
    });
  };

  close = () => {
    this.setState({
      open: false
    });
    this.input.current.focus();
  };

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          ref={this.input}
          value={this.state.value}
          onChange={this.onChange}
        />
        <button onClick={this.openModal}> open</button>
        <Modal show={this.state.open} close={this.close}>
          hello
        </Modal>
        <Modal show={this.state.open} close={this.close}>
          oye
        </Modal>
      </>
    );
  }
}

export default App;
