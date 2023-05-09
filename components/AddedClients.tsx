import Image from "next/image";
import { FaUserEdit } from "react-icons/fa";

function AddedClients({
  srcUrl,
  clientName,
}: {
  srcUrl: string;
  clientName: string;
}) {
  return (
    <div className="added-client-card">
      <div className="client-logo-container">
        <Image
          src={srcUrl}
          alt="the circl studio logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="added-client-card-right">
        <h3>{clientName}</h3>
        <button type="button">
          <FaUserEdit />
          Edit
        </button>
      </div>
    </div>
  );
}

export default AddedClients;
