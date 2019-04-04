import React from 'react';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <header className="primary-header"><h1>TIFF 16 Film Reference</h1></header>
        <div className="container"><p>Use of this data is provided under the terms and conditions of the Toronto Internation Film Festival site terms and conditions.</p>
        <p>Search the page with your browser (Cmd/Ctrl + F).</p>
        <p>Location Legend:<br />
          TBLB# = Tiff Bell Light Box Cinema # |
          SB## = ScotiaBank Theatre Cinema ## |
          RTH = Roy Thompson Hall |
          VSR = Visa Screening Room - Elgin Theatre |
          HDC = Bloor Hot Docs Cinema |
          POW = Princess of Whales Theatre |
          AGOJH = Art Gallery Of Ontario Jackman Hall |
          BADER = Isabel Bader Theatre |
          RY = Ryerson |
          WG = Winter Garden Theatre
        </p>
        </div>
        <main>{this.props.children}</main>
      </div>
    );
  }
};

export default MainLayout;
