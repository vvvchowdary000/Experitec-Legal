// import React, { useState } from 'react';
// import {
//   Search, Download, Filter, Calendar, FileText,
//   Shield, ClipboardCheck, AlertCircle, Clock,
//   ChevronDown, Plus, ExternalLink, Archive
// } from 'lucide-react';

// const COIandFormTracker = () => {
//   const [activeTab, setActiveTab] = useState('coi');
//   const [selectedRequest, setSelectedRequest] = useState(null);

//   // Mock data
//   const coiRequests = [
//     {
//       id: "COI-2024-001",
//       customer: "Acme Corp",
//       insuranceType: "General Liability",
//       coverageAmount: "$2,000,000",
//       expirationDate: "2024-12-31",
//       status: "Active",
//       endorsements: ["Additional Insured", "Waiver of Subrogation"],
//       lastUpdated: "2024-10-15"
//     },
//     {
//       id: "COI-2024-002",
//       customer: "TechCo Inc",
//       insuranceType: "Professional Liability",
//       coverageAmount: "$1,000,000",
//       expirationDate: "2024-11-30",
//       status: "Pending Review",
//       endorsements: ["Primary Coverage"],
//       lastUpdated: "2024-10-14"
//     }
//   ];

//   const formRequests = [
//     {
//       id: "FORM-2024-001",
//       type: "W-9",
//       customer: "Acme Corp",
//       status: "Pending Approval",
//       requiredFields: {
//         taxId: "Complete",
//         businessName: "Complete",
//         address: "Incomplete"
//       },
//       lastUpdated: "2024-10-15"
//     },
//     {
//       id: "FORM-2024-002",
//       type: "Vendor Registration",
//       customer: "TechCo Inc",
//       status: "Approved",
//       requiredFields: {
//         companyInfo: "Complete",
//         bankDetails: "Complete",
//         references: "Complete"
//       },
//       lastUpdated: "2024-10-14"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold text-gray-900">
//             {activeTab === 'coi' ? 'Certificate of Insurance Tracking' : 'Form Request Tracking'}
//           </h1>
//           <div className="flex space-x-4">
//             <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center space-x-2">
//               <Download className="w-4 h-4" />
//               <span>Export</span>
//             </button>
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
//               <Plus className="w-4 h-4" />
//               <span>New Request</span>
//             </button>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="bg-white rounded-lg shadow">
//           <nav className="flex space-x-8 p-4 border-b">
//             <button
//               onClick={() => setActiveTab('coi')}
//               className={`px-3 py-2 text-sm font-medium rounded-md ${
//                 activeTab === 'coi'
//                   ? 'bg-blue-50 text-blue-700'
//                   : 'text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               COI Requests
//             </button>
//             <button
//               onClick={() => setActiveTab('forms')}
//               className={`px-3 py-2 text-sm font-medium rounded-md ${
//                 activeTab === 'forms'
//                   ? 'bg-blue-50 text-blue-700'
//                   : 'text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               Form Requests
//             </button>
//           </nav>
//         </div>

//         {/* Filters */}
//         <div className="bg-white p-4 rounded-lg shadow mt-6">
//           <div className="flex flex-wrap gap-4">
//             <div className="relative flex-1">
//               <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search requests..."
//                 className="w-full pl-10 pr-4 py-2 border rounded-lg"
//               />
//             </div>
//             <div className="flex space-x-4">
//               <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center space-x-2">
//                 <Filter className="w-4 h-4" />
//                 <span>Filter</span>
//               </button>
//               <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center space-x-2">
//                 <Calendar className="w-4 h-4" />
//                 <span>Date Range</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="grid grid-cols-3 gap-6 mt-6">
//           {/* List Panel */}
//           <div className="col-span-2 bg-white rounded-lg shadow overflow-hidden">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   {activeTab === 'coi' ? (
//                     <>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Details</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Coverage</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expiration</th>
//                     </>
//                   ) : (
//                     <>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Form Details</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Completion</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Updated</th>
//                     </>
//                   )}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {activeTab === 'coi' ? (
//                   coiRequests.map(request => (
//                     <tr
//                       key={request.id}
//                       onClick={() => setSelectedRequest(request)}
//                       className="hover:bg-gray-50 cursor-pointer"
//                     >
//                       <td className="px-6 py-4">
//                         <div className="text-sm font-medium text-gray-900">{request.id}</div>
//                         <div className="text-sm text-gray-500">{request.customer}</div>
//                         <div className="text-sm text-gray-500">{request.insuranceType}</div>
//                       </td>
//                       <td className="px-6 py-4 text-sm text-gray-500">{request.coverageAmount}</td>
//                       <td className="px-6 py-4">
//                         <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                           request.status === 'Active'
//                             ? 'bg-green-100 text-green-800'
//                             : 'bg-yellow-100 text-yellow-800'
//                         }`}>
//                           {request.status}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 text-sm text-gray-500">{request.expirationDate}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   formRequests.map(request => (
//                     <tr
//                       key={request.id}
//                       onClick={() => setSelectedRequest(request)}
//                       className="hover:bg-gray-50 cursor-pointer"
//                     >
//                       <td className="px-6 py-4">
//                         <div className="text-sm font-medium text-gray-900">{request.id}</div>
//                         <div className="text-sm text-gray-500">{request.customer}</div>
//                         <div className="text-sm text-gray-500">{request.type}</div>
//                       </td>
//                       <td className="px-6 py-4">
//                         <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                           request.status === 'Approved'
//                             ? 'bg-green-100 text-green-800'
//                             : 'bg-yellow-100 text-yellow-800'
//                         }`}>
//                           {request.status}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4">
//                         {Object.entries(request.requiredFields).map(([field, status]) => (
//                           <div key={field} className="flex items-center space-x-2">
//                             <span className={`w-2 h-2 rounded-full ${
//                               status === 'Complete' ? 'bg-green-500' : 'bg-yellow-500'
//                             }`} />
//                             <span className="text-sm text-gray-500">{field}</span>
//                           </div>
//                         ))}
//                       </td>
//                       <td className="px-6 py-4 text-sm text-gray-500">{request.lastUpdated}</td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* Detail Panel */}
//           <div className="bg-white rounded-lg shadow p-6">
//             {selectedRequest ? (
//               <div className="space-y-6">
//                 <div className="flex justify-between items-start">
//                   <h2 className="text-lg font-medium text-gray-900">{selectedRequest.id}</h2>
//                   <button className="text-blue-600 hover:text-blue-700">
//                     <ExternalLink className="w-5 h-5" />
//                   </button>
//                 </div>

