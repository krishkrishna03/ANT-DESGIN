import React, { useState } from 'react';
import { Table, Pagination } from 'antd';
import jsonData from './data.json'; // Importing the JSON data

const Option2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Number of items per page

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const dataForCurrentPage = jsonData.slice(startIndex, endIndex);

  // Define columns for the table
  const columns = [
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      title: 'Race/Ethnicity',
      dataIndex: 'race_ethnicity',
      key: 'race_ethnicity',
      sorter: (a, b) => a.race_ethnicity.localeCompare(b.race_ethnicity),
    },
    {
      title: 'Parental Level of Education',
      dataIndex: 'parental_level_of_education',
      key: 'parental_level_of_education',
      sorter: (a, b) => a.parental_level_of_education.localeCompare(b.parental_level_of_education),
    },
    {
      title: 'Lunch',
      dataIndex: 'lunch',
      key: 'lunch',
      sorter: (a, b) => a.lunch.localeCompare(b.lunch),
    },
    {
      title: 'Test Preparation Course',
      dataIndex: 'test_preparation_course',
      key: 'test_preparation_course',
      sorter: (a, b) => a.test_preparation_course.localeCompare(b.test_preparation_course),
    },
    {
      title: 'Math Score',
      dataIndex: 'math_score',
      key: 'math_score',
      sorter: (a, b) => a.math_score - b.math_score,
    },
    {
      title: 'Reading Score',
      dataIndex: 'reading_score',
      key: 'reading_score',
      sorter: (a, b) => a.reading_score - b.reading_score,
    },
    {
      title: 'Writing Score',
      dataIndex: 'writing_score',
      key: 'writing_score',
      sorter: (a, b) => a.writing_score - b.writing_score,
    },
  ];

  return (
    <div>
      <h2>Data Sorting Function</h2>
      <div style={{ overflowX: 'auto' }}>
        <Table dataSource={dataForCurrentPage} columns={columns} pagination={false} />
      </div>
      <Pagination
        current={currentPage}
        onChange={onPageChange}
        pageSize={pageSize}
        total={jsonData.length}
        showSizeChanger={false} // Set to true if you want to allow changing page size
      />
    </div>
  );
};

export default Option2;
