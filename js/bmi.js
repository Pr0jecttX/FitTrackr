function initializeBMICalculator() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div class="container my-5">
            <div class="bmi-calculator">
                <h2 class="text-center mb-4">BMI Calculator</h2>
                <div class="card">
                    <div class="card-body">
                        <form id="bmiForm">
                            <div class="mb-3">
                                <label for="weight" class="form-label">Weight (kg)</label>
                                <input type="number" class="form-control" id="weight" required step="0.1" min="20" max="300">
                            </div>
                            <div class="mb-3">
                                <label for="height" class="form-label">Height (cm)</label>
                                <input type="number" class="form-control" id="height" required step="0.1" min="100" max="250">
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Calculate BMI</button>
                        </form>
                        <div id="bmiResult" class="mt-3"></div>
                        
                        <div class="mt-4">
                            <h5>BMI Categories:</h5>
                            <ul class="list-group">
                                <li class="list-group-item">Underweight: < 18.5</li>
                                <li class="list-group-item">Normal weight: 18.5 - 24.9</li>
                                <li class="list-group-item">Overweight: 25 - 29.9</li>
                                <li class="list-group-item">Obese: ≥ 30</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const bmiForm = document.getElementById('bmiForm');
    const resultDiv = document.getElementById('bmiResult');
    
    bmiForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to m
        
        if (weight > 0 && height > 0) {
            const bmi = weight / (height * height);
            let category = '';
            
            if (bmi < 18.5) {
                category = 'Underweight';
            } else if (bmi < 25) {
                category = 'Normal weight';
            } else if (bmi < 30) {
                category = 'Overweight';
            } else {
                category = 'Obese';
            }
            
            resultDiv.innerHTML = `
                <div class="alert alert-info mt-3">
                    <h4>Your BMI: ${bmi.toFixed(1)}</h4>
                    <p>Category: ${category}</p>
                </div>
            `;
        }
    });
}
