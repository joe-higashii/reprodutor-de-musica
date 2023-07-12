import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from '../library';
import Feed from '../feed';
import Favorites from '../favorites';
import Trendings from '../trendings';
import Player from '../player';
import './home.css';
import Sidebar from '../../components/sidebar';

export default function Home() {
    return (
        <Router>
            <div className='main-body'>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Library />} />
                    <Route path="/" element={<Feed />} />
                    <Route path="/" element={<Favorites />} />
                    <Route path="/" element={<Trendings />} />
                    <Route path="/" element={<Player />} />
                </Routes>
            </div>
        </Router>
    );
}
