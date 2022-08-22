import React, { useState, useEffect } from 'react';
import { Container, Nav, Header, Footer } from './styles';
import './styles.ts';

export default function Home() {
  return (
    <Container>
      <Nav>
        <div className='logo' >Logo</div>
        <ul>
          <li>op1</li>
          <li>op2</li>
          <li>op3</li>
        </ul>
      </Nav>
      <Header></Header>
      <Footer></Footer>
    </Container>
  );
}