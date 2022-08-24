import React, { useState, useEffect } from 'react';
import { Container, Nav, Header, Footer } from './styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Taca from '../taca/index.js';
import Chicara from '../chicara/index.js';
import './styles.ts';

export default function Home() {
  return (
    <Container>
      <Nav>
        <div className='logo' >Logo</div>
        <ul>
          <li>
            <a href='/chicara'>Chicara</a>
          </li>
          <li>
            <a href='/taca'>Taça</a>
            </li>
          <li>Copo de plastico</li>
        </ul>
      </Nav>
      <Header>
        <BrowserRouter>
          <Routes>
          <Route path="/taca" element={<Taca />} />
          <Route path="/chicara" element={<Chicara />} />
          </Routes>
        </BrowserRouter>
      </Header>
      <Footer>
      <ul>
          <li>Contato: 64 9 9999 8888</li>
          <li>Email: email@mail.com</li>
        </ul>
        <ul>
          <li>Cidade: Acreúna</li>
          <li>Estado: Goias</li>
        </ul>
        <ul>
          <li>Rua: q33</li>
          <li>Bairro: novo lar</li>
        </ul>
      </Footer>
    </Container>
  );
}