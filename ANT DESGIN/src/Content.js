import React from 'react';
import Option1 from './Option1'; // Importing Option1 component
import Option2 from './Option2'; // Importing Option2 component
import Option3 from './Option3';
import Option4 from './Option4';
import Option5 from './Option5';
import Option6 from './Option6'; 
import Option7 from './Option7'

// Importing Option3 component

const ContentSection = ({ selectedOption }) => {
  // Define a mapping of options to components
  const optionComponents = {
    '1': <Option1 />,
    '2': <Option2 />,
    '3': <Option3 />,
    '4': <Option4 />,
    '5': <Option5 />,
    '6': <Option6 />,
    '7': <Option7 />
    
  };

  // Render the component based on the selected option
  const contentComponent = optionComponents[selectedOption];

  return (
    <div>
      {contentComponent}
    </div>
  );
};

export default ContentSection;
