const rules = [
    // USA
    {
      id: 1,
      conditions: [
        { key: "age", operator: ">=", value: 18 },
        { key: "location", operator: "==", value: "USA" },
      ],
      result: "You qualify for adult services in the USA.",
    },
    {
      id: 2,
      conditions: [
        { key: "age", operator: "<", value: 18 },
        { key: "location", operator: "==", value: "USA" },
      ],
      result: "You qualify for children-friendly services in the USA.",
    },
  
    // Egypt
    {
      id: 3,
      conditions: [
        { key: "age", operator: ">=", value: 18 },
        { key: "location", operator: "==", value: "Egypt" },
      ],
      result: "You qualify for adult services in Egypt.",
    },
    {
      id: 4,
      conditions: [
        { key: "income", operator: "<", value: 20000 },
        { key: "location", operator: "==", value: "Egypt" },
      ],
      result: "You qualify for low-income benefits in Egypt.",
    },
    {
      id: 5,
      conditions: [
        { key: "profession", operator: "==", value: "Engineer" },
        { key: "location", operator: "==", value: "Egypt" },
      ],
      result: "You qualify for engineering grants in Egypt.",
    },
    {
      id: 6,
      conditions: [
        { key: "age", operator: "<", value: 12 },
        { key: "location", operator: "==", value: "Egypt" },
        { key: "interests", operator: "includes", value: "sports" },
      ],
      result: "You qualify for children’s sports programs in Egypt.",
    },
    {
      id: 7,
      conditions: [
        { key: "profession", operator: "==", value: "Doctor" },
        { key: "location", operator: "==", value: "Egypt" },
      ],
      result: "You qualify for medical professional benefits in Egypt.",
    },
    {
      id: 8,
      conditions: [
        { key: "profession", operator: "==", value: "Teacher" },
        { key: "location", operator: "==", value: "Egypt" },
      ],
      result: "You qualify for teacher development grants in Egypt.",
    },
    {
      id: 9,
      conditions: [
        { key: "interests", operator: "includes", value: "art" },
        { key: "location", operator: "==", value: "Egypt" },
      ],
      result: "You qualify for art and cultural events in Egypt.",
    },
  
    // EU
    {
      id: 10,
      conditions: [
        { key: "age", operator: ">=", value: 18 },
        { key: "location", operator: "==", value: "EU" },
      ],
      result: "You qualify for adult services in the EU.",
    },
    {
      id: 11,
      conditions: [
        { key: "profession", operator: "==", value: "Engineer" },
        { key: "location", operator: "==", value: "EU" },
      ],
      result: "You qualify for engineering grants in the EU.",
    },
    {
      id: 12,
      conditions: [
        { key: "profession", operator: "==", value: "Teacher" },
        { key: "location", operator: "==", value: "EU" },
      ],
      result: "You qualify for educational grants in the EU.",
    },
    {
      id: 13,
      conditions: [
        { key: "income", operator: ">=", value: 50000 },
        { key: "location", operator: "==", value: "EU" },
      ],
      result: "You qualify for premium financial services in the EU.",
    },
    {
      id: 14,
      conditions: [
        { key: "age", operator: "<", value: 12 },
        { key: "location", operator: "==", value: "EU" },
        { key: "interests", operator: "includes", value: "sports" },
      ],
      result: "You qualify for children’s sports programs in the EU.",
    },
    {
      id: 15,
      conditions: [
        { key: "interests", operator: "includes", value: "technology" },
        { key: "location", operator: "==", value: "EU" },
      ],
      result: "You qualify for technology-related programs in the EU.",
    },
    {
      id: 16,
      conditions: [
        { key: "profession", operator: "==", value: "Doctor" },
        { key: "location", operator: "==", value: "EU" },
      ],
      result: "You qualify for medical training programs in the EU.",
    },
    {
      id: 17,
      conditions: [
        { key: "interests", operator: "includes", value: "music" },
        { key: "location", operator: "==", value: "EU" },
      ],
      result: "You qualify for music and cultural events in the EU.",
    },
  
    // Russia
    {
      id: 18,
      conditions: [
        { key: "age", operator: ">=", value: 18 },
        { key: "location", operator: "==", value: "Russia" },
      ],
      result: "You qualify for adult services in Russia.",
    },
    {
      id: 19,
      conditions: [
        { key: "profession", operator: "==", value: "Engineer" },
        { key: "location", operator: "==", value: "Russia" },
      ],
      result: "You qualify for engineering grants in Russia.",
    },
    {
      id: 20,
      conditions: [
        { key: "profession", operator: "==", value: "Teacher" },
        { key: "location", operator: "==", value: "Russia" },
      ],
      result: "You qualify for teacher training programs in Russia.",
    },
    {
      id: 21,
      conditions: [
        { key: "age", operator: "<", value: 12 },
        { key: "location", operator: "==", value: "Russia" },
        { key: "interests", operator: "includes", value: "sports" },
      ],
      result: "You qualify for children’s sports programs in Russia.",
    },
    {
      id: 22,
      conditions: [
        { key: "income", operator: "<", value: 20000 },
        { key: "location", operator: "==", value: "Russia" },
      ],
      result: "You qualify for low-income benefits in Russia.",
    },
    {
      id: 23,
      conditions: [
        { key: "profession", operator: "==", value: "Doctor" },
        { key: "location", operator: "==", value: "Russia" },
      ],
      result: "You qualify for medical professional benefits in Russia.",
    },
    {
      id: 24,
      conditions: [
        { key: "interests", operator: "includes", value: "art" },
        { key: "location", operator: "==", value: "Russia" },
      ],
      result: "You qualify for art and cultural programs in Russia.",
    },
    {
      id: 25,
      conditions: [
        { key: "interests", operator: "includes", value: "technology" },
        { key: "location", operator: "==", value: "Russia" },
      ],
      result: "You qualify for technology-related grants in Russia.",
    },
  ];
  
  export const evaluateRules = (input) => {
    const results = [];
  
    rules.forEach((rule) => {
      const match = rule.conditions.every((condition) => {
        switch (condition.operator) {
          case ">=":
            return input[condition.key] >= condition.value;
          case "<":
            return input[condition.key] < condition.value;
          case "==":
            return input[condition.key] === condition.value;
          case "includes":
            return Array.isArray(input[condition.key]) && input[condition.key].includes(condition.value);
          default:
            return false;
        }
      });
  
      if (match) {
        results.push(rule.result);
      }
    });
  
    return results;
  };
  
  