//                 <div className="space-y-4">
//                   <div>
//                     <h3 className="text-sm font-medium text-gray-500 mb-2">
//                       {activeTab === 'coi' ? 'Insurance Details' : 'Form Details'}
//                     </h3>
//                     <div className="space-y-2">
//                       {activeTab === 'coi' ? (
//                         <>
//                           <div className="flex justify-between">
//                             <span className="text-sm text-gray-600">Type</span>
//                             <span className="text-sm font-medium">{selectedRequest.insuranceType}</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="text-sm text-gray-600">Coverage</span>
//                             <span className="text-sm font-medium">{selectedRequest.coverageAmount}</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="text-sm text-gray-600">Expiration</span>
//                             <span className="text-sm font-medium">{selectedRequest.expirationDate}</span>
//                           </div>
//                         </>
//                       ) : (
//                         <>
//                           <div className="flex justify-between">
//                             <span className="text-sm text-gray-600">Type</span>
//                             <span className="text-sm font-medium">{selectedRequest.type}</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="text-sm text-gray-600">Status</span>
//                             <span className="text-sm font-medium">{selectedRequest.status}</span>
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="text-sm font-medium text-gray-500 mb-2">
//                       {activeTab === 'coi' ? 'Required Endorsements' : 'Required Fields'}
//                     </h3>
//                     <div className="space-y-2">
//                       {activeTab === 'coi' ? (
//                         selectedRequest.endorsements.map(endorsement => (
//                           <div key={endorsement} className="flex items-center space-x-2">
//                             <Shield className="w-4 h-4 text-green-500" />
//                             <span className="text-sm text-gray-600">{endorsement}</span>
//                           </div>
//                         ))
//                       ) : (
//                         Object.entries(selectedRequest.requiredFields).map(([field, status]) => (
//                           <div key={field} className="flex justify-between items-center">
//                             <span className="text-sm text-gray-600">{field}</span>
//                             <span className={`text-sm font-medium ${
//                               status === 'Complete' ? 'text-green-600' : 'text-yellow-600'
//                             }`}>
//                               {status}
//                             </span>
//                           </div>
//                         ))
//                       )}
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="text-sm font-medium text-gray-500 mb-2">Notes</h3>
//                     <textarea
//                       className="w-full rounded-lg border border-gray-300 p-2 text-sm"
//                       rows="3"
//                       placeholder="Add notes..."
//                     />
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="flex items-center justify-center h-full text-gray-500">
//                 Select a request to view details
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default COIandFormTracker;

import React, { useState } from "react";
import {
  Search,
  Download,
  Filter,
  Calendar,
  Plus,
  ExternalLink,
  Shield,
} from "lucide-react";

