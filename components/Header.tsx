import Image from "next/image";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import { RiShieldUserFill } from "react-icons/ri";

function Header() {
  return (
    <header>
      <Link href="/">
        <div className="header-circl-logo">
          <Image
            src="/assets/logos/Logo-white.svg"
            fill
            style={{ objectFit: "contain" }}
            alt="the circl studio logo"
          />
        </div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/clients">
              <FaUsers size={20} />
              Clients
            </Link>
          </li>
          <li>
            <Link href="/clients/admin">
              <RiShieldUserFill size={20} />
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
