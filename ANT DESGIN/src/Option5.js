import React, { useState } from 'react';
import { Table, Radio } from 'antd';
import jsonData from './data.json'; // Importing the JSON data

const Option1 = () => {
  const [aggregationType, setAggregationType] = useState('average'); // State variable to track aggregation type

  // Calculate the aggregation based on the selected type
  const calculateAggregation = type => {
    switch (type) {
      case 'sum':
        return jsonData.reduce((acc, current) => {
          acc.math_score += current.math_score;
          acc.reading_score += current.reading_score;
          acc.writing_score += current.writing_score;
          return acc;
        }, { gender: 'Sum', math_score: 0, reading_score: 0, writing_score: 0 });

      case 'average':
        const average = jsonData.reduce((acc, current) => {
          acc.math_score += current.math_score;
          acc.reading_score += current.reading_score;
          acc.writing_score += current.writing_score;
          return acc;
        }, { math_score: 0, reading_score: 0, writing_score: 0 });
        const totalSubjects = Object.keys(average).length - 1;
        return {
          gender: 'Average',
          math_score: average.math_score / totalSubjects,
          reading_score: average.reading_score / totalSubjects,
          writing_score: average.writing_score / totalSubjects
        };

      case 'mean':
        const totalStudents = jsonData.length;
        const sum = jsonData.reduce((acc, current) => {
          acc.math_score += current.math_score;
          acc.reading_score += current.reading_score;
          acc.writing_score += current.writing_score;
          return acc;
        }, { math_score: 0, reading_score: 0, writing_score: 0 });
        return {
          gender: 'Mean',
          math_score: sum.math_score / totalStudents,
          reading_score: sum.reading_score / totalStudents,
          writing_score: sum.writing_score / totalStudents
        };

      case 'max':
        const maxScores = {
          gender: 'Max',
          math_score: Math.max(...jsonData.map(item => item.math_score)),
          reading_score: Math.max(...jsonData.map(item => item.reading_score)),
          writing_score: Math.max(...jsonData.map(item => item.writing_score))
        };
        return maxScores;

      case 'min':
        const minScores = {
          gender: 'Min',
          math_score: Math.min(...jsonData.map(item => item.math_score)),
          reading_score: Math.min(...jsonData.map(item => item.reading_score)),
          writing_score: Math.min(...jsonData.map(item => item.writing_score))
        };
        return minScores;

      default:
        return {};
    }
  };

  // Define columns for the table
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

  // Add a row for displaying aggregated scores
  const dataSource = [calculateAggregation(aggregationType)];
  return (
    <div style={{ textAlign: 'left' }}>
       {/* Aligning the table to the left */}
      <h2>Data Aggregation Function</h2>
      <Radio.Group value={aggregationType} onChange={e => setAggregationType(e.target.value)}>
        <Radio.Button value="sum">Sum</Radio.Button>
        <Radio.Button value="average">Average</Radio.Button>
        <Radio.Button value="mean">Mean</Radio.Button>
        <Radio.Button value="max">Max</Radio.Button>
        <Radio.Button value="min">Min</Radio.Button>
      </Radio.Group>
      <div style={{ overflowX: 'auto' }}>
      <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          bordered // Add bordered prop to enable table border
          style={{ border: '1px solid #002329' }} // Set border color here
        />
      </div>
    </div>
    
  );
};

export default Option1;