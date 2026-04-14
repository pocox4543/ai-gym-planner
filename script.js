function generatePlan() {
  let weight = document.getElementById("weight").value;
  let goal = document.getElementById("goal").value;
  let diet = document.getElementById("diet").value;

  if (!weight) {
    showResult("⚠️ Please enter your weight bro");
    return;
  }

  weight = parseFloat(weight);

  // 🧠 Basic Calculations
  let protein = Math.round(weight * 2);
  let calories = Math.round(weight * 30);

  let workout = "";
  if (goal === "Bulking") {
    workout = "🏋️ Push Pull Legs (Heavy Training)";
    calories += 300;
  } else {
    workout = "🔥 HIIT + Push Pull Legs (Cutting)";
    calories -= 300;
  }

  // 🥗 Diet Logic
  let dietPlan = "";
  if (diet === "Lactose Free") {
    dietPlan = "Tofu, Soy Chunks, Peanut Butter, Dal";
  } else if (diet === "Vegan") {
    dietPlan = "Lentils, Beans, Nuts, Seeds";
  } else {
    dietPlan = "Milk, Paneer, Eggs, Chicken";
  }

  // 📊 BMI (simple assumption height = 1.75m)
  let height = 1.75;
  let bmi = (weight / (height * height)).toFixed(1);

  // 🧾 Final Plan
  let plan = `
🔥 Goal: ${goal}
💪 Protein: ${protein}g/day
🔥 Calories: ${calories} kcal/day

📊 BMI: ${bmi}

🥗 Diet:
${dietPlan}

${workout}
`;

  typeEffect(plan);
}


// 🤖 AI Typing Effect
function typeEffect(text) {
  let resultDiv = document.getElementById("result");
  resultDiv.innerText = "";
  resultDiv.classList.add("show");

  let i = 0;

  function typing() {
    if (i < text.length) {
      resultDiv.innerText += text.charAt(i);
      i++;
      setTimeout(typing, 15); // typing speed
    }
  }

  typing();
}


// ⚠️ Clean error display
function showResult(message) {
  let resultDiv = document.getElementById("result");
  resultDiv.innerText = message;
  resultDiv.classList.add("show");
}
// Binary generator
function generateBinary() {
  let binaryDiv = document.getElementById("binary");
  let text = "";

  for (let i = 0; i < 500; i++) {
    text += Math.random() > 0.5 ? "1 " : "0 ";
    if (i % 20 === 0) text += "\n";
  }

  binaryDiv.innerText = text;
}

// Refresh binary every few seconds
setInterval(generateBinary, 2000);
generateBinary();