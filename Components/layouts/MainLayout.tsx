import Navbar from "../shared/navbar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
