import React from 'react';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <header className="primary-header"><h1>TIFF 16 Film Reference</h1></header>
        <div className="container"><p>Use of this data is provided under the terms and conditions of the Toronto Internation Film Festival site terms and conditions. Watch list functionailty is not currently programed. Search the page with your browser.</p></div>
        <main>{this.props.children}</main>
      </div>
    );
  }
};

export default MainLayout;
