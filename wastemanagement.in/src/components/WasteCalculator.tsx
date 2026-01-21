import React, { useState } from 'react';
import { Calculator, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

const WasteCalculator = () => {
  const [formData, setFormData] = useState({
    household: 1,
    foodWaste: 2,
    plastic: 1,
    paper: 1,
    glass: 0.5
  });
  const [results, setResults] = useState<any>(null);

  const calculateWaste = () => {
    const dailyWaste = formData.foodWaste + formData.plastic + formData.paper + formData.glass;
    const monthlyWaste = dailyWaste * 30;
    const yearlyWaste = dailyWaste * 365;
    
    const reductionPotential = {
      composting: formData.foodWaste * 0.8,
      recycling: (formData.plastic + formData.paper + formData.glass) * 0.7,
      reduction: dailyWaste * 0.3
    };

    setResults({
      daily: dailyWaste,
      monthly: monthlyWaste,
      yearly: yearlyWaste,
      reduction: reductionPotential
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Calculator className="h-6 w-6 text-green-600" />
        <h3 className="text-xl font-bold text-slate-800">Interactive Waste Calculator</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Household Size
            </label>
            <input
              type="number"
              min="1"
              value={formData.household}
              onChange={(e) => setFormData({ ...formData, household: Number(e.target.value) })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Food Waste (kg/day)
            </label>
            <input
              type="number"
              step="0.1"
              value={formData.foodWaste}
              onChange={(e) => setFormData({ ...formData, foodWaste: Number(e.target.value) })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Plastic Waste (kg/day)
            </label>
            <input
              type="number"
              step="0.1"
              value={formData.plastic}
              onChange={(e) => setFormData({ ...formData, plastic: Number(e.target.value) })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Paper Waste (kg/day)
            </label>
            <input
              type="number"
              step="0.1"
              value={formData.paper}
              onChange={(e) => setFormData({ ...formData, paper: Number(e.target.value) })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <button
            onClick={calculateWaste}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Calculate Impact
          </button>
        </div>

        {results && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 rounded-lg p-4 space-y-4"
          >
            <div className="flex items-center space-x-2 mb-4">
              <TrendingDown className="h-5 w-5 text-green-600" />
              <h4 className="font-semibold text-green-800">Your Waste Impact</h4>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="bg-white rounded p-3">
                <p className="text-sm text-slate-600">Daily Waste</p>
                <p className="text-lg font-bold text-slate-800">{results.daily.toFixed(1)} kg</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm text-slate-600">Monthly Waste</p>
                <p className="text-lg font-bold text-slate-800">{results.monthly.toFixed(1)} kg</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm text-slate-600">Yearly Waste</p>
                <p className="text-lg font-bold text-slate-800">{results.yearly.toFixed(1)} kg</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <h5 className="font-semibold text-green-800 mb-2">Reduction Potential</h5>
              <div className="space-y-2 text-sm">
                <p>Composting: -{(results.reduction.composting * 365).toFixed(0)} kg/year</p>
                <p>Recycling: -{(results.reduction.recycling * 365).toFixed(0)} kg/year</p>
                <p>Total Potential: -{(results.reduction.reduction * 365).toFixed(0)} kg/year</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WasteCalculator;