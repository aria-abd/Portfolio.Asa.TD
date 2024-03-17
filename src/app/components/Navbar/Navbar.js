import Drawer from "../Drawer/Drawer";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Asa.TD</a>
          </div>
          <div className="flex-none">
            <Drawer />
          </div>
        </div>
      </div>
      <div className="divider my-0"></div>
    </>
  );
};

export default Navbar;
