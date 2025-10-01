import { ReactNode } from "react";
import { useContentGate } from "@/contexts/ContentGateContext";
import { Lock } from "lucide-react";

interface ContentGateProps {
  children: ReactNode;
}

const ContentGate = ({ children }: ContentGateProps) => {
  const { isUnlocked } = useContentGate();

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Blurred content preview */}
      <div className="pointer-events-none select-none blur-sm opacity-50">
        {children}
      </div>
      
      {/* Overlay with lock message */}
      <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="text-center space-y-4 p-8 max-w-md">
          <Lock className="h-16 w-16 mx-auto text-muted-foreground" />
          <h3 className="text-2xl font-bold">Content Locked</h3>
          <p className="text-muted-foreground">
            Please fill out the form above to unlock access to the full landing page and discover all the features we have to offer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentGate;
