import React from 'react';
import { Card, Row, Col } from 'antd';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Tooltip, Legend, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import jsonData from './data.json';

const Dashboard = () => {
  const data = jsonData.map(item => ({
    gender: item.gender,
    math_score: item.math_score,
    reading_score: item.reading_score,
    writing_score: item.writing_score,
    race_ethnicity: item.race_ethnicity,
    parental_level_of_education: item.parental_level_of_education
  }));

  const genders = [...new Set(data.map(item => item.gender))];
  const writingScoreData = genders.map(gender => {
    const filteredData = data.filter(item => item.gender === gender);
    const totalWritingScore = filteredData.reduce((acc, curr) => acc + curr.writing_score, 0);
    return { gender, totalWritingScore };
  });

  const raceEthnicities = [...new Set(data.map(item => item.race_ethnicity))];
  const raceEthnicityData = raceEthnicities.map(raceEthnicity => {
    const filteredData = data.filter(item => item.race_ethnicity === raceEthnicity);
    const count = filteredData.length;
    return { raceEthnicity, count };
  });

  const educationLevels = [...new Set(data.map(item => item.parental_level_of_education))];
  const educationLevelCounts = educationLevels.map(parental_level_of_education => ({
    parental_level_of_education,
    count: data.filter(item => item.parental_level_of_education === parental_level_of_education).length
  }));
  const lineChartData = educationLevelCounts.map(({ parental_level_of_education, count }) => ({
    parental_level_of_education,
    count
  }));

  return (
    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={8}>
          <Card title="Math Scores">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <Line type="monotone" dataKey="math_score" stroke="#8884d8" />
                <Tooltip />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card title="Reading Scores">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <Bar dataKey="reading_score" fill="#82ca9d" />
                <Tooltip />
                <Legend />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card title="Gender">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={writingScoreData} dataKey="totalWritingScore" nameKey="gender" fill="#8884d8" label />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card title="Writing Scores">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <Bar dataKey="writing_score" fill="#8884d8" />
                <XAxis dataKey="writing_score" />
                <YAxis />
                <Tooltip />
                <Legend />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card title="Race/Ethnicity">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={raceEthnicityData}>
                <Bar dataKey="count" fill="#8884d8" />
                <XAxis dataKey="raceEthnicity" />
                <YAxis />
                <Tooltip />
                <Legend />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card title="Parental Level of Education">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineChartData}>
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
                <XAxis dataKey="parental_level_of_education" />
                <YAxis />
                <Tooltip />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
