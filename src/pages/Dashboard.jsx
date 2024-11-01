// import React, { useState } from 'react';
// import { 
//   BarChart, Users, Clock, AlertCircle, 
//   ChevronDown, Filter, Search, ArrowUpRight 
// } from 'lucide-react';

// const Dashboard = () => {
//   const [dateRange, setDateRange] = useState('week');

//   const stats = [
//     {
//       id: 1,
//       name: 'Active Requests',
//       value: '45',
//       change: '+12.3%',
//       changeType: 'increase',
//       icon: BarChart,
//       color: 'blue'
//     },
//     {
//       id: 2,
//       name: 'Pending Reviews',
//       value: '12',
//       change: '-2.1%',
//       changeType: 'decrease',
//       icon: Clock,
//       color: 'yellow'
//     },
//     {
//       id: 3,
//       name: 'Overdue today',
//       value: '3',
//       change: '+2',
//       changeType: 'increase',
//       icon: AlertCircle,
//       color: 'red'
//     },
//     {
//       id: 4,
//       name: 'Completed Today',
//       value: '8',
//       change: '+5',
//       changeType: 'increase',
//       icon: Users,
//       color: 'green'
//     }
//   ];

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
//         <div className="flex items-center space-x-4">
//           <select 
//             value={dateRange}
//             onChange={(e) => setDateRange(e.target.value)}
//             className="rounded-lg border border-gray-300 px-3 py-2"
//           >
//             <option value="today">Today</option>
//             <option value="week">This Week</option>
//             <option value="month">This Month</option>
//             <option value="quarter">This Quarter</option>
//           </select>
//         </div>
//       </div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {stats.map((stat) => (
//           <div key={stat.id} className="bg-white rounded-lg shadow p-6">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <div className={`p-2 rounded-lg bg-${stat.color}-100`}>
//                   <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
//                 </div>
//                 <div className="ml-4">
//                   <p className="text-sm font-medium text-gray-600">{stat.name}</p>
//                   <div className="flex items-baseline">
//                     <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
//                     <p className={`ml-2 text-sm font-medium ${
//                       stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
//                     }`}>
//                       {stat.change}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <ArrowUpRight className="w-5 h-5 text-gray-400" />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Recent Activity */}
//       <div className="bg-white rounded-lg shadow">
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex items-center justify-between">
//             <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
//             <div className="flex items-center space-x-3">
//               <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
//                 <Filter className="w-4 h-4" />
//                 <span>Filter</span>
//               </button>
//               <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
//                 <Search className="w-4 h-4" />
//                 <span>Search</span>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Request
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Type
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Updated
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Assigned To
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {[1, 2, 3, 4, 5].map((item) => (
//                 <tr key={item} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">REQ-2024-00{item}</div>
//                     <div className="text-sm text-gray-500">Acme Corporation</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
//                       COI
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
//                       In Review
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     2 hours ago
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <img src="/api/placeholder/24/24" alt="" className="h-6 w-6 rounded-full" />
//                       <div className="ml-2">
//                         <div className="text-sm font-medium text-gray-900">William Smith</div>
//                         <div className="text-sm text-gray-500">Legal Team</div>
//                       </div>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="px-6 py-4 border-t border-gray-200">
//           <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
//             View all activity
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import { 
  Search, Pencil, Filter, Clock, FileText, AlertCircle, CheckCircle, 
  Archive, ChevronDown, User, Download, Eye, Settings,
  ExternalLink, BookOpen, FileQuestion, BarChart
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [selectedRole, setSelectedRole] = useState('legal');
  const [showDocPreview, setShowDocPreview] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showExportOptions, setShowExportOptions] = useState(false);

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  const toggleExportOptions = () => {
    setShowExportOptions((prev) => !prev);
  };
  
  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header Section with Role Selector */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Legal Request Dashboard</h1>
        {/* Enhanced Action Bar */}
      <div className="flex flex-wrap gap-4 ">
        <div className="flex-1 min-w-[350px] ml-ato">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search any records"
              className="w-full pl-8 pr-4 py-2 border rounded-md"
            />
          </div>
        </div>
        {/* <div className='flex items-center'>
        <button onClick={toggleFilter} className="flex items-center">
            <Filter className="h-6 w-6 text-gray-500" />
          </button>
          {showFilter && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
              <div className="p-2">
                <h3 className="font-bold">Filters</h3>
                <div className="mt-2">
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Request Type
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Status
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Priority
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Date Range
                  </label>
                </div>
              </div>
            </div>
          )}
        </div></div> */}</div>
         {/* Filter Button */}
         <div className='relative'>
         <button onClick={toggleFilter} className="flex items-center">
            <Filter className="h-6 w-6 text-gray-500" />
          </button>
          {showFilter && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
              <div className="p-2">
                <h3 className="font-bold">Filters</h3>
                <div className="mt-2">
                  <label className="block cursor-pointer hover:bg-gray-100 p-1">
                    <input type="checkbox" className="mr-2" />
                    Request Type
                  </label>
                  <label className="block cursor-pointer hover:bg-gray-100 p-1">
                    <input type="checkbox" className="mr-2" />
                    Status
                  </label>
                  <label className="block cursor-pointer hover:bg-gray-100 p-1">
                    <input type="checkbox" className="mr-2" />
                    Priority
                  </label>
                  <label className="block cursor-pointer hover:bg-gray-100 p-1">
                    <input type="checkbox" className="mr-2" />
                    Date Range
                  </label>
                </div>
              </div>
            </div>
          )}</div>

        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
              + New Request
            </button>

            {/* <button className="flex items-center gap-2 px-4 py-2 border rounded-md">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button> */}

                      {/* Export Button with Dropdown */}
          <div className="relative">
            <button 
              onClick={toggleExportOptions} 
              className="flex items-center gap-2 px-4 py-2 border rounded-md"
            >
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
            {showExportOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                <div className="p-2">
                  <h3 className="font-bold">Export Options</h3>
                  <ul className="mt-2">
                    <li 
                      className="cursor-pointer hover:bg-gray-100 p-1" 
                      onClick={() => console.log('Export PDF')}
                    >
                      Export PDF
                    </li>
                    <li 
                      className="cursor-pointer hover:bg-gray-100 p-1" 
                      onClick={() => console.log('Export CSV')}
                    >
                      Export CSV
                    </li>
                    <li 
                      className="cursor-pointer hover:bg-gray-100 p-1" 
                      onClick={() => console.log('Export XLSX')}
                    >
                      Export XLSX
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>


        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-md" title="FAQ">
              <FileQuestion className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md" title="Form Templates">
              <BookOpen className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md" title="Reports">
              <BarChart className="h-5 w-5" />
            </button>
          </div>

          <select 
            className="border rounded-md p-2"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="legal">Legal Team</option>
            {/* <option value="sales">Sales Team</option>
            <option value="account">Account Manager</option> */}
          </select>

          <div className="flex items-center gap-2">
            <User className="h-5 w-5" />
            <span>Welcome, John</span>
          </div>
        </div>
      </div>

      {/* Updated KPI Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Active Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-gray-500">+3 from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Form Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-gray-500">2 pending responses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">COI Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-gray-500">Avg. response: 30min</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Pending Internal Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-500">4 high priority</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">With Outside Counsel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-gray-500">3 high priority</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Pending Customer Response</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-gray-500">3 High Priority</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Overdue Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">5</div>
            <p className="text-xs text-gray-500">Requires immediate action</p>
          </CardContent>
        </Card>

        

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Completed Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-gray-500">90% within SLA</p>
          </CardContent>
        </Card>
      </div>

      {/* Action Bar */}
      {/* ... Previous Action Bar Code ... */}

      {/* Updated Main Table with All Request Types */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
            <th className="w-8 px-6 py-3">
            <input
                  type="checkbox"
                  className="rounded border-gray-300"
                />
              </th>
              <th className="text-left p-4 border-b">Request ID</th>
              <th className="text-left p-4 border-b">Customer Name</th>
              <th className="text-left p-4 border-b">Type</th>
              <th className="text-left p-4 border-b">Subject</th>
              <th className="text-left p-4 border-b">Requester</th>
              <th className="text-left p-4 border-b">Status</th>
              <th className="text-left p-4 border-b">Received Date</th>
              <th className="text-left p-4 border-b">Documents</th>
              <th className="text-left p-4 border-b mr-4">Actions</th>
              <th className="text-left p-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {/* NDA Example */}
            <tr className="border-b hover:bg-gray-50">
            <td className="w-8 px-6 py-3">
            <input
                  type="checkbox"
                  className="rounded border-gray-300"></input></td>
              <td className="p-4">LEG-2024-001</td>
              <td className="p-4">Acme Corp</td>
              <td className="p-4">NDA</td>
              <td className="p-4">Client Agreement Review</td>
              <td className="p-4">John Smith</td>
              <td className="p-4">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">In Review</span>
              </td>
              <td className="p-4">2024-10-29</td>
              <td className="p-4">
                <div className="flex gap-2">
                  <Eye className="h-4 w-4 cursor-pointer" />
                  <ExternalLink className="h-4 w-4 cursor-pointer" />
                </div>
              </td>
              <td className="p-4">
                <button className="text-blue-600 hover:text-blue-800">View Details</button>
              </td>
              <td className="p-4">
              <div className="flex gap-2">
                  <Pencil className="h-4 w-4 cursor-pointer" />
                  <Archive className="h-4 w-4 cursor-pointer" />
                </div>
              </td>
            </tr>

            {/* MSA Example */}
            <tr className="border-b hover:bg-gray-50">
            <td className="w-8 px-6 py-3">
            <input
                  type="checkbox"
                  className="rounded border-gray-300"></input></td>
              <td className="p-4">LEG-2024-002</td>
              <td className="p-4">TechStart Inc</td>
              <td className="p-4">MSA</td>
              <td className="p-4">Master Service Agreement</td>
              <td className="p-4">Sarah Jones</td>
              <td className="p-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">With Outside Counsel</span>
              </td>
              <td className="p-4">2024-10-29</td>
              <td className="p-4">
                <div className="flex gap-2">
                  <Eye className="h-4 w-4 cursor-pointer" />
                  <ExternalLink className="h-4 w-4 cursor-pointer" />
                </div>
              </td>
              <td className="p-4">
                <button className="text-blue-600 hover:text-blue-800">View Details</button>
              </td>
              <td className="p-4">
              <div className="flex gap-2">
                  <Pencil className="h-4 w-4 cursor-pointer" />
                  <Archive className="h-4 w-4 cursor-pointer" />
                </div>
              </td>
            </tr>

            {/* COI Example */}
            <tr className="border-b hover:bg-gray-50">
            <td className="w-8 px-6 py-3">
            <input
                  type="checkbox"
                  className="rounded border-gray-300"></input></td>
              <td className="p-4">LEG-2024-003</td>
              <td className="p-4">BuildRight LLC</td>
              <td className="p-4">COI</td>
              <td className="p-4">Certificate of Insurance Request</td>
              <td className="p-4">Mike Wilson</td>
              <td className="p-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Sent to Broker</span>
              </td>
              <td className="p-4">2024-10-29</td>
              <td className="p-4">
                <div className="flex gap-2">
                  <Eye className="h-4 w-4 cursor-pointer" />
                  <ExternalLink className="h-4 w-4 cursor-pointer" />
                </div>
              </td>
              <td className="p-4">
                <button className="text-blue-600 hover:text-blue-800">View Details</button>
              </td>
              <td className="p-4">
              <div className="flex gap-2">
                  <Pencil className="h-4 w-4 cursor-pointer" />
                  <Archive className="h-4 w-4 cursor-pointer" />
                </div>
              </td>
            </tr>

            {/* Form Request Example */}
            <tr className="border-b hover:bg-gray-50">
            <td className="w-8 px-6 py-3">
            <input
                  type="checkbox"
                  className="rounded border-gray-300"></input></td>
              <td className="p-4">LEG-2024-004</td>
              <td className="p-4">Global Services</td>
              <td className="p-4">Form Request</td>
              <td className="p-4">Customer Information Form</td>
              <td className="p-4">Lisa Chen</td>
              <td className="p-4">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Pending Response</span>
              </td>
              <td className="p-4">2024-10-29</td>
              <td className="p-4">
                <div className="flex gap-2">
                  <Eye className="h-4 w-4 cursor-pointer" />
                  <ExternalLink className="h-4 w-4 cursor-pointer" />
                </div>
              </td>
              <td className="p-4">
                <button className="text-blue-600 hover:text-blue-800">View Details</button>
              </td>
              <td className="p-4">
              <div className="flex gap-2">
                  <Pencil className="h-4 w-4 cursor-pointer" />
                  <Archive className="h-4 w-4 cursor-pointer" />
                </div>
              </td>
            </tr>

            {/* Sub Contract Example */}
            <tr className="border-b hover:bg-gray-50">
            <td className="w-8 px-6 py-3">
            <input
                  type="checkbox"
                  className="rounded border-gray-300"></input></td>
              <td className="p-4">LEG-2024-005</td>
              <td className="p-4">Metro Systems</td>
              <td className="p-4">Sub Contract</td>
              <td className="p-4">Vendor Agreement</td>
              <td className="p-4">Robert Brown</td>
              <td className="p-4">
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">Overdue</span>
              </td>
              <td className="p-4">2024-10-29</td>
              <td className="p-4">
                <div className="flex gap-2">
                  <Eye className="h-4 w-4 cursor-pointer" />
                  <ExternalLink className="h-4 w-4 cursor-pointer" />
                </div>
              </td>
              <td className="p-4">
                <button className="text-blue-600 hover:text-blue-800">View Details</button>
              </td>
              <td className="p-4">
              <div className="flex gap-2">
                  <Pencil className="h-4 w-4 cursor-pointer" />
                  <Archive className="h-4 w-4 cursor-pointer" />
                </div>
              </td>
            </tr>


            {/* Sub Contract Example */}
            <tr className="border-b hover:bg-gray-50">
            <td className="w-8 px-6 py-3">
            <input
                  type="checkbox"
                  className="rounded border-gray-300"></input></td>
              <td className="p-4">LEG-2024-006</td>
              <td className="p-4">TechIO</td>
              <td className="p-4">Contract</td>
              <td className="p-4">Vendor Agreement</td>
              <td className="p-4">Robert Brown</td>
              <td className="p-4">
                <span className="px-2 py-1 bg-pink-100 text-gray-800 rounded-full text-sm">Received</span>
              </td>
              <td className="p-4">2024-10-29</td>
              <td className="p-4">
                <div className="flex gap-2">
                  <Eye className="h-4 w-4 cursor-pointer" />
                  <ExternalLink className="h-4 w-4 cursor-pointer" />
                </div>
              </td>
              <td className="p-4">
                <button className="text-blue-600 hover:text-blue-800">View Details</button>
              </td>
              <td className="p-4">
              <div className="flex gap-2">
                  <Pencil className="h-4 w-4 cursor-pointer" />
                  <Archive className="h-4 w-4 cursor-pointer" />
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      

      {/* Updated Status Legend */}
      <div className="mt-6 p-4 bg-gray-50 rounded-md">
        <h3 className="font-semibold mb-2">Status Definitions:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <span className="px-2 py-1 bg-pink-100 text-gray-800 rounded-full text-sm">Received</span>
            - New request, initial review pending
          </div>
          <div>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">In Review</span>
            - Under internal review
          </div>
          <div>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">With Outside Counsel</span>
            - Sent for external review
          </div>
          <div>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Sent to Broker</span>
            - COI request with insurance broker
          </div>
          <div>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Pending Response</span>
            - Awaiting customer/requester input
          </div>
          <div>
            <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">Overdue</span>
            - Past SLA deadline
          </div>
        </div>
      </div>

      {/* Document Preview Modal */}
      {showDocPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold">Document Preview</h3>
              <button onClick={() => setShowDocPreview(false)}>✕</button>
            </div>
            <div className="border p-4 h-full">
              <p>Document preview content would appear here</p>
            </div>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div>Showing 1-5 of 24 requests</div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded-md">Previous</button>
          <button className="px-3 py-1 border rounded-md bg-blue-600 text-white">1</button>
          <button className="px-3 py-1 border rounded-md">2</button>
          <button className="px-3 py-1 border rounded-md">3</button>
          <button className="px-3 py-1 border rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;