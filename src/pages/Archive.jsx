import React, { useState } from 'react';
import { 
  Search, Filter, Calendar, Download,
  ChevronDown, ChevronUp, FileText, Eye,
  Download as DownloadIcon, Trash2
} from 'lucide-react';

const ArchivePage = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    dateRange: '',
    requestType: '',
    department: '',
    status: ''
  });

  const [expandedRow, setExpandedRow] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const archivedRequests = [
    {
      id: 'REQ-2024-001',
      customer: 'Acme Corp',
      type: 'COI',
      submissionDate: '2024-01-15',
      completionDate: '2024-01-20',
      status: 'Completed',
      department: 'Sales',
      documents: [
        { name: 'Insurance Certificate.pdf', size: '2.4 MB', date: '2024-01-15' },
        { name: 'Additional Documentation.pdf', size: '1.1 MB', date: '2024-01-16' }
      ]
    },
    {
      id: 'REQ-2024-002',
      customer: 'TechCo Inc',
      type: 'Form',
      submissionDate: '2024-01-16',
      completionDate: '2024-01-22',
      status: 'Rejected',
      department: 'Operations',
      documents: [
        { name: 'W9 Form.pdf', size: '1.2 MB', date: '2024-01-16' },
        { name: 'Rejection Notice.pdf', size: '0.5 MB', date: '2024-01-22' }
      ]
    }
  ];

  const toggleRowExpansion = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const toggleItemSelection = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Archive</h1>
          <p className="mt-1 text-sm text-gray-500">
            Access and manage archived requests
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
            disabled={selectedItems.length === 0}
          >
            <Download className="w-4 h-4" />
            <span>Export Selected</span>
          </button>
          <button 
            className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50 text-red-600"
            disabled={selectedItems.length === 0}
          >
            <Trash2 className="w-4 h-4" />
            <span>Delete Selected</span>
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search archived requests..."
                className="pl-10 block w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <select
                  className="pl-10 block w-full rounded-md border border-gray-300 px-3 py-2"
                  value={selectedFilters.dateRange}
                  onChange={(e) => setSelectedFilters({...selectedFilters, dateRange: e.target.value})}
                >
                  <option value="">All Time</option>
                  <option value="last-week">Last Week</option>
                  <option value="last-month">Last Month</option>
                  <option value="last-quarter">Last Quarter</option>
                  <option value="last-year">Last Year</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Request Type</label>
              <select
                className="block w-full rounded-md border border-gray-300 px-3 py-2"
                value={selectedFilters.requestType}
                onChange={(e) => setSelectedFilters({...selectedFilters, requestType: e.target.value})}
              >
                <option value="">All Types</option>
                <option value="coi">COI</option>
                <option value="form">Form</option>
                <option value="contract">Contract</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <select
                className="block w-full rounded-md border border-gray-300 px-3 py-2"
                value={selectedFilters.department}
                onChange={(e) => setSelectedFilters({...selectedFilters, department: e.target.value})}
              >
                <option value="">All Departments</option>
                <option value="sales">Sales</option>
                <option value="operations">Operations</option>
                <option value="legal">Legal</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                className="block w-full rounded-md border border-gray-300 px-3 py-2"
                value={selectedFilters.status}
                onChange={(e) => setSelectedFilters({...selectedFilters, status: e.target.value})}
              >
                <option value="">All Statuses</option>
                <option value="completed">Completed</option>
                <option value="rejected">Rejected</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-8 px-6 py-3">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  checked={selectedItems.length === archivedRequests.length}
                  onChange={() => {
                    if (selectedItems.length === archivedRequests.length) {
                      setSelectedItems([]);
                    } else {
                      setSelectedItems(archivedRequests.map(req => req.id));
                    }
                  }}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Request Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Dates
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {archivedRequests.map((request) => (
              <React.Fragment key={request.id}>
                <tr className={`hover:bg-gray-50 ${expandedRow === request.id ? 'bg-gray-50' : ''}`}>
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={selectedItems.includes(request.id)}
                      onChange={() => toggleItemSelection(request.id)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button 
                        onClick={() => toggleRowExpansion(request.id)}
                        className="mr-2"
                      >
                        {expandedRow === request.id ? (
                          <ChevronUp className="w-4 h-4 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        )}
                      </button>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{request.id}</div>
                        <div className="text-sm text-gray-500">{request.customer}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      request.type === 'COI' 
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {request.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      request.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {request.department}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">
                      <div>Submitted: {request.submissionDate}</div>
                      <div>Completed: {request.completionDate}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Eye className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <DownloadIcon className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </td>
                </tr>
                {expandedRow === request.id && (
                  <tr className="bg-gray-50">
                    <td colSpan="7" className="px-6 py-4">
                      <div className="space-y-4">
                        <h4 className="text-sm font-medium text-gray-900">Associated Documents</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {request.documents.map((doc, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                              <div className="flex items-center space-x-3">
                                <FileText className="w-5 h-5 text-gray-400" />
                                <div>
                                  <div className="text-sm font-medium text-gray-900">{doc.name}</div>
                                  <div className="text-sm text-gray-500">{doc.size} • {doc.date}</div>
                                </div>
                              </div>
                              <button className="p-1 hover:bg-gray-100 rounded">
                                <DownloadIcon className="w-4 h-4 text-gray-500" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArchivePage;