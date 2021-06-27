import logo from './luxary1.jpg';
import logo2 from './luxary3.jpg';
import logo3 from './luxary5.jpg';

import styled from 'styled-components'

import DataCatalog from "./DataCatalog.js";
import Footer from "./Footer.js";

const Text=styled.div`
  background:rgba(164, 45, 221, 0.67);
  font-size:35px;
  text-align:center;
`

const Catalog1=()=> {
  return (
    <div className="Catalog1">
      <div className="containerText">
      
      </div>
    <DataCatalog />
    <Footer/>
    </div>

  );
}

export default Catalog1;
