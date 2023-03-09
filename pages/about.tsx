import AboutHeader from "@/Components/Pages/About/Header/AboutHeader";
import BackgroundImageOverlay from "@/Components/reusedComponents/BackgroundImageOverlay";

const about = () => {
  return (
    <>
      <BackgroundImageOverlay
        height="h-[550px]"
        bgImage="bg-selected_menus_background_image"
      >
        <AboutHeader />
      </BackgroundImageOverlay>
    </>
  );
};

export default about;
