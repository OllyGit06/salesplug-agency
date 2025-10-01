import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, Play, Pause, Maximize } from "lucide-react";

// Country options for dropdown
const countries = ["United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "India", "Japan", "Brazil", "Other"];

interface VideoSalesLetterProps {
  onFormSubmit: () => void;
}

export default function VideoSalesLetter({ onFormSubmit }: VideoSalesLetterProps) {
  const [videoType, setVideoType] = useState("youtube");
  const [videoUrl, setVideoUrl] = useState("");
  const [lockTime, setLockTime] = useState(30);
  const [isLocked, setIsLocked] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [player, setPlayer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [progress, setProgress] = useState(0);
  const [leadFormSubmitted, setLeadFormSubmitted] = useState(false);

  const ytPlayerRef = useRef<HTMLDivElement>(null);
  const mp4Ref = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize YouTube Player
  useEffect(() => {
    if (videoType === "youtube" && videoUrl) {
      if (!(window as any).YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        (window as any).onYouTubeIframeAPIReady = loadYTPlayer;
        document.body.appendChild(tag);
      } else {
        loadYTPlayer();
      }
    }
  }, [videoType, videoUrl]);

  const loadYTPlayer = () => {
    if (ytPlayerRef.current) {
      const videoId = extractYouTubeId(videoUrl);
      const yt = new (window as any).YT.Player(ytPlayerRef.current, {
        videoId,
        playerVars: { controls: 0, modestbranding: 1, rel: 0, disablekb: 1, fs: 0 },
        events: {
          onReady: (event: any) => {
            setPlayer(event.target);
            event.target.setVolume(volume);
          },
          onStateChange: (event: any) => {
            if (event.data === (window as any).YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              monitorProgress(event.target);
              checkLock(event.target);
            } else if (event.data === (window as any).YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            }
          },
        },
      });
    }
  };

  const extractYouTubeId = (url: string) => {
    const regExp = /(?:v=|youtu.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const checkLock = (ytInstance: any) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const time = ytInstance.getCurrentTime();
      if (time >= lockTime && !isLocked && !leadFormSubmitted) {
        ytInstance.pauseVideo();
        setIsLocked(true);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 500);
  };

  const monitorProgress = (ytInstance: any) => {
    const progressInterval = setInterval(() => {
      if (!isLocked) {
        const time = ytInstance.getCurrentTime();
        setProgress(Math.min((time / lockTime) * 100, 100));
      } else {
        clearInterval(progressInterval);
      }
    }, 300);
  };

  const togglePlay = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    }
  };

  const handleLeadFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadFormSubmitted(true);
    setIsLocked(false);
    if (player) {
      player.playVideo();
    }
    onFormSubmit();
  };

  return (
    <div className="w-full bg-gradient-subtle py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Settings Button */}
          <button
            onClick={() => setFormVisible(!formVisible)}
            className="px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition"
          >
            {formVisible ? "Hide Settings" : "Create Sales Video"}
          </button>

          {/* Admin Settings Form */}
          {formVisible && (
            <motion.form
              onSubmit={(e) => {
                e.preventDefault();
                setFormVisible(false);
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-5 bg-card shadow-md rounded-2xl p-6 w-full max-w-lg border border-border"
            >
              <label className="block text-sm font-semibold text-foreground">Video Type</label>
              <select 
                value={videoType} 
                onChange={(e) => setVideoType(e.target.value)} 
                className="w-full border border-border bg-background text-foreground rounded-lg p-3 focus:ring-2 focus:ring-primary"
              >
                <option value="youtube">YouTube</option>
                <option value="mp4">MP4</option>
              </select>

              <label className="block text-sm font-semibold text-foreground">Video URL</label>
              <input 
                type="text" 
                value={videoUrl} 
                onChange={(e) => setVideoUrl(e.target.value)} 
                className="w-full border border-border bg-background text-foreground rounded-lg p-3 focus:ring-2 focus:ring-primary" 
                placeholder="Paste video URL here" 
                required 
              />

              <label className="block text-sm font-semibold text-foreground">Lock Time (seconds)</label>
              <input 
                type="number" 
                value={lockTime} 
                onChange={(e) => setLockTime(Number(e.target.value))} 
                className="w-full border border-border bg-background text-foreground rounded-lg p-3 focus:ring-2 focus:ring-primary" 
                required 
              />

              <button 
                type="submit" 
                className="bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
              >
                Apply
              </button>
            </motion.form>
          )}

          {/* Video Player */}
          {videoUrl && (
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              {videoType === "youtube" && <div ref={ytPlayerRef} className="w-full h-full"></div>}
              {videoType === "mp4" && <video ref={mp4Ref} className="w-full h-full" controls src={videoUrl} />}

              {/* Progress Bar */}
              {!isLocked && progress > 0 && (
                <div 
                  className="absolute top-0 left-0 h-1 bg-primary transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                ></div>
              )}

              {/* Custom Controls */}
              {player && (
                <motion.div 
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/70 rounded-2xl px-4 py-2 shadow-lg" 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.3 }}
                >
                  {!isLocked && (
                    <button 
                      onClick={togglePlay} 
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-transform hover:scale-110"
                    >
                      {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
                    </button>
                  )}

                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-white" />
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={volume} 
                      onChange={(e) => { 
                        const newVol = parseInt(e.target.value, 10); 
                        setVolume(newVol); 
                        if (player) player.setVolume(newVol); 
                      }} 
                      className="accent-primary w-24" 
                    />
                  </div>

                  <button 
                    onClick={() => {
                      const iframe = player.getIframe();
                      if (iframe && iframe.requestFullscreen) {
                        iframe.requestFullscreen();
                      }
                    }} 
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-transform hover:scale-110"
                  >
                    <Maximize className="w-5 h-5 text-white" />
                  </button>
                </motion.div>
              )}
            </div>
          )}

          {/* Lead Capture Form */}
          {isLocked && !leadFormSubmitted && (
            <motion.form 
              onSubmit={handleLeadFormSubmit} 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.3 }} 
              className="flex flex-col gap-4 bg-card shadow-xl rounded-2xl p-8 w-full max-w-md border border-border"
            >
              <h3 className="text-2xl font-bold text-center text-foreground mb-2">Unlock Full Access</h3>
              <p className="text-center text-muted-foreground mb-4">Fill out the form below to continue watching</p>
              
              <input 
                type="text" 
                placeholder="Name" 
                className="border border-border bg-background text-foreground rounded-lg p-3 focus:ring-2 focus:ring-primary" 
                required 
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="border border-border bg-background text-foreground rounded-lg p-3 focus:ring-2 focus:ring-primary" 
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" 
                title="Enter a valid email" 
                required 
              />
              <input 
                type="tel" 
                placeholder="Phone" 
                className="border border-border bg-background text-foreground rounded-lg p-3 focus:ring-2 focus:ring-primary" 
                pattern="^\+?[0-9]{7,15}$" 
                title="Enter a valid phone number" 
                required 
              />
              <input 
                type="text" 
                placeholder="Company" 
                className="border border-border bg-background text-foreground rounded-lg p-3 focus:ring-2 focus:ring-primary" 
                required 
              />
              <select 
                className="border border-border bg-background text-foreground rounded-lg p-3 focus:ring-2 focus:ring-primary" 
                required
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              <button 
                type="submit" 
                className="bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
              >
                Unlock Video & Continue
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
}
