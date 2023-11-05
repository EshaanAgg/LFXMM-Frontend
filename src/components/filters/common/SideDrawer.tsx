import closeButton from "../../../assets/images/logo/closeButton.svg";

type PropType = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export const SideDrawer = ({ setShow, children }: PropType) => {
  return (
    <>
      {/*  Backdrop */}
      <div
        id="backdrop"
        className="fixed inset-0 bg-gray-800 opacity-75 transition-opacity z-40"
        style={{
          display: "block",
        }}
      ></div>

      {/* Drawer Header */}
      <div
        className="fixed top-0 bottom-0 left-0 z-40 w-[380px] rounded-r-3xl bg-dark-blue mx-auto py-8 border-t-[3px] border-r-[3px] border-b-[3px] border-highlight-blue transition-transform -translate-x-full openDrawer inline-flex items-center"
        tabIndex={-1}
        style={{
          display: "block",
          backgroundColor: "rgb(0 16 27)",
        }}
      >
        <h5 className="text-base font-semibold uppercase text-gray-400 ml-5">
          All Filters
        </h5>

        {/* Close Menu Button */}
        <button
          type="button"
          className="text-white rounded-lg text-sm p-1.5 absolute top-3.5 right-2.5 inline-flex items-center hover:bg-gray-400 bg-gray-600"
          onClick={() => {
            setShow(false);
          }}
        >
          <img
            src={closeButton.src}
            alt="Icon to close the current menu"
            width={20}
            height={20}
          />
          <span className="sr-only">Close Menu</span>
        </button>

        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-1" />

        {children}
      </div>
    </>
  );
};
