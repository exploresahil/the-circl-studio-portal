import Image from "next/image";
import { BiEdit } from "react-icons/bi";

function AddedClients({
  srcUrl,
  clientName,
}: {
  srcUrl: string;
  clientName: string;
}) {
  return (
    <div className="client-card">
      <div className="client-logo-container">
        <Image
          src={srcUrl}
          alt="the circl studio logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <h3>{clientName}</h3>
      <button type="button">
        <BiEdit />
        Edit
      </button>
      <div className="finger-texture">
        <Image
          className="texture"
          src="/assets/texture/Metal003_1K_Roughness.jpg"
          fill
          style={{ objectFit: "cover" }}
          alt="the circl studio logo"
        />
      </div>
    </div>
  );
}

export default AddedClients;
