import React, { useState, useEffect } from "react";
import soundIcon from "../assets/sound.png";
import muteIcon from "../assets/mute.png";

import music from "../assets/bg.mp3";

const Music = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [audio] = useState(new Audio(music));

  const toggleSoundIcon = () => {
    if (isMuted) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsMuted((prevIsMuted) => !prevIsMuted);
  };

  useEffect(() => {
    // Cleanup audio when component is unmounted
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  useEffect(() => {
    audio.loop = true;
  }, []);

  return (
    <div className="fixed bottom-10 right-10 w-[50px] h-[50px] z-10 cursor-pointer">
      <img
        id="sound-icon"
        onClick={toggleSoundIcon}
        src={isMuted ? muteIcon : soundIcon}
        alt="Toggle Sound"
      />
    </div>
  );
};

export default Music;
