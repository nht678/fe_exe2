import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import '../static/css/style-new.css';
import {
  changeLanguage,
  getNextSample,
  playAudio,
  playRecording,
  updateRecordingState,
} from '../static/javascript/callbacks';

const AIProununciationTrainer = () => {

  const [language, setLanguage] = useState('German');

  const handleLanguageChange = (lang) => {
    changeLanguage(lang, true);
    setLanguage(lang === 'de' ? 'German' : 'English');
  };
  return (
    <div style={{ height: '100%', width: '100%', backgroundColor: 'white', maxWidth: '90%' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'inline-block', marginLeft: '1.5em' }}>
          <i className="material-icons icon-text-home" style={{ textAlign: 'right' }} onClick={() => window.location.reload()}></i>
        </div>
        <h1 id='main_title'> AI Pronunciation Trainer </h1>
      </div>

      <div className="expanded">
        <div className="horizontal-flexbox" style={{ display: 'flex', flexDirection: 'row' }}>
          <p className="accuracy-text" style={{ fontSize: '1em', textAlign: 'left', paddingTop: '3px', paddingLeft: '5px' }}>Language: </p>
          <div className="dropdown">
            <button id="languageBox" className="dropbtn accuracy-text" style={{ fontSize: '1em', textAlign: 'left', paddingTop: '3px', paddingLeft: '0px' }}>{language}</button>
            <div className="dropdown-content">
              <a href="#" className="accuracy-text" style={{ paddingTop: '3px' }} onClick={() => changeLanguage('de')}>German</a>
              <a href="#" className="accuracy-text" style={{ paddingTop: '3px' }} onClick={() => changeLanguage('en')}>English</a>
            </div>
          </div>
          <p id="section_accuracy" className="accuracy-text" style={{ textAlign: 'left', color: 'black', fontSize: 'larger' }}>
            | Score: 0
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '200px' }}></div>

      <div className="container">
        <div className="horizontal-flexbox" style={{ position: 'absolute', top: '2%' }}>
          <a id="playSampleAudio" href="#" className="round-button disabled" style={{ color: 'white', textAlign: 'center', position: 'absolute', top: '2%' }} onClick={playAudio}>
            <i className="material-icons icon-text">play_arrow</i>
          </a>
          <a id="playRecordedAudio" href="#" className="round-button disabled" style={{ color: 'white', textAlign: 'center', position: 'absolute', top: '15%' }} onClick={playRecording}>
            <i className="material-icons icon-text">record_voice_over</i>
          </a>
          <p id="pronunciation_accuracy" className="expanded accuracy-text" style={{ textAlign: 'center', color: 'black', position: 'absolute', top: '27%' }}>
            -
          </p>
        </div>

        <div id="text-area" className="main-text-div">
          <p id="original_script" className="bigger-text text-primary main-text">Click on the bar on the right to generate a new sentence (please use chrome web browser).</p>
          <p id="ipa_script" className="text-muted bigger-text ipa-text"> Before speaking, click on the mic button below to start recording and then click again when you're done.</p>
          <p id="recorded_ipa_script" className="text-primary ipa-text">On the left bottom you can choose the difficult. On the upper left you can choose the language.</p>
          <p id="translated_script" className="text-muted medium-text ipa-text">
            The corresponding IPA reading of each sentence will also be displayed. If you never heard from IPA, you can check out this
            <a href="https://www.youtube.com/watch?v=mzrLZi6fipA&list=RDCMUCQAUWk_yGz7bk1181DrijNw&start_radio=1&rv=mzrLZi6fipA&t=22&ab_channel=FluentForever" target="_blank" rel="noopener noreferrer">playlist</a>.
            Try to get at least 690 points a day. Don't be shy! You can do it :)
          </p>
        </div>
      </div>

      <div className="button-container">
        <div id="nextButtonDiv" className="flex-container">
          <button id="buttonNext" className="expanded button-next" onClick={getNextSample}>
            <span>Next</span>
          </button>
        </div>

        <div className="container-small flex expand" style={{ alignItems: 'center', textAlign: 'center', verticalAlign: 'middle' }}>
          <p id="single_word_ipa_pair" className="expand ipa-text-small" style={{ textAlign: 'center', verticalAlign: 'middle' }}>Reference | Spoken</p>
        </div>

        <div id="btn-record" className="expanded mic-button-div">
          <a id="recordAudio" href="#" className="round-button-mic disabled" style={{ color: 'rgb(255, 255, 255)', textAlign: 'center' }} onClick={updateRecordingState}>
            <i id="recordIcon" className="material-icons icon-text-mic">mic</i>
          </a>
        </div>
      </div>

      {/* <div className="profile-card">
        <img src="./img/Avatar1.png" alt="Avatar" />
        <h2>Annie Leonchart</h2>
        <p>annie_leonchart@mail.com</p>
        <div className="info">
          <div>
            <span>Lessons</span>
            <h3>24</h3>
          </div>
          <div>
            <span>Credits</span>
            <h3>$1</h3>
          </div>
        </div>
      </div>

      <div className="quick-start">
        <h4>Quick Start</h4>
        <div className="button">
          <img src="./img/TalkingNow.png" alt="Icon 1" />
          <div className="text">
            <p>Talking Now</p>
            <span>30 min</span>
          </div>
        </div>
        <div className="button">
          <img src="./img/AIpronounce.png" alt="Icon 2" />
          <div className="text">
            <p>AI Pronunciation</p>
            <span>15 min</span>
          </div>
        </div>
        <div className="button">
          <img src="./img/CheckingGrammar.png" alt="Icon 3" />
          <div className="text">
            <p>Checking Grammar</p>
          </div>
        </div>
      </div> */}

      <div id="radio-difficulty" className="radio" style={{ position: 'fixed', top: '95%', left: '2%' }}>
        <input label="Random" type="radio" id="lengthCat1" name='length' onClick={getNextSample} />
        <input label="Easy" type="radio" id="lengthCat2" name='length' defaultChecked onClick={getNextSample} />
        <input label="Medium" type="radio" id="lengthCat3" name='length' onClick={getNextSample} />
        <input label="Hard" type="radio" id="lengthCat4" name='length' onClick={getNextSample} />
      </div>
    </div>
  );
};

export default AIProununciationTrainer;
