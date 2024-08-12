import axios from "axios";

function Logout(navigate, setUser, setToken, token) {
    axios({
      method: "POST",
      url: "http://127.0.0.1:9000/game/logout",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      alert(res.data.message);
      setUser(null);
      setToken(null);
      navigate("/login");  
    })
    .catch((err) => {
      console.error("Logout failed:", err);
      alert("Logout failed. Please try again.");
    });
}

export default Logout;