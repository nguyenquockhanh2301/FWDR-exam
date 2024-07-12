import React from 'react';
import YouTube from 'react-youtube';
import yellowStar from '../assets/stars/yellow-star.png';

function Video({ title, description, start, source_clip, stars, isBig }) {
    const getYouTubeVideoId = (url) => {
        const videoId = url?.split('v=')[1];
        const ampersandPosition = videoId?.indexOf('&');
        if (ampersandPosition !== -1) {
            return videoId?.substring(0, ampersandPosition);
        }
        return videoId;
    };

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    const renderStars = () => {
        if (!isBig) {
            const starComponents = [];
            for (let i = 0; i < stars; i++) {
                starComponents.push(<img key={i} src={yellowStar} alt="Star" className="star-icon" />);
            }
            return (
                <div className="stars">
                    {starComponents}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="video">
            {source_clip && (
                <YouTube videoId={getYouTubeVideoId(source_clip)} opts={opts} />
            )}
            <div className="video-details">
                <h2>{title}</h2>
                {renderStars()}
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Video;
