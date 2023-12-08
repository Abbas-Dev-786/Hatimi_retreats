import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Navbar from "../components/common/Navbar";
import { changePassword } from "../state/api";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { mutate, isPending } = useMutation({
    mutationKey: ["change-password"],
    mutationFn: changePassword,
    onError: (err) => {
      toast.error(err.message);
    },
    onSuccess: () => {
      toast.success(`Password changed Successfully`);
    },
  });

  const handlePasswordChange = () => {
    if (!(currentPassword && password && confirmPassword)) {
      toast.error("All Fields are Mandatory.");
      return;
    }

    if (password.length < 8 || confirmPassword.length < 8) {
      toast.error("Password Length should be atleast 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password is not matching.");
      return;
    }

    mutate({ currentPassword, password, confirmPassword });
  };

  return (
    <div className="container-fluid px-0 pb-5">
      <Navbar />
      <Breadcrumbs />

      <div className="w-100 py-5 my-5 d-flex flex-column align-items-center justify-content-center dull-pg">
        <div className="h-25 w-25 px-4 py-4 d-flex flex-column align-items-center justify-content-center gap-4 shadow-card border">
          <h3 className="text-center mb-3">Change Password</h3>

          <input
            className="form-control form-control-lg"
            type="password"
            placeholder="Enter Current Password"
            required
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            className="form-control form-control-lg"
            type="password"
            placeholder="Enter New Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="form-control form-control-lg"
            type="password"
            placeholder="Confirm New Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            className="btn btn-secondary mt-2"
            disabled={isPending}
            onClick={handlePasswordChange}
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
