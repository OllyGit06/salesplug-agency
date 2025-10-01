import { useState } from "react";

const VideoSection = () => {
  const [videoType, setVideoType] = useState<"youtube" | "mp4">("youtube");
  const [videoUrl, setVideoUrl] = useState("");

  const extractYouTubeId = (url: string) => {
    const regExp = /(?:v=|youtu.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  return (
    <section className="w-full bg-muted/30 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-card rounded-lg shadow-lg p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Video Type</label>
              <select
                value={videoType}
                onChange={(e) => setVideoType(e.target.value as "youtube" | "mp4")}
                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="youtube">YouTube</option>
                <option value="mp4">MP4</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Video URL</label>
              <input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Paste your video URL here"
                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {videoUrl && (
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              {videoType === "youtube" && extractYouTubeId(videoUrl) ? (
                <iframe
                  src={`https://www.youtube.com/embed/${extractYouTubeId(videoUrl)}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : videoType === "mp4" ? (
                <video
                  src={videoUrl}
                  controls
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Invalid video URL
                </div>
              )}
            </div>
          )}

          {!videoUrl && (
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Enter a video URL to display</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
