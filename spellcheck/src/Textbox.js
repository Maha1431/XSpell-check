import React, { useEffect, useState } from 'react';
import "./text.css"



function Spellcheck()
{
  const[text, setText] = useState('');
  const[correctedText, setCorrectedText] = useState('');

  const customDictionary = {

    teh: "the",
  
    wrok: "work",
  
    fot: "for",
  
    exampl: "example"
  
  };
useEffect(() => {

  const handleSpellcheck = () => {
    const words = text.split(/\s+/);
    const misspelled = words.find(word => customDictionary[word.toLowerCase()]);

    if (misspelled) {
        setCorrectedText(customDictionary[misspelled.toLowerCase()]);
      } else {
        setCorrectedText('');
      }
    };
  
  handleSpellcheck()

}, [text])  


    return(
        <div>
            <h1>Spell Check and Auto-Correction</h1>
            <textarea value={text} placeholder='Enter text...' onChange={(e) => setText(e.target.value)} className='text'/>
             {correctedText && <p> Did you mean: 
                {" "}
            <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
              {correctedText}
            </span>? </p>}
            
        </div>
    )
}
export default Spellcheck;