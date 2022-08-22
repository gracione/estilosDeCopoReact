import React, { useState, useEffect } from 'react';
import { Container, Nav, Header, Footer } from './styles';
import './styles.ts';

export default function Home() {
  return (
    <Container>
      <Nav>
        <div className='logo' >Logo</div>
        <ul>
          <li>
            <a href='/taca'>Chicara</a>
          </li>
          <li>Taça</li>
          <li>Copo de plastico</li>
        </ul>
      </Nav>
      <Header></Header>
      <Footer></Footer>
    </Container>
  );
}