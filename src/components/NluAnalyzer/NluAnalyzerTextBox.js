import React, { useState } from 'react';
import './NluAnalyzerTextBox.css';
import EmotionTable from '../EmotionTable/EmotionTable';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useLocation, useNavigate } from 'react-router-dom';

const NluAnalyzerTextBox = () => {
  /*
  We are setting the component as a state named innercomp.
  When this state is accessed, the HTML that is set as the 
  value of the state, will be returned. The initial input mode
  is set to text
  */
  const [innercomp, setInnercomp] = useState(<textarea rows="4" cols="50" id="textinput" />);
  const [mode, setMode] = useState('text');
  const [sentimentOutput, setSentimentOutput] = useState([]);
  const [sentiment, setSentiment] = useState(true);
  const axiosPrivate = useAxiosPrivate();
  const location = useNavigate();
  const navigate = useLocation();

  const controller = new AbortController();
  /*
  This method returns the component based on what the input mode is.
  If the requested input mode is "text" it returns a textbox with 4 rows.
  If the requested input mode is "url" it returns a textbox with 1 row.
  */
  const renderOutput = (input_mode) => {
    let rows = 1;
    let mode = 'url';
    if (input_mode === 'text') {
      mode = 'text';
      rows = 4;
    }
    setInnercomp(<textarea rows={rows} cols="50" id="textinput" />);
    setMode(mode);
    setSentimentOutput([]);
    setSentiment(true);
  };

  const sendForSentimentAnalysis = async () => {
    setSentiment(true);
    const url = `./${mode}/sentiment?${mode}=${document.getElementById('textinput').value}`;
    console.log('url',url)
  
    try {
      const response = await axiosPrivate.get(url, { signal: controller.signal });
      let output = response.data.label;
      let name = '';
      switch (output) {
        case 'positive':
          name = 'alert alert-success';
          break;
        case 'negative':
          name = 'alert alert-danger';
          break;
        default:
          name = 'alert alert-info';
      }
  
      output = <div className={name} style={{ marginTop: 10 }}>{output}</div>;
      setSentimentOutput(output);
    } catch (err) {
      console.error(err);
      navigate('/login', { state: { from: location }, replace: true });
    }
  
    return () => {
      controller.abort();
    };
  };

  const sendForEmotionAnalysis = async () => {
    setSentiment(false);
    const url = `./${mode}/emotion?${mode}=${document.getElementById('textinput').value}`;
  
    try {
      const response = await axiosPrivate.get(url, { signal: controller.signal });
      setSentimentOutput(<EmotionTable emotions={response.data} />);
    } catch (err) {
      console.error(err);
      navigate('/login', { state: { from: location }, replace: true });
    }
  
    return () => {
      controller.abort();
    };
  };

  return (
    <div className="NluAnalyzerTextBox">
      <button className="btn btn-info" onClick={() => renderOutput('text')}>Text</button>
      <button className="btn btn-dark" onClick={() => renderOutput('url')}>URL</button>
      <br /><br />
      {innercomp}
      <br />
      <button className="btn-default" onClick={sendForSentimentAnalysis}>Analyze Sentiment</button>
      <button onClick={sendForEmotionAnalysis}>Analyze Emotion</button>
      <br />
      {sentimentOutput}
    </div>
  );
};

export default NluAnalyzerTextBox;