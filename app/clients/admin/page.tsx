"use client";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoSearchCircle, IoSettingsSharp } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";

import BackgroundAnimation from "@/components/BackgroundAnimation";
import Image from "next/image";
import Link from "next/link";
import AddedClients from "@/components/AddedClients";
import SettingsContainer from "@/components/SettingsContainer";
import AddClients from "@/components/AddClients";

import { useState } from "react";

function Admin() {
  const [showSettings, setShowSettings] = useState(false);
  const [showAddClients, setShowAddClients] = useState(false);

  const handleOpenSettings = () => {
    setShowSettings(true);
    setShowAddClients(false);
  };

  const handleOpenAddClients = () => {
    setShowAddClients(true);
    setShowSettings(false);
  };

  return (
    <div className="admin-header-container">
      <header className="admin-header">
        <div className="left-header">
          <Link href="/" title="Go to Home Page">
            <div className="logo-client-admin">
              <Image
                src="/assets/logos/tcs-side-by-side-version-white.svg"
                alt="the circl studio logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>
          <Link href="/clients/admin">
            <p>Admin: Clients</p>
          </Link>
        </div>
        <div className="right-header">
          <button type="button" onClick={handleOpenAddClients}>
            <AiOutlineUserAdd size={20} /> Add a Client
          </button>
          <button type="button" onClick={handleOpenSettings}>
            <IoSettingsSharp size={18} />
            Settings
          </button>
          <button type="button">
            <BiLogOut size={20} />
            Log Out
          </button>
        </div>
      </header>
      {showSettings && (
        <SettingsContainer onClose={() => setShowSettings(false)} />
      )}
      {showAddClients && (
        <AddClients onClose={() => setShowAddClients(false)} />
      )}
      <div className="admin-dashboard-container">
        <div className="dashboard-title">
          <h2>Clients</h2>
          <div className="only-logo">
            <Image
              src="/assets/logos/Logo-white.svg"
              alt="the circl studio logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="clients-container">
          <form action="#">
            <input
              className="userName search"
              type="text"
              placeholder="search"
              required
            />
            <button type="submit">
              <IoSearchCircle size={30} color="white" className="search-icon" />
            </button>
          </form>
          <div className="client-cards">
            <AddedClients
              srcUrl="/assets/logos/tanwish-mark-white-logo.svg"
              clientName="Tanwish"
            />
            <AddedClients
              srcUrl="/assets/logos/tcs-up-down-version-white.svg"
              clientName="Client Name"
            />
            <AddedClients
              srcUrl="/assets/logos/tcs-up-down-version-white.svg"
              clientName="Client Name"
            />
            <AddedClients
              srcUrl="/assets/logos/tcs-up-down-version-white.svg"
              clientName="Client Name"
            />
            <AddedClients
              srcUrl="/assets/logos/tcs-up-down-version-white.svg"
              clientName="Client Name"
            />
            <AddedClients
              srcUrl="/assets/logos/tcs-up-down-version-white.svg"
              clientName="Client Name"
            />
            <AddedClients
              srcUrl="/assets/logos/tcs-up-down-version-white.svg"
              clientName="Client Name"
            />
            <AddedClients
              srcUrl="/assets/logos/tcs-up-down-version-white.svg"
              clientName="Client Name"
            />
            <AddedClients
              srcUrl="/assets/logos/tcs-up-down-version-white.svg"
              clientName="Client Name"
            />
            <AddedClients
              srcUrl="/assets/logos/tcs-up-down-version-white.svg"
              clientName="Client Name"
            />
            <AddedClients
              srcUrl="/assets/logos/tcs-up-down-version-white.svg"
              clientName="Client Name"
            />
            <AddedClients
              srcUrl="/assets/logos/tcs-up-down-version-white.svg"
              clientName="Client Name"
            />
            <AddedClients
              srcUrl="/assets/logos/tcs-up-down-version-white.svg"
              clientName="Client Name"
            />
            <AddedClients
              srcUrl="/assets/logos/tcs-up-down-version-white.svg"
              clientName="Client Name"
            />
            <AddedClients
              srcUrl="/assets/logos/tcs-up-down-version-white.svg"
              clientName="Client Name"
            />
          </div>
        </div>
      </div>
      <BackgroundAnimation />
      <div className="aurora"></div>
    </div>
  );
}

export default Admin;
