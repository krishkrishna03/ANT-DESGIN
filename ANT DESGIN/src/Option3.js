import React, { useState } from 'react';
import { Table, Pagination, Input, Select } from 'antd';
import jsonData from './data.json'; // Importing the JSON data

const { Option } = Select;

const Option2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({}); // State to store filters for each column
  const pageSize = 10; // Number of items per page

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (column, value) => {
    const newFilters = { ...filters, [column]: value };
    setFilters(newFilters);
  };

  // Filter data based on filters state
  const filteredData = jsonData.filter(item => {
    for (let key in filters) {
      if (filters[key] && item[key] !== filters[key]) {
        return false;
      }
    }
    return true;
  });

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const dataForCurrentPage = filteredData.slice(startIndex, endIndex);

  // Define columns for the table
  const columns = [
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Select
            style={{ width: 120 }}
            value={selectedKeys[0]}
            onChange={(value) => handleFilterChange('gender', value)}
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
          <div style={{ marginTop: 8 }}>
            <button onClick={() => confirm()}>Filter</button>
            <button onClick={() => clearFilters()}>Reset</button>
          </div>
        </div>
      ),
      filterIcon: () => <div style={{ width: 12, height: 12, background: 'red' }} />,
    },
    {
      title: 'Race/Ethnicity',
      dataIndex: 'race_ethnicity',
      key: 'race_ethnicity',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search race/ethnicity"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <button onClick={() => confirm()}>Filter</button>
          <button onClick={() => clearFilters()}>Reset</button>
        </div>
      ),
      filterIcon: () => <div style={{ width: 12, height: 12, background: 'red' }} />,
    },
    {
      title: 'Parental Level of Education',
      dataIndex: 'parental_level_of_education',
      key: 'parental_level_of_education',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search level of education"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <button onClick={() => confirm()}>Filter</button>
          <button onClick={() => clearFilters()}>Reset</button>
        </div>
      ),
      filterIcon: () => <div style={{ width: 12, height: 12, background: 'red' }} />,
    },
    {
      title: 'Lunch',
      dataIndex: 'lunch',
      key: 'lunch',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Select
            style={{ width: 120 }}
            value={selectedKeys[0]}
            onChange={(value) => handleFilterChange('lunch', value)}
          >
            <Option value="standard">Standard</Option>
            <Option value="free/reduced">Free/Reduced</Option>
          </Select>
          <div style={{ marginTop: 8 }}>
            <button onClick={() => confirm()}>Filter</button>
            <button onClick={() => clearFilters()}>Reset</button>
          </div>
        </div>
      ),
      filterIcon: () => <div style={{ width: 12, height: 12, background: 'red' }} />,
    },
    {
      title: 'Test Preparation Course',
      dataIndex: 'test_preparation_course',
      key: 'test_preparation_course',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Select
            style={{ width: 120 }}
            value={selectedKeys[0]}
            onChange={(value) => handleFilterChange('test_preparation_course', value)}
          >
            <Option value="none">None</Option>
            <Option value="completed">Completed</Option>
          </Select>
          <div style={{ marginTop: 8 }}>
            <button onClick={() => confirm()}>Filter</button>
            <button onClick={() => clearFilters()}>Reset</button>
          </div>
        </div>
      ),
      filterIcon: () => <div style={{ width: 12, height: 12, background: 'red' }} />,
    },
    {
      title: 'Math Score',
      dataIndex: 'math_score',
      key: 'math_score',
    },
    {
      title: 'Reading Score',
      dataIndex: 'reading_score',
      key: 'reading_score',
    },
    {
      title: 'Writing Score',
      dataIndex: 'writing_score',
      key: 'writing_score',
    },
  ];

  return (
    <div>
      <h2>Data Table with Filter Function</h2>
      <div style={{ overflowX: 'auto' }}>
        <Table dataSource={dataForCurrentPage} columns={columns} pagination={false} />
      </div>
      <Pagination
        current={currentPage}
        onChange={onPageChange}
        pageSize={pageSize}
        total={filteredData.length}
        showSizeChanger={false} // Set to true if you want to allow changing page size
      />
    </div>
  );
};

export default Option2;