const COIandFormTracker = () => {
  const [activeTab, setActiveTab] = useState("coi");
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Mock data
  const coiRequests = [
    {
      id: "COI-2024-001",
      customer: "Acme Corp",
      insuranceType: "General Liability",
      coverageAmount: "$2,000,000",
      expirationDate: "2024-12-31",
      status: "Active",
      endorsements: ["Additional Insured", "Waiver of Subrogation"],
      lastUpdated: "11-15-2024",
    },
    {
      id: "COI-2024-002",
      customer: "TechCo Inc",
      insuranceType: "Professional Liability",
      coverageAmount: "$1,000,000",
      expirationDate: "2024-11-30",
      status: "Pending Review",
      endorsements: ["Primary Coverage"],
      lastUpdated: "10-15-2024",
    },
  ];

  const formRequests = [
    {
      id: "FORM-2024-001",
      type: "W-9",
      customer: "Acme Corp",
      status: "Pending Approval",
      requiredFields: {
        taxId: "Complete",
        businessName: "Complete",
        address: "Incomplete",
      },
      lastUpdated: "10-15-2024",
    },
    {
      id: "FORM-2024-002",
      type: "Vendor Registration",
      customer: "TechCo Inc",
      status: "Approved",
      requiredFields: {
        companyInfo: "Complete",
        bankDetails: "Complete",
        references: "Complete",
      },
      lastUpdated: "11-15-2024",
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Clear selected request when switching tabs
    setSelectedRequest(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {activeTab === "coi"
              ? "Certificate of Insurance (COI)"
              : "Form Request"}
          </h1>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>New Request</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow">
          <nav className="flex space-x-8 p-4 border-b">
            <button
              onClick={() => handleTabChange("coi")}
              className={`px-3 py-2 text-sm font-medium rounded-md ${activeTab === "coi" ? "bg-blue-50 text-blue-700" : "text-gray-500 hover:text-gray-700"}`}
            >
              COI Requests
            </button>
            <button
              onClick={() => handleTabChange("forms")}
              className={`px-3 py-2 text-sm font-medium rounded-md ${activeTab === "forms" ? "bg-blue-50 text-blue-700" : "text-gray-500 hover:text-gray-700"}`}
            >
              Form Requests
            </button>
          </nav>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow mt-6">
          <div className="flex flex-wrap gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search requests..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
              />
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Date Range</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          {/* List Panel */}
          <div className="col-span-2 bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {activeTab === "coi" ? (
                    <>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Coverage
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Expiration
                      </th>
                    </>
                  ) : (
                    <>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Form Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Completion
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Last Updated
                      </th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {activeTab === "coi"
                  ? coiRequests.map((request) => (
                      <tr
                        key={request.id}
                        onClick={() => setSelectedRequest(request)}
                        className="hover:bg-gray-50 cursor-pointer"
                      >
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">
                            {request.id}
                          </div>
                          <div className="text-sm text-gray-500">
                            {request.customer}
                          </div>
                          <div className="text-sm text-gray-500">
                            {request.insuranceType}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {request.coverageAmount}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${request.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                          >
                            {request.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {request.expirationDate}
                        </td>
                      </tr>
                    ))
                  : formRequests.map((request) => (
                      <tr
                        key={request.id}
                        onClick={() => setSelectedRequest(request)}
                        className="hover:bg-gray-50 cursor-pointer"
                      >
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">
                            {request.id}
                          </div>
                          <div className="text-sm text-gray-500">
                            {request.customer}
                          </div>
                          <div className="text-sm text-gray-500">
                            {request.type}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${request.status === "Approved" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                          >
                            {request.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {Object.keys(request.requiredFields).length}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {request.lastUpdated}
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>

          {/* Detail Panel */}
          <div className="bg-white rounded-lg shadow p-6">
            {selectedRequest ? (
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-medium text-gray-900">
                    {selectedRequest.id}
                  </h2>
                  <button className="text-blue-600 hover:text-blue-700">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">
                      {activeTab === "coi"
                        ? "Insurance Details"
                        : "Form Details"}
                    </h3>
                    <div className="space-y-2">
                      {activeTab === "coi" ? (
                        <>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Type</span>
                            <span className="text-sm font-medium">
                              {selectedRequest.insuranceType || "N/A"}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">
                              Coverage
                            </span>
                            <span className="text-sm font-medium">
                              {selectedRequest.coverageAmount || "N/A"}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">
                              Expiration
                            </span>
                            <span className="text-sm font-medium">
                              {selectedRequest.expirationDate || "N/A"}
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Type</span>
                            <span className="text-sm font-medium">
                              {selectedRequest.type || "N/A"}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">
                              Status
                            </span>
                            <span className="text-sm font-medium">
                              {selectedRequest.status || "N/A"}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">
                      {activeTab === "coi"
                        ? "Required Endorsements"
                        : "Required Fields"}
                    </h3>
                    <div className="space-y-2">
                      {activeTab === "coi" ? (
                        selectedRequest.endorsements ? (
                          selectedRequest.endorsements.map((endorsement) => (
                            <div
                              key={endorsement}
                              className="flex items-center space-x-2"
                            >
                              <Shield className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-gray-600">
                                {endorsement}
                              </span>
                            </div>
                          ))
                        ) : (
                          <div className="text-sm text-gray-500">N/A</div>
                        )
                      ) : (
                        Object.entries(selectedRequest.requiredFields).map(
                          ([field, status]) => (
                            <div
                              key={field}
                              className="flex justify-between items-center"
                            >
                              <span className="text-sm text-gray-600">
                                {field}
                              </span>
                              <span
                                className={`text-sm font-medium ${status === "Complete" ? "text-green-600" : "text-yellow-600"}`}
                              >
                                {status}
                              </span>
                            </div>
                          ),
                        )
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">
                      Notes
                    </h3>
                    <textarea
                      className="w-full rounded-lg border border-gray-300 p-2 text-sm"
                      rows="3"
                      placeholder="Add notes..."
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                Select a request to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default COIandFormTracker;
