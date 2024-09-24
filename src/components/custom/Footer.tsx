import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-[#361904] h-24 ">
      <MaxWidthWrapper className="h-full">
        <div className="flex h-full items-center">
          <p className="text-white ">
            All rights reserverd @Pizza by Nischal {date.getFullYear()}
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
