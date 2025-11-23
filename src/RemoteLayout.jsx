import React from 'react';
import './index.css';

const LayoutFrame = ({ children }) => {
    return (
        <div className="app-shell h-screen flex flex-col">
            <header className="topbar h-16 flex items-center px-6">
            </header>

            <div className="flex flex-1">
                <aside className="sidebar w-64">
                </aside>
                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default LayoutFrame;
