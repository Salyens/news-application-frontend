import { useState } from "react";
import styles from "../auth.module.scss";
import { useNavigate } from "react-router-dom";
import ApiService from "../../../services/ApiService";
import Loader from "../../Loader";

const Registration = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    setSuccessMessage(null);

    try {
      await ApiService.registration(data);
      navigate("/");
    } catch (_) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <h2 className={styles.header}>Registration</h2>
      {error && <div className={styles.error}>{error}</div>}
      {successMessage && <div className={styles.success}>{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          {isLoading ? <Loader /> : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Registration;
