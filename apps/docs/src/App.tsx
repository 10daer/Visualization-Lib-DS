import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ApiReference } from './pages/ApiReference';
import { ChartGallery } from './pages/ChartGallery';
import { Home } from './pages/Home';

export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/gallery" element={<ChartGallery />} />
                        <Route path="/api" element={<ApiReference />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}
