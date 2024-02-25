import React, { useState } from 'react';
import { Table, Tag, Pagination } from 'antd';
import jsonData from './data.json'; // Importing the JSON data

const Option4 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Number of items per page

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const dataForCurrentPage = jsonData.slice(startIndex, endIndex);

  // Function to determine the conditional formatting based on score
  const determineFormatting = (score) => {
    if (score >= 90) {
      return 'green'; // Apply 'green' color for scores >= 90
    } else if (score >= 80) {
      return 'blue'; // Apply 'blue' color for scores >= 80
    } else if (score >= 70) {
      return 'orange'; // Apply 'orange' color for scores >= 70
    } else {
      return 'red'; // Apply 'red' color for scores < 70
    }
  };

  // Define columns for the table with conditional formatting
  const columns = [
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      sorter: (a, b) => a.gender.localeCompare(b.gender), // Add sorting functionality
      filters: [...new Set(jsonData.map(item => item.gender))].map(gender => ({ text: gender, value: gender })), // Add filtering functionality
      onFilter: (value, record) => record.gender === value,
    },
    {
      title: 'Race/Ethnicity',
      dataIndex: 'race_ethnicity',
      key: 'race_ethnicity',
      sorter: (a, b) => a.race_ethnicity.localeCompare(b.race_ethnicity), // Add sorting functionality
      filters: [...new Set(jsonData.map(item => item.race_ethnicity))].map(race => ({ text: race, value: race })), // Add filtering functionality
      onFilter: (value, record) => record.race_ethnicity === value,
    },
    {
      title: 'Parental Level of Education',
      dataIndex: 'parental_level_of_education',
      key: 'parental_level_of_education',
      sorter: (a, b) => a.parental_level_of_education.localeCompare(b.parental_level_of_education), // Add sorting functionality
      filters: [...new Set(jsonData.map(item => item.parental_level_of_education))].map(education => ({ text: education, value: education })), // Add filtering functionality
      onFilter: (value, record) => record.parental_level_of_education === value,
    },
    {
      title: 'Lunch',
      dataIndex: 'lunch',
      key: 'lunch',
      sorter: (a, b) => a.lunch.localeCompare(b.lunch), // Add sorting functionality
      filters: [...new Set(jsonData.map(item => item.lunch))].map(lunch => ({ text: lunch, value: lunch })), // Add filtering functionality
      onFilter: (value, record) => record.lunch === value,
    },
    {
      title: 'Test Preparation Course',
      dataIndex: 'test_preparation_course',
      key: 'test_preparation_course',
      sorter: (a, b) => a.test_preparation_course.localeCompare(b.test_preparation_course), // Add sorting functionality
      filters: [...new Set(jsonData.map(item => item.test_preparation_course))].map(course => ({ text: course, value: course })), // Add filtering functionality
      onFilter: (value, record) => record.test_preparation_course === value,
    },
    {
      title: 'Math Score',
      dataIndex: 'math_score',
      key: 'math_score',
      sorter: (a, b) => a.math_score - b.math_score, // Add sorting functionality
      render: (text) => (
        <span>
          <Tag color={determineFormatting(text)}>{text}</Tag>
        </span>
      ),
    },
    {
      title: 'Reading Score',
      dataIndex: 'reading_score',
      key: 'reading_score',
      sorter: (a, b) => a.reading_score - b.reading_score, // Add sorting functionality
      render: (text) => (
        <span>
          <Tag color={determineFormatting(text)}>{text}</Tag>
        </span>
      ),
    },
    {
      title: 'Writing Score',
      dataIndex: 'writing_score',
      key: 'writing_score',
      sorter: (a, b) => a.writing_score - b.writing_score, // Add sorting functionality
      render: (text) => (
        <span>
          <Tag color={determineFormatting(text)}>{text}</Tag>
        </span>
      ),
    },
  ];

  return (
    <div>
      <h2>Data In ColourFormatting</h2>
      <div style={{ overflowX: 'auto' }}>
        <Table
          dataSource={dataForCurrentPage}
          columns={columns}
          pagination={false}
          bordered
          size="middle"
          style={{ minWidth: '800px' }} // Setting minimum width for better responsiveness
        />
      </div>
      <Pagination
        current={currentPage}
        onChange={onPageChange}
        pageSize={pageSize}
        total={jsonData.length}
      />
    </div>
  );
};

export default Option4;
