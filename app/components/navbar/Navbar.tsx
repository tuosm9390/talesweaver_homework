import Container from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";
import Profile from "./Profile";

interface NavbarProps {
  children?: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = (
  children
) => {
  return (
    <div className="fixed w-full z-10 shadow-sm bg-slate-900">
      <div className="py-4 px-6 w-50">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Menu />
            <Profile />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;