import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ContentGateContextType {
  isUnlocked: boolean;
  unlockContent: () => void;
}

const ContentGateContext = createContext<ContentGateContextType | undefined>(undefined);

export const ContentGateProvider = ({ children }: { children: ReactNode }) => {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    // Check localStorage for unlock status
    return localStorage.getItem("content_unlocked") === "true";
  });

  const unlockContent = () => {
    setIsUnlocked(true);
    localStorage.setItem("content_unlocked", "true");
  };

  return (
    <ContentGateContext.Provider value={{ isUnlocked, unlockContent }}>
      {children}
    </ContentGateContext.Provider>
  );
};

export const useContentGate = () => {
  const context = useContext(ContentGateContext);
  if (!context) {
    throw new Error("useContentGate must be used within ContentGateProvider");
  }
  return context;
};
