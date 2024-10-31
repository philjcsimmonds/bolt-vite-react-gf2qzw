import React from 'react';
import { Book, Clock, Users, Award, PlayCircle, Calendar } from 'lucide-react';

const Training = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Training & Development</h1>
        <p className="text-gray-600">Manage employee learning and development programs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Active Courses', value: '24', icon: Book, color: 'bg-blue-500' },
          { title: 'Training Hours', value: '1,450', icon: Clock, color: 'bg-green-500' },
          { title: 'Enrolled Users', value: '892', icon: Users, color: 'bg-purple-500' },
          { title: 'Certifications', value: '156', icon: Award, color: 'bg-yellow-500' },
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
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Popular Courses</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {[
              {
                title: 'Leadership Essentials',
                enrolled: 245,
                duration: '8 hours',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=150',
              },
              {
                title: 'Project Management Fundamentals',
                enrolled: 189,
                duration: '12 hours',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=150',
              },
              {
                title: 'Communication Skills',
                enrolled: 167,
                duration: '6 hours',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150',
              },
            ].map((course, index) => (
              <div key={index} className="p-6 hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{course.title}</h3>
                    <div className="mt-1 flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.enrolled} enrolled
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                    <PlayCircle className="h-5 w-5" />
                    Start
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Upcoming Training Sessions</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {[
              {
                title: 'New Employee Orientation',
                date: 'March 15, 2024',
                time: '10:00 AM',
                instructor: 'Sarah Wilson',
                attendees: 12,
              },
              {
                title: 'Advanced Excel Workshop',
                date: 'March 18, 2024',
                time: '2:00 PM',
                instructor: 'Michael Chen',
                attendees: 8,
              },
              {
                title: 'Team Building Workshop',
                date: 'March 20, 2024',
                time: '1:00 PM',
                instructor: 'Emily Rodriguez',
                attendees: 15,
              },
            ].map((session, index) => (
              <div key={index} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{session.title}</h3>
                    <div className="mt-1 flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {session.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {session.time}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Instructor: {session.instructor}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">
                        {session.attendees} attendees
                      </span>
                      <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        Join
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Training;