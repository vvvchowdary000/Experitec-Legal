import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  FileText, 
  Download, 
  Edit, 
  Trash2, 
  Eye,
  Clock,
  Filter,
  SortAsc
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const FormTemplatesScreen = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };
  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Form Templates Library</h1>
          <p className="text-sm text-gray-500">Manage and access standardized forms and questionnaires</p>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md">
          <Plus className="h-4 w-4" />
          New Template
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-gray-500">5 categories</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Recently Added</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500">This week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Most Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Customer Info</div>
            <p className="text-xs text-gray-500">42 uses this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Need Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-gray-500">Updates pending</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search templates..."
              className="w-full pl-8 pr-4 py-2 border rounded-md"
            />
          </div>
        </div>

        {/* <button className="flex items-center gap-2 px-4 py-2 border rounded-md">
          <Filter className="h-4 w-4" />
          Category
        </button> */}

        <div className='relative flex items-center'>
        <button onClick={toggleFilter} className="flex items-center gap-2 px-4 py-2 border rounded-md">
            <Filter className="h-4 w-4" />
            Category
          </button>
          {showFilter && (
            <div className="absolute left-1/2 tranform -translate-y-1/2 mt-12 w-48 bg-white border rounded-md shadow-lg z-10">
              <div className="p-2">
                <h3 className="font-bold">Filters</h3>
                <div className="mt-2">
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Customer Forms
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Vendor Forms
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Surveys
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Information Requests
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Questionnaires
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        <button className="flex items-center gap-2 px-4 py-2 border rounded-md">
          <SortAsc className="h-4 w-4" />
          Sort
        </button></div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Customer Information Form */}
        <div className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold">Customer Information Form</h3>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Active</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">Standard customer information collection form with pre-populated fields</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Last updated: 2 days ago</span>
            <div className="flex gap-2">
              <button className="p-1 hover:text-blue-600"><Eye className="h-4 w-4" /></button>
              <button className="p-1 hover:text-blue-600"><Edit className="h-4 w-4" /></button>
              <button className="p-1 hover:text-blue-600"><Download className="h-4 w-4" /></button>
            </div>
          </div>
        </div>

        {/* Survey Template */}
        <div className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold">Customer Survey Template</h3>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Active</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">Standardized survey format with common customer feedback questions</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Last updated: 1 week ago</span>
            <div className="flex gap-2">
              <button className="p-1 hover:text-blue-600"><Eye className="h-4 w-4" /></button>
              <button className="p-1 hover:text-blue-600"><Edit className="h-4 w-4" /></button>
              <button className="p-1 hover:text-blue-600"><Download className="h-4 w-4" /></button>
            </div>
          </div>
        </div>

        {/* Request Information Form */}
        <div className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold">Request Information Form</h3>
            </div>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Review Needed</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">Template for collecting additional information from customers</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Last updated: 1 month ago</span>
            <div className="flex gap-2">
              <button className="p-1 hover:text-blue-600"><Eye className="h-4 w-4" /></button>
              <button className="p-1 hover:text-blue-600"><Edit className="h-4 w-4" /></button>
              <button className="p-1 hover:text-blue-600"><Download className="h-4 w-4" /></button>
            </div>
          </div>
        </div>

        {/* Vendor Information Form */}
        <div className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold">Vendor Information Form</h3>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Active</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">Standard vendor data collection form with required fields</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Last updated: 2 weeks ago</span>
            <div className="flex gap-2">
              <button className="p-1 hover:text-blue-600"><Eye className="h-4 w-4" /></button>
              <button className="p-1 hover:text-blue-600"><Edit className="h-4 w-4" /></button>
              <button className="p-1 hover:text-blue-600"><Download className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Customer Forms</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Vendor Forms</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Surveys</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Information Requests</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Questionnaires</span>
        </div>
      </div>
    </div>
  );
};

export default FormTemplatesScreen;