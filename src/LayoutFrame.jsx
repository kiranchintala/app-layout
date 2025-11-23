// app-layout/src/LayoutFrame.jsx
import React from 'react';
import './index.css';
import SiteHeader from './components/SiteHeader';
import LeftNav from './components/LeftNav';

const LayoutFrame = ({ children }) => {
    return (
        <div className="w-full h-screen flex flex-col">
            <SiteHeader />
            <div className="flex flex-1">
                <aside className="layout-sidebar w-64 bg-white border-r shadow-sm">
                    <LeftNav />
                </aside>

                <main className="flex-1 p-4 bg-white">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default LayoutFrame;
