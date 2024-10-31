import React from 'react';
import { Briefcase, MapPin, Clock, Users } from 'lucide-react';

const jobListings = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    applicants: 45,
    posted: '2 days ago',
  },
  {
    id: 2,
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    applicants: 28,
    posted: '1 week ago',
  },
  {
    id: 3,
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'New York, NY',
    type: 'Full-time',
    applicants: 32,
    posted: '3 days ago',
  },
];

const Recruitment = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Recruitment</h1>
          <p className="text-gray-600">Manage job postings and applications</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Post New Job
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Active Jobs', value: '12', icon: Briefcase, color: 'bg-blue-500' },
          { label: 'Total Applications', value: '145', icon: Users, color: 'bg-green-500' },
          { label: 'Interviews Scheduled', value: '28', icon: Clock, color: 'bg-purple-500' },
          { label: 'Positions Filled', value: '8', icon: MapPin, color: 'bg-yellow-500' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Active Job Listings</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {jobListings.map((job) => (
            <div key={job.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                  <div className="mt-1 flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.posted}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-gray-900">{job.applicants}</span> applicants
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recruitment;