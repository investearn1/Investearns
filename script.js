
function calculateROI() {
  const plan = parseInt(document.getElementById("planSelector").value);
  const resultDiv = document.getElementById("result");

  const roiMap = {
    500: 120,
    1000: 240,
    1500: 360,
    2000: 480,
    2500: 600,
    5000: 1200,
    10000: 2400
  };

  if (plan > 0 && roiMap[plan]) {
    const dailyReturn = roiMap[plan];
    resultDiv.innerHTML = `🟢 You will earn ₹${dailyReturn} per day on ₹${plan} investment.`;
  } else {
    resultDiv.innerHTML = "";
  }
}
