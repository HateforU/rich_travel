import logo from './luxary1.jpg';
import logo2 from './luxary3.jpg';
import logo3 from './luxary5.jpg';

import styled from 'styled-components'


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

      <div className="containerCatalog">
        <div className="Variant">
            <div className="pictureCatalog">
              <img src={logo} width="320" height="240" className="d-inline-block align-top catalog1" alt="logo"/>
            </div>
            <div className="textCatalog">
              <p> Адрес почты: gajdukz@mail.ru</p>
              <p> Адрес почты: gajdukz@mail.ru</p>
              <p> Адрес почты: gajdukz@mail.ru</p>
              <p> Адрес почты: gajdukz@mail.ru</p>
              <p> Адрес почты: gajdukz@mail.ru</p>
              <p> Адрес почты: gajdukz@mail.ru</p>
            </div>
          </div>

        <div className="Variant">
          <div className="pictureCatalog">
            <img src={logo2} width="320" height="240" className="d-inline-block align-top catalog1" alt="logo"/>
          </div>
          <div className="textCatalog">
            <p> /..///..</p>
            <p> /..///..</p>
            <p> /..///..</p>
            <p> /..///..</p>
            <p> /..///..</p>
            <p> /..///..</p>
          </div>
        </div>

        <div className="Variant">
          <div className="pictureCatalog">
            <img src={logo3} width="320" height="240" className="d-inline-block align-top catalog1" alt="logo"/>
          </div>
          <div className="textCatalog">
            <p>HIhihiihihhihhihiihihihihihihi</p>
            <p>HIhihiihihhihhihiihihihihihihi</p>
          <p>HIhihiihihhihhihiihihihihihihi</p>
          <p>HIhihiihihhihhihiihihihihihihi</p>
          <p>HIhihiihihhihhihiihihihihihihi</p>
          </div>
        </div>
      </div>



      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col_4">
                <p class="footer_name"> Copyright © 2021 TheHater. All rights reserved</p>
            </div>
            <div class="col_4">
                  <p class="footer_social_icons">
                    <a href="https://vk.com/gaidukzhenya" target="_blank">
                    <i class="fab fa-vk"></i>
                    </a>

                      <a href="https://twitter.com/YourTheHater" target="_blank">
                      <i class="fab fa-twitter"></i>
                      </a>

                        <a href="https://instagram.com/lllhaterlll?igshid=vaodksctcihd" target="_blank">
                        <i class="fab fa-instagram"></i>
                        </a>
                  </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Catalog;
