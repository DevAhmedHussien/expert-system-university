import React, { useState } from "react";

const InputForm = ({ onEvaluate }) => {
  const [formData, setFormData] = useState({
    age: "",
    profession: "",
    location: "",
    interests: [],
  });

  const professions = ["Doctor", "Engineer", "Teacher", "Student", "Manager"];
  const locations = ["USA", "India", "EU", "Egypt", "Russia"];
  const interestOptions = ["sports", "technology", "art", "music"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((interest) => interest !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.age || !formData.profession || !formData.location) {
      alert("Please fill out all required fields.");
      return;
    }

    onEvaluate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "50px auto",
        background: "linear-gradient(135deg, #12192c, #1e2a4a)",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#00d4ff" }}>Введите свои данные</h2>

      <label style={{ marginBottom: "10px", display: "block" }}>
        Возраст:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Введите ваш возраст"
          style={{
            display: "block",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #00d4ff",
            width: "95%",
          }}
        />
      </label>

      <label style={{ marginBottom: "10px", display: "block" }}>
        Профессия:
        <select
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #00d4ff",
            width: "100%",
          }}
        >
          <option value="">Выберите профессию</option>
          {professions.map((profession, index) => (
            <option key={index} value={profession}>
              {profession}
            </option>
          ))}
        </select>
      </label>

      <label style={{ marginBottom: "10px", display: "block" }}>
        Локация:
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #00d4ff",
            width: "100%",
          }}
        >
          <option value="">Выберите локацию</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </label>

      <label style={{ marginBottom: "10px", display: "block" }}>
        Интересы:
        {interestOptions.map((interest, index) => (
          <div key={index} style={{ marginBottom: "5px" }}>
            <input
              type="checkbox"
              name="interests"
              value={interest}
              checked={formData.interests.includes(interest)}
              onChange={handleChange}
              style={{ marginRight: "5px" }}
            />
            {interest}
          </div>
        ))}
      </label>

      <button
        type="submit"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#00d4ff",
          color: "#000",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
          fontWeight: "bold",
        }}
      >
        Оценить
      </button>
    </form>
  );
};

export default InputForm;
