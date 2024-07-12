// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Video from './components/Video';
import MyClipData from './data/MyClip.json';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main-content">
                <h2 className="my-clip-title">My Clip</h2>
                <Video
                    title="Big Video"
                    start="star/big-start.png"
                    source_clip="https://www.youtube.com/watch?v=Qu8r2fz9SXA"
                    stars={3}
                    isBig={true}
                />
                <div className="grid-container">
                    {MyClipData.map((clip, index) => (
                        <Video
                            key={index}
                            title={clip.title}
                            description={clip.description}
                            start={clip.start}
                            source_clip={clip.source_clip}
                            stars={3}
                            isBig={false}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
