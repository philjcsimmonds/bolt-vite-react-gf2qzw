import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Star, TrendingUp, Award, Target } from 'lucide-react';

const performanceData = [
  { name: 'Jan', value: 85 },
  { name: 'Feb', value: 78 },
  { name: 'Mar', value: 92 },
  { name: 'Apr', value: 88 },
  { name: 'May', value: 95 },
  { name: 'Jun', value: 89 },
];

const Performance = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Performance Management</h1>
        <p className="text-gray-600">Track and manage employee performance metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Average Rating', value: '4.8/5.0', icon: Star, color: 'bg-yellow-500' },
          { title: 'Performance Growth', value: '+12%', icon: TrendingUp, color: 'bg-green-500' },
          { title: 'Top Performers', value: '24', icon: Award, color: 'bg-purple-500' },
          { title: 'Goals Completed', value: '89%', icon: Target, color: 'bg-blue-500' },
        ].map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Performance Trends</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Reviews</h2>
          <div className="space-y-4">
            {[
              { name: 'Sarah Wilson', role: 'Senior Developer', rating: 4.9, date: '2 days ago' },
              { name: 'Michael Chen', role: 'Product Manager', rating: 4.7, date: '1 week ago' },
              { name: 'Emily Rodriguez', role: 'UX Designer', rating: 4.8, date: '2 weeks ago' },
            ].map((review, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-medium">{review.rating}</span>
                  </div>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;