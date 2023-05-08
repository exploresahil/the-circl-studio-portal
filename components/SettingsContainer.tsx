import { AiFillCloseCircle } from "react-icons/ai";

type Props = {
  onClose: () => void;
};

function SettingsContainer({ onClose }: Props) {
  const handleClose = () => {
    onClose();
  };
  return (
    <div className="settings-container">
      <button type="button" onClick={handleClose}>
        <AiFillCloseCircle size={25} />
      </button>

      <h3>Admin Settings</h3>
      <div className="details">
        <div className="password-container">
          <form action="#">
            <h4>Change Password</h4>
            <input
              className="password"
              type="password"
              placeholder="Enter Old Password"
              required
            />
            <input
              className="password"
              type="password"
              placeholder="Enter New Password"
              required
            />
            <input
              className="password"
              type="password"
              placeholder="Confirm New Password"
              required
            />
            <button type="submit">Change Password</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SettingsContainer;
