import React from "react";
import './App.css';




const Feedback = () => {


  const [show, setShow] = React.useState('')
  const [feedbackOne, setFeedbackOne] = React.useState('');
  const [yes, setYes] = React.useState('');
  const [data, setData] = React.useState({

    questiontwo: "",
    questionthird:"",
    yes :"",
    reasoninputtwo:"",
    reasoninputthree:""

  })

  
  const handlefeedbackOne = (status) => {

    setFeedbackOne(status)

  }
  const handlefeedbackTwo = (event) => {
    setShow(event)
  }

  const handlefeedbackYes = (statusbar) => {
    setYes(statusbar)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({...data, [name]:value});
  }
  const HandleSubmit = (e) =>{
    console.log(data);
  }

  return (
    <div id="layout-wrapper">
      <div className="page-top">
        <img
          className="logo"
          src="images/logo.svg"
          alt="logo"
        />
        <h2 className="header-title">Share your feedback</h2>
      </div>
      <div className="content feedback">
        <div className="user-details">
          Meeting with <code>Jane Doe</code>
          <span className="date" id="date">
            08 December 2022
          </span>
        </div>
        <div className="container">
          <div className="helping-content">
            {/* <h4>सहायक पर्यवेक्षण एप्लिकेशन</h4> */}
            <h4>
              <b>फीडबैक की मुख्या विशेषताएं </b>
            </h4>
            <p>फीडबैक से पहले परिचय</p>
            <p>
              आपने अभी मुख्यसेविका/ सी.डी.पी.ओ/ डी.पी.ओ के साथ एक संक्षिप्त सत्र
              ककया था। कृपया इस पर अपनी राय दें। यह हमें आपकी मदद करने के प्रतत
              हमारे दृष्टिकोण को बेहतर बनाने में मदद करता है।
            </p>
            <ul className="first_ul">
              <li>
                आगे के स्लाइड्स में सहयोगात्मक पयिवेक्षण से संबंधित प्रश्न सभी
                (मुख्यसेववका/ सी.डी.पी.ओ/ डी.पी.ओ) के ललए लागू होगा ।
              </li>
              <li>Milk</li>
            </ul>
          </div>
        
          <div className="feedback-q" onSubmit={HandleSubmit}>
            <ul className="feedback-list">
              <li>
                <span className="text">
                  आप अपने पयिवेक्षक/सुपरवाइजर के साथ सहयोगात्मक पर्यवेछण सत्र का
                  मुल्यांकन किस प्रकार करेंगे ?
                </span>
                <div className="emoji">
                  <span className="emoji-icon active" onClick={() => handlefeedbackYes('bad')} >
                    <img src="images/terrible.svg" alt="" />
                    <label>उपयोगी नहीं </label>
                  </span>
                  <span className="emoji-icon" onClick={() => handlefeedbackYes('bad')}>
                    <img src="images/not-good.svg" alt=" " />
                    <label>थोड़ा उपयोगी </label>
                  </span>
                  <span className="emoji-icon" onClick={() => handlefeedbackYes('bad')}>
                    <img src="images/ok.svg" alt=" " />
                    <label>ठीक </label>
                  </span>
                  <span className="emoji-icon" onClick={() => handlefeedbackYes('good')}>
                    <img src="images/good.svg" alt=" " />
                    <label>उपयोगी</label>
                  </span>
                  <span className="emoji-icon" onClick={() => handlefeedbackYes('good')}>
                    <img src="images/very_good.svg" alt="" />
                    <label>बहुत उपयोगी </label>
                  </span>
                </div>
                <div className="button">

                  {
                    yes === 'good' &&

                    <button name="yes" className="btn"  onChange={(e) => handleChange(e)}>
                      Yes
                    </button>
                  }
                  {
                    yes === 'bad' &&
                    <button name="no" className="btn btn-dark"  onChange={(e) => handleChange(e)}>
                      No
                    </button>
                  }



                </div>
              </li>

              <li>
                <span className="text">
                  आपके पयिवेक्षक/सुपरवाइजर का आपके प्रति व्यवहार कैसा था?
                </span>
                <div className="emoji">
                  <span className="emoji-icon" onClick={() => handlefeedbackOne('bad')}>
                    <img src="images/terrible.svg" alt="terrible" />
                    <label>उपयोगी नहीं </label>
                  </span>
                  <span className="emoji-icon" onClick={() => handlefeedbackOne('bad')}>
                    <img src="images/not-good.svg" alt="not good" />
                    <label>थोड़ा उपयोगी </label>
                  </span>
                  <span className="emoji-icon" onClick={() => handlefeedbackOne('bad')}>
                    <img src="images/ok.svg" alt="ok" />
                    <label>ठीक </label>
                  </span>
                  <span className="emoji-icon" onClick={() => handlefeedbackOne('good')}>
                    <img src="images/good.svg" alt="good" />
                    <label>उपयोगी</label>
                  </span>
                  <span className="emoji-icon" onClick={() => handlefeedbackOne('good')}>
                    <img src="images/very_good.svg" alt="very good" />
                    <label>बहुत उपयोगी </label>
                  </span>
                </div>
                {/* <div className="feedback-send"> */}

                {/* Select Used Terrible,Not Good,Ok  */}

                {feedbackOne === 'bad' &&
                  <div className="feedback-send">
                    <select className="selectreason" id="reasonone" name="questiontwo" onChange={(e) => handleChange(e)}>
                      <option>समस्या श्रेणी/Issue category:</option>
                      <option value="आधिकारिक और कमांडिग">आधिकारिक और कमांडिग </option>
                      <option value="गैर -सहायक">गैर -सहायक</option>
                      <option value="धैर्य से न सुनना">धैर्य से न सुनना </option>
                      <option value=" सम्मान और मर्यादा पूर्वक बात न करना">सम्मान और मर्यादा पूर्वक बात न करना
                      </option>
                      <option value="अन्य">अन्य </option>
                    </select>

                    <input
                      type="text"
                      name="reasoninputtwo"
                      className="reasoninput"
                      placeholder="कृपया कारण निर्दिष्ट करें"
                      onChange={(e) => handleChange(e)}
                    />
                    {/* <button
                      name="submit"
                      className="submitinput"
                      type="submit"
                      disabled=""
                    >
                      Submit
                    </button> */}
                  </div>
                }
                {feedbackOne === 'good' &&

                  <div className="feedback-send">
                    <select className="selectreason" id="reasonone" name="questiontwo" onChange={(e) => handleChange(e)}>
                      <option>सकािात्मक प्रततफिया/ Positive Feedback:</option>
                      <option value="उचित मार्गदर्शन के साथ सहायक ">उचित मार्गदर्शन के साथ सहायक </option>
                      <option value="धैर्य से सुनना">धैर्य से सुनना</option>
                      <option value="सम्मान और मर्यादा पूर्वक व्यवहार किया गया">
                        सम्मान और मर्यादा पूर्वक व्यवहार किया गया
                      </option>
                      <option value="अन्य">अन्य</option>
                    </select>

                    <input
                      type="text"
                      className="reasoninput"
                      name="reasoninputtwo"
                      placeholder="कृपया कारण निर्दिष्ट करें"
                      onChange={(e) => handleChange(e)}
                    />
                    {/* <button
                      name="submit"
                      className="submitinput"
                      type="submit"
                      disabled=""
                    >
                      Submit
                    </button> */}
                  </div>


                }

                {/* <select className="selectreason" id="reasonone">
                    <option>सकािात्मक प्रततफिया/ Positive Feedback:</option>
                    <option value="ucch_one">उचित मार्गदर्शन के साथ सहायक </option>
                    <option value="dhary_one">धैर्य से सुनना</option>व्यवहार
                    <option value="saman_one">
                      {" "}
                      सम्मान और मर्यादा पूर्वक व्यवहार किया गया
                    </option>
                    <option value="anyone_optone">अन्य</option>
                  </select> */}

              </li>




              <li>
                <span className="text">
                  क्या पयिवेक्षक/सुपरवाइजर ने आपकी समस्याओ को सुना और समाधान के लिए
                  मदद की ?
                </span>
                <div className="emoji">
                  <span className="emoji-icon active" onClick={() => handlefeedbackTwo('bad')}>
                    <img src="images/terrible.svg" alt="terrrible" />
                    <label>उपयोगी नहीं </label>
                  </span>
                  <span className="emoji-icon" onClick={() => handlefeedbackTwo('bad')}>
                    <img src="images/not-good.svg" alt="not good" />
                    <label>थोड़ा उपयोगी </label>
                  </span>
                  <span className="emoji-icon" onClick={() => handlefeedbackTwo('bad')}>
                    <img src="images/ok.svg" alt="ok" />
                    <label>ठीक </label>
                  </span>
                  <span className="emoji-icon" onClick={() => handlefeedbackTwo('good')}>
                    <img src="images/good.svg" alt="good" />
                    <label>उपयोगी</label>
                  </span>
                  <span className="emoji-icon" onClick={() => handlefeedbackTwo('good')}>
                    <img src="images/very_good.svg" alt="very good" />
                    <label>बहुत उपयोगी </label>
                  </span>
                </div>
                {/* <div className="feedback-send">

                  <select className="selectreason" id="reasontwo">
                    <option>समस्या श्रेणी/Issue category:</option>
                    <option value="Terrible_two">आधिकारिक और कमांडिग </option>
                    <option value="Not_Good_two">गैर -सहायक</option>
                    <option value="ok_two">धैर्य से न सुनना </option>
                    <option value="good_two">
                      {" "}
                      सम्मान और मर्यादा पूर्वक बात न करना{" "}
                    </option>
                    <option value="anyone_two">अन्य </option>
                  </select>
                  <select className="selectreason" id="reasontwo">
                    <option>सकािात्मक प्रततफिया/ Positive Feedback:</option>
                    <option value="ucch_two">उचित मार्गदर्शन के साथ सहायक </option>
                    <option value="dhary_two">धैर्य से सुनना</option>व्यवहार
                    <option value="saman_two">
                      {" "}
                      सम्मान और मर्यादा पूर्वक व्यवहार किया गया
                    </option>
                    <option value="anyone_opttwo">अन्य</option>
                  </select>
                  <input
                    type="text"
                    className="reasoninput"
                    placeholder="Please specify the reason"
                  />
                  <button
                    name="submit"
                    className="submitinput"
                    type="submit"
                    disabled=""
                  >
                    Submit
                  </button>
                </div> */}

                {show === 'bad' &&
                  <div className="feedback-send">
                    <select className="selectreason" id="reasonone" name="questionthird" onChange={(e) => handleChange(e)}>
                      <option>समस्या श्रेणी/Issue category:</option>
                      <option value="आधिकारिक और कमांडिग">आधिकारिक और कमांडिग </option>
                      <option value="गैर -सहायक">गैर -सहायक</option>
                      <option value="धैर्य से न सुनना">धैर्य से न सुनना </option>
                      <option value="सम्मान और मर्यादा पूर्वक बात न करना">

                        सम्मान और मर्यादा पूर्वक बात न करना
                      </option>
                      <option value="अन्य">अन्य </option>
                    </select>

                    <input
                      type="text"
                      className="reasoninput"
                      name="reasoninputthree"
                      placeholder="Please specify the reason"
                      onChange={(e) => handleChange(e)}
                    />
                    {/* <button
                      name="submit"
                      className="submitinput"
                      type="submit"
                      disabled=""
                    >
                      Submit
                    </button> */}
                  </div>
                }
                {show === 'good' &&

                  <div className="feedback-send">
                    <select className="selectreason" id="reasonone" name="reasonone" onChange={(e) => handleChange(e)}>
                      <option>सकािात्मक प्रततफिया/ Positive Feedback:</option>
                      <option value="उचित मार्गदर्शन के साथ सहायक">उचित मार्गदर्शन के साथ सहायक </option>
                      <option value="धैर्य से सुनना">धैर्य से सुनना</option>
                      <option value=" सम्मान और मर्यादा पूर्वक व्यवहार किया गया">

                        सम्मान और मर्यादा पूर्वक व्यवहार किया गया
                      </option>
                      <option value="अन्य">अन्य</option>
                    </select>

                    <input
                      type="text"
                      className="reasoninput"
                      placeholder="Please specify the reason"
                      name="reasoninputthree"
                      onChange={(e) => handleChange(e)}
                    />
                    {/* <button
                      name="submit"
                      className="submitinput"
                      type="submit"
                      disabled=""
                    >
                      Submit
                    </button> */}
                  </div>


                }

              </li>
            </ul>
            <button
              name="submit"
              className="submitinput"
              type="submit"
            // disabled=""
            onClick={HandleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="content successfully" style={{ display: "none" }}>
        <div className="submitted">
          <img
            className="feedback-icon"
            src="images/feedback-icon.svg"
            alt="feedback"
          />
          <h3>Feedback submitted successfully</h3>
        </div>
      </div>
    </div>
  );
}

export default Feedback;