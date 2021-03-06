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

const Catalog=()=> {
  return (
    <div className="Catalog">
      <div className="containerText">
        <p>
          <Text>
            Welcome to the catalog. We know how to spend your money.
          </Text>
        </p>
      </div>
    <DataCatalog />
    <Footer/>
    </div>

  );
}

export default Catalog;
