import AddedClients from "@/components/AddedClients";
import Image from "next/image";
import { FaUsers } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { ImUserPlus } from "react-icons/im";

function page() {
  return (
    <main className="main-container">
      <div className="clients-admin-container">
        <div className="navigation">
          <button type="button" className="default-button card active">
            <h4>Clients</h4>
            <FaUsers size={24} />
          </button>
        </div>
        <div className="view-area">
          <div className="added-clients-title">
            <h2>Clients</h2>
            <button type="button">
              <ImUserPlus size={18} />
              Add Client
            </button>

            <form action="#">
              <input
                className="userName search"
                type="text"
                placeholder="search"
                required
              />
              <button type="submit">
                <IoSearchCircle size={30} className="search-icon" />
              </button>
            </form>
          </div>
          <div className="line" />
          <div className="added-clients">
            <AddedClients
              srcUrl="/assets/logos/tanwish-mark-black-logo.svg"
              clientName="Tanwish"
            />
          </div>
        </div>

        <div className="right">
          <div className="admin-settings">
            <div className="tcs-logo-container">
              <Image
                src="/assets/logos/Logo-off-White.svg"
                alt="the circl studio logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="title">
              <h3>the circl studio</h3>
              <p>Admin</p>
            </div>
          </div>
          <button type="button">
            <IoIosSettings size={25} />
            Change Password
          </button>
        </div>
      </div>
    </main>
  );
}

export default page;
