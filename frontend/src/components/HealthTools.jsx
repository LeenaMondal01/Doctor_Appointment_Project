import React, { useState } from 'react';

const HealthTools = () => {
  const [bmiData, setBmiData] = useState({ height: '', weight: '', result: '' });
  const [waterData, setWaterData] = useState({ weight: '', activity: '', result: '' });
  const [symptom, setSymptom] = useState('');
  const [diagnosis, setDiagnosis] = useState('');

  const calculateBMI = () => {
    const heightInMeter = bmiData.height / 100;
    const bmi = (bmiData.weight / (heightInMeter * heightInMeter)).toFixed(1);
    let message = '';
    if (bmi < 18.5) message = 'Underweight';
    else if (bmi < 25) message = 'Normal weight';
    else if (bmi < 30) message = 'Overweight';
    else message = 'Obese';
    setBmiData({ ...bmiData, result: `Your BMI is ${bmi} (${message})` });
  };

  const calculateWaterIntake = () => {
    const base = waterData.weight * 35; // in ml
    const extra = waterData.activity === 'high' ? 500 : waterData.activity === 'moderate' ? 250 : 0;
    const total = base + extra;
    setWaterData({ ...waterData, result: `Recommended water intake: ${(total / 1000).toFixed(2)} L/day` });
  };

  const checkSymptoms = () => {
    const symptomMap = {
      fever: 'Possible Flu or Infection',
      cough: 'Possible Cold or Bronchitis',
      headache: 'May be Migraine or Stress',
      fatigue: 'Could be Anemia or Lack of Sleep',
    };
    setDiagnosis(symptomMap[symptom] || 'Consult a general physician');
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-green-50 px-4 sm:px-10 md:px-20 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">Discover Free Health Tools for You!</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* BMI Calculator */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 border-t-4 border-blue-400">
          <h3 className="text-xl font-semibold text-gray-700 text-center">BMI Calculator</h3>
          <input type="number" placeholder="Height (cm)" value={bmiData.height} onChange={(e) => setBmiData({ ...bmiData, height: e.target.value })} className="border rounded p-2 w-full" />
          <input type="number" placeholder="Weight (kg)" value={bmiData.weight} onChange={(e) => setBmiData({ ...bmiData, weight: e.target.value })} className="border rounded p-2 w-full" />
          <button onClick={calculateBMI} className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition-all">Calculate BMI</button>
          {bmiData.result && <p className="text-center text-sm text-gray-600 mt-2">{bmiData.result}</p>}
        </div>

        {/* Water Intake Calculator */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 border-t-4 border-teal-400">
          <h3 className="text-xl font-semibold text-gray-700 text-center">Water Intake Calculator</h3>
          <input type="number" placeholder="Weight (kg)" value={waterData.weight} onChange={(e) => setWaterData({ ...waterData, weight: e.target.value })} className="border rounded p-2 w-full" />
          <select value={waterData.activity} onChange={(e) => setWaterData({ ...waterData, activity: e.target.value })} className="border rounded p-2 w-full">
            <option value="">Select Activity Level</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
          <button onClick={calculateWaterIntake} className="bg-teal-500 text-white rounded px-4 py-2 hover:bg-teal-600 transition-all">Calculate Water Intake</button>
          {waterData.result && <p className="text-center text-sm text-gray-600 mt-2">{waterData.result}</p>}
        </div>

        {/* Symptom Checker */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 border-t-4 border-purple-400">
          <h3 className="text-xl font-semibold text-gray-700 text-center">Mini Symptom Checker</h3>
          <select value={symptom} onChange={(e) => setSymptom(e.target.value)} className="border rounded p-2 w-full">
            <option value="">Select Symptom</option>
            <option value="fever">Fever</option>
            <option value="cough">Cough</option>
            <option value="headache">Headache</option>
            <option value="fatigue">Fatigue</option>
          </select>
          <button onClick={checkSymptoms} className="bg-purple-500 text-white rounded px-4 py-2 hover:bg-purple-600 transition-all">Check</button>
          {diagnosis && <p className="text-center text-sm text-gray-600 mt-2">{diagnosis}</p>}
        </div>
      </div>
    </div>
  );
};

export default HealthTools;
