import { useState } from "react";

import { useUser } from "../context/UserContext";

function Profile() {
  const data = useUser();

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      data.setUser({
        id: 1,
        username: "süleyman",
        bio: "merhaba dünya",
      });
      setLoading(false);
    }, 1000);
  };

  const handleLogOut = () => {
    data.setUser(null);
  };
  return (
    <div>
      {JSON.stringify(data)}
      <br />
      <br />
      {!data.user && (
        <button onClick={handleLogin}>
          {loading ? "loading..." : "login"}
        </button>
      )}

      {data.user && <button onClick={handleLogOut}>Logout</button>}
    </div>
  );
}

export default Profile;
