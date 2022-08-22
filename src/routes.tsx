import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/index';
import Taca from './taca/index';

export default function Rota() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/taca" element={<Taca/>} />
            </Routes>
        </BrowserRouter>
    );
}