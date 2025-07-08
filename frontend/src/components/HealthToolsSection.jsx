import { useNavigate } from 'react-router-dom';
import { HeartPulse, Droplets, Stethoscope } from 'lucide-react';

const HealthToolsSection = () => {
  const navigate = useNavigate();

  const tools = [
    {
      name: 'BMI Calculator',
      desc: 'Calculate your Body Mass Index to track your fitness.',
      icon: <HeartPulse className='text-cyan-600' size={40} />,
      route: '/bmi',
    },
    {
      name: 'Water Intake',
      desc: 'Know how much water you need to drink daily.',
      icon: <Droplets className='text-blue-500' size={40} />,
      route: '/water',
    },
    {
      name: 'Symptom Checker',
      desc: 'Check possible causes based on your symptoms.',
      icon: <Stethoscope className='text-green-600' size={40} />,
      route: '/symptom',
    },
  ];

  return (
    <div className='px-4 sm:px-6 md:px-20 my-10'>
      <h2 className='text-3xl font-bold text-center text-cyan-700 mb-6'>Health Tools</h2>
      <div className='grid gap-6 md:grid-cols-3'>
        {tools.map((tool, idx) => (
          <div
            key={idx}
            onClick={() => navigate(tool.route)}
            className='bg-white hover:bg-cyan-50 cursor-pointer rounded-2xl p-6 shadow-md transition-transform hover:scale-105 flex flex-col items-center text-center'
          >
            <div className='mb-4'>{tool.icon}</div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>{tool.name}</h3>
            <p className='text-gray-600 text-sm'>{tool.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthToolsSection;
