import React, { useState } from "react";
import InputForm from "./ components/InputForm";
import ResultDisplay from "./ components/ResultDisplay";
import { evaluateRules } from "./engine/ruleEngine";

const App = () => {
  const [results, setResults] = useState([]);

  const handleEvaluate = (formData) => {
    const evaluationResults = evaluateRules(formData);
    setResults(evaluationResults);
  };

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Expert System</h1>
      {/* <InputForm/> */}
      <InputForm onEvaluate={handleEvaluate} />
      <ResultDisplay results={results} />
    </div>
  );
};

export default App;
