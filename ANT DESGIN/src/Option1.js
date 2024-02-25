import React, { useState } from 'react';
import { Pagination, Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import jsonData from './data.json';

const Option1 = () => {
  const [searchedColumn, setSearchedColumn] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // Change this value according to your preference

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
  };

  const onShowSizeChange = (current, size) => {
    setPageSize(size);
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchedColumn('');
  };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: '100%', marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: '50%' }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: '50%' }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
    render: text => (searchedColumn === dataIndex ? <span style={{ fontWeight: 'bold' }}>{text}</span> : text),
  });

  const columns = [
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      ...getColumnSearchProps('gender'),
    },
    {
      title: 'Race/Ethnicity',
      dataIndex: 'race_ethnicity',
      key: 'race_ethnicity',
      ...getColumnSearchProps('race_ethnicity'),
    },
    {
      title: 'Parental Level of Education',
      dataIndex: 'parental_level_of_education',
      key: 'parental_level_of_education',
      ...getColumnSearchProps('parental_level_of_education'),
    },
    {
      title: 'Lunch',
      dataIndex: 'lunch',
      key: 'lunch',
      ...getColumnSearchProps('lunch'),
    },
    {
      title: 'Test Preparation Course',
      dataIndex: 'test_preparation_course',
      key: 'test_preparation_course',
      ...getColumnSearchProps('test_preparation_course'),
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

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const dataForCurrentPage = jsonData.slice(startIndex, endIndex);

  return (
    <div>
      <h2>Data Search Function</h2>
      <div style={{ overflowX: 'auto' }}>
        <Table dataSource={dataForCurrentPage} columns={columns} pagination={false} />
      </div>
      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        onChange={onPageChange}
        defaultCurrent={1}
        total={jsonData.length}
      />
      <br />
    </div>
  );
};

export default Option1;
