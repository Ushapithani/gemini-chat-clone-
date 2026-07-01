import React, { useContext } from 'react';
import './Main.css'
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
            </div>

            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello Usha</span></p>
                            <p>How can I help you today?</p>
                        </div>

                        <div className="cards">
                            <div className="card">
                                <p>Explain a complex topic in a simple and easy-to-understand way.</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>

                            <div className="card">
                                <p>Generate innovative project ideas for students and developers.</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>

                            <div className="card">
                                <p>Write a professional email or message for any situation.</p>
                                <img src={assets.message_icon} alt="" />
                            </div>

                            <div className="card">
                                <p>Generate clean, optimized code with detailed explanations.</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    :
                    <div className='result'>
                        <div className="result-title">
                            <p>{recentPrompt}</p>
                        </div>

                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />

                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }

                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            type="text"
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            placeholder="Ask Gemini"
                        />

                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ?
                                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                                : null}
                        </div>
                    </div>

                    <p className="bottom-info">
                        This Gemini Clone is built by Usha. AI responses may sometimes be inaccurate or misleading, so please verify important information.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Main;