import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const VideoSection = () => {
  const [videoType, setVideoType] = useState<"youtube" | "mp4" | null>(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideoSettings = async () => {
      try {
        const { data, error } = await supabase
          .from("video_settings")
          .select("*")
          .eq("is_enabled", true)
          .order("updated_at", { ascending: false })
          .limit(1)
          .maybeSingle();

        if (error) {
          console.error("Error fetching video settings:", error);
          return;
        }

        if (data) {
          setVideoType(data.video_type as "youtube" | "mp4");
          setVideoUrl(data.video_url);
        }
      } catch (error) {
        console.error("Error loading video:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideoSettings();
  }, []);

  const extractYouTubeId = (url: string) => {
    const regExp = /(?:v=|youtu.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  if (isLoading) {
    return (
      <section className="w-full bg-muted/30 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
          </div>
        </div>
      </section>
    );
  }

  if (!videoUrl || !videoType) {
    return null;
  }

  return (
    <section className="w-full bg-muted/30 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
          {videoType === "youtube" && extractYouTubeId(videoUrl) ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${extractYouTubeId(videoUrl)}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : videoType === "mp4" ? (
            <video
              className="w-full h-full"
              controls
              src={videoUrl}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="flex items-center justify-center h-full text-white">
              Invalid video URL
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
