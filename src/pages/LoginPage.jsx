import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        login(data.token);
        alert("✅ เข้าสู่ระบบสำเร็จ");
        navigate("/");
      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      alert("❌ ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-2xl font-bold mb-4">🔐 เข้าสู่ระบบ</h2>
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 border mb-3"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border mb-3"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white w-full py-2 rounded"
        onClick={handleLogin}
      >
        🔐 เข้าสู่ระบบ
      </button>
    </div>
  );
}

export default LoginPage;
