import './App.css';
import styled from 'styled-components';
import React, { useState } from 'react';
import Menu from "./Menu";

const tags = ['DATE', 'LOC', 'ORG', 'PERSON', 'PRODUCT']

const sentenceArray = ['The Vikings were down by 33 points to Indianapolis, but they scored five touchdowns in the second half to force overtime.',
                      'Argentina and France each scored two goals in regulation, both scored once in extra time, and Argentina won in a penalty shootout, 4-2.',
                    'Two lawsuits in California have pre-emptively challenged a new law that would punish doctors for misleading patients about Covid-19.',
                  'The last vital ingredient for life has been discovered on Enceladus.'
                ,"Atatürk's private journal entries dated before the establishment of the republic in 1923 show that he believed in the importance of the sovereignty of the people. "];


var ind = Math.floor(Math.random() * 5);

const sentence = sentenceArray[ind];

const words = sentence.split(/(\s+)/);


const Button = styled.button`
  background-color: #e07a5f;
  color: #3d405b;
  box-shadow: 0px 5px 8px rgb(0, 0, 0);
  font-size: 40px;
  padding: 5px 20px;
  border-radius: 20px;
  margin: 0 10px;
  cursor: pointer;
  position: relative;
  top: 40px;
`;

const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;


const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;


function App() {
  const [active, setActive] = useState(tags[0]);

  const [isTagged, setIsTagged] = useState(new Array(words.length).fill(false));

  function handleClick(index) {
    const newIsTagged = [...isTagged];
    newIsTagged[index] = !newIsTagged[index];
    setIsTagged(newIsTagged);

    if (isTagged[index]) {
    }

  }


  return (
    <div className='App'>
      <Menu />
      <header className='App-header'>
        <h1 className='title'>Named Entity Recognition Annotator</h1>
      </header>
      <body className='App-body'>
        <p>
          <ButtonGroup>
            {tags.map(tag => (
              <ButtonToggle
                key={tag}
                active={active === tag}
                onClick={() => setActive(tag)}
              >
                {tag}
              </ButtonToggle>
            ))}
          </ButtonGroup>

          <div className='word'>
            {words.map((word1, index) => (
              <span key={index} onClick={() => handleClick(index)} style={{ color: isTagged[index] ? '#f4f1de' : 'black', border: isTagged[index] ? '3px solid #f4f1de' : 'none', backgroundColor: isTagged[index] ? '#3d405b' : '#81b29a', boxShadow: isTagged[index] ? '0 0 10px 3px black' : 'none' }}>
                {word1}
                {isTagged[index] && <span> ({active}) </span>}
              </span>
            ))}
          </div>

        </p>
      </body>
    </div>

  );
}

export default App;