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
    },
    {
      title: 'Race/Ethnicity',
      dataIndex: 'race_ethnicity',
      key: 'race_ethnicity',
    },
    {
      title: 'Parental Level of Education',
      dataIndex: 'parental_level_of_education',
      key: 'parental_level_of_education',
    },
    {
      title: 'Lunch',
      dataIndex: 'lunch',
      key: 'lunch',
    },
    {
      title: 'Test Preparation Course',
      dataIndex: 'test_preparation_course',
      key: 'test_preparation_course',
    },
    {
      title: 'Math Score',
      dataIndex: 'math_score',
      key: 'math_score',
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
        <Table dataSource={dataForCurrentPage} columns={columns} pagination={false} />
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