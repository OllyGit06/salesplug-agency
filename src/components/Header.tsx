import logo from "@/assets/salesplug-logo.png";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <img 
          src={logo} 
          alt="Salesplug Logo" 
          className="h-12 md:h-16 object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
