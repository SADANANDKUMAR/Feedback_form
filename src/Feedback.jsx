import React from "react";

import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

import { useLocation } from "react-router-dom";

const Feedback = () => {


  const url = "https://api.upss.deepmindz.co/api/v1/add-feedback"

  const { search } = useLocation();
  const id = new URLSearchParams(search).get('id');
  console.log(id, 'iddd')
  const [active, setActive] = React.useState("");
  const [btnState, setBteState] = React.useState(false);

  const [show, setShow] = React.useState('')
  const [feedbackOne, setFeedbackOne] = React.useState('');
  const [yes, setYes] = React.useState('');
  const [showhide, setShowhide] = React.useState('');
  const [activeEmoji, setActiveEmoji] = React.useState(null);
  const [activeEmoji2, setActiveEmoji2] = React.useState(null);
  const [activeEmoji3, setActiveEmoji3] = React.useState(null);
  const [question ,setQuestion] = React.useState()

  const [data, setData] = React.useState({

    // questiontwo: "",
    // questionthird: "",
    // yes: "",
    // reasoninputtwo: "",
    // reasoninputthree: ""

  })


  const [qst, setQst] = React.useState('ques001')
  const [qstTwo, setQstTwo] = React.useState('ques002')
  const [qstThree, setQstThree] = React.useState('ques003')

  //  this is option state here +ve  and -ve
  const [issue_categories, setIssue_categories] = React.useState()
  const [positive_feedback, setPositive_feedback] = React.useState()


 

  // Question 1st func
  const handlefeedbackOne = (answer, emoji_number, question_id) => {
    setYes(answer)
    setQst(question_id)
    const item1 = { question_id, answer }
    setData({ ...data, first_question: item1 })
    setBteState(btnState => !btnState)
    setActiveEmoji(emoji_number)

  }

    // Question 2nd func
  const handlefeedbackTwo = (answer, emoji_number, question_id) => {
    
    // setQstTwo(...qstTwo , question_id)
    
    setFeedbackOne(answer)
    setActiveEmoji2(emoji_number)
    const item2 = { question_id, answer }
    setQstTwo(item2)

    // setData({ ...data, two_question: item2 });
    // console.log('aaaa',data)

  }
    // Question 3rd func
  const handlefeedbackThree = (answer, emoji_number, question_id) => {
    // setQstThree(question_id)
    setShow(answer)
    setActiveEmoji3(emoji_number)
    const item3 = { question_id, answer }
    setQstThree(item3)
    // setData({ ...data,  third_question:item3  });
    // console.log(item3, 'wwwwww')

  }


  const handleChange_Q2_negative = (answer) => {
    answer.preventDefault();
    // setQstTwo(question_id)
    const item= answer.target.value;
    const arr2_negative = [Number(item)]
    console.log('vvvv optinal q2', qstTwo)
    setShowhide(item.value)
    let ques2 = qstTwo
    ques2.issue_categories = arr2_negative
    setData({ ...data, ques2 });
    
    // setdataqst ({...item2, issue_categories:[issue_categories]})

  }
  const handleChange_Q2_positive =(answer) =>{
    answer.preventDefault();
    // setQstTwo(question_id)
    const item= answer.target.value;
    const arr2_positive = [Number(item)]
    console.log('vvvv optinal q2', qstTwo)
    setShowhide(item.value)
    let ques2 = qstTwo
    ques2.positive_feedback = arr2_positive
    setData({ ...data, ques2 });
    
  }
  const handleChangeThree_negative = (answer) => {
    const item= answer.target.value;
    const arr3_negative = [Number(item)]
    // console.log('vvvv optinal q3', item)
    let ques3 = qstThree
    ques3.issue_categories = arr3_negative
    setData({ ...data, ques3 });
   
  }

  const handleChangeThree_positive = (answer) =>{

    const item= answer.target.value;
    const arr3_positive = [Number(item)]
    // console.log('vvvv optinal q3 v++++' , arr3_positive)
    let ques3 = qstThree
    ques3.issue_categories = arr3_positive
    setData({ ...data, ques3 });

  }


  const HandleSubmit = (e) => {
    e.preventDefault();
    
    //   let question2 = {
    //   ...qstTwo 
    // }
    // let question3 = {
    //   ...qstThree 
    // }
 

 

    
    let payload = {
      worker_id: parseInt(id),
      Question: [data]
    }
    console.log(payload);
    axios.post(url, payload)
      .then(res => {
        console.log(res.data)
      })
      .catch(res => {
        console.log(res, 'Form not sumitted')
      })

  }

  // let toggleClassCheck = btnState ? ' active' : null;



  return (
    <div id="layout-wrapper">
      <div className="page-top">
        <img
          className="logo"
          src="/images/logo.svg"
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

          <div className="feedback-q">
            {/* Question 1  */}
            <ul className="feedback-list">
              <li>
                <span className="text">
                  आप अपने पयिवेक्षक/सुपरवाइजर के साथ सहयोगात्मक पर्यवेछण सत्र का
                  मुल्यांकन किस प्रकार करेंगे ?
                </span>
                <div className="emoji">
                  <span className={`emoji-icon ${activeEmoji === 1 && 'active'}`}

                    onClick={() => handlefeedbackOne('1', 1, qst)}
                  >
                    <img src="/images/terrible.svg" alt="" />
                    <label>उपयोगी नहीं </label>
                  </span>
                  <span id="1" className={`emoji-icon ${activeEmoji === 2 && 'active'}`} onClick={() => handlefeedbackOne('2', 2, qst)}>
                    <img src="/images/not-good.svg" alt=" " />
                    <label>थोड़ा उपयोगी </label>
                  </span>
                  <span id="2" className={`emoji-icon ${activeEmoji === 3 && 'active'}`} onClick={() => handlefeedbackOne('3', 3, qst)}>
                    <img src="/images/ok.svg" alt=" " />
                    <label>ठीक </label>
                  </span>
                  <span className={`emoji-icon ${activeEmoji === 4 && 'active'}`} onClick={() => handlefeedbackOne('4', 4, qst)}>
                    <img src="/images/good.svg" alt=" " />
                    <label>उपयोगी</label>
                  </span>
                  <span className={`emoji-icon ${activeEmoji === 5 && 'active'}`} onClick={() => handlefeedbackOne('5', 5, qst)}>
                    <img src="/images/very_good.svg" alt="" />
                    <label>बहुत उपयोगी </label>
                  </span>
                </div>
              </li>








              {/* Question 2nd */}
              <li>
                <span className="text">
                  आपके पयिवेक्षक/सुपरवाइजर का आपके प्रति व्यवहार कैसा था?
                </span>
                <div className="emoji">
                  <span
                    className={`emoji-icon ${activeEmoji2 === 6 && 'active'}`}
                    onClick={() => handlefeedbackTwo('1', 6, qstTwo)}>
                    <img src="/images/terrible.svg" alt="terrible" />
                    <label>उपयोगी नहीं </label>
                  </span>
                  <span className={`emoji-icon ${activeEmoji2 === 7 && 'active'}`} onClick={() => handlefeedbackTwo('2', 7, qstTwo)}>
                    <img src="/images/not-good.svg" alt="not good" />
                    <label>थोड़ा उपयोगी </label>
                  </span>
                  <span className={`emoji-icon ${activeEmoji2 === 8 && 'active'}`} onClick={() => handlefeedbackTwo('3', 8, qstTwo)}>
                    <img src="/images/ok.svg" alt="ok" />
                    <label>ठीक </label>
                  </span>
                  <span className={`emoji-icon ${activeEmoji2 === 9 && 'active'}`} onClick={() => handlefeedbackTwo('4', 9, qstTwo)}>
                    <img src="/images/good.svg" alt="good" />
                    <label>उपयोगी</label>
                  </span>
                  <span className={`emoji-icon ${activeEmoji2 === 10 && 'active'}`} onClick={() => handlefeedbackTwo('5', 10, qstTwo)}>
                    <img src="/images/very_good.svg" alt="very good" />
                    <label>बहुत उपयोगी </label>
                  </span>
                </div>
                {/* <div className="feedback-send"> */}

                {/* Select Used Terrible,Not Good,Ok  */}

                {

                  (feedbackOne === '1' ||  feedbackOne === '2' || feedbackOne === '3') &&  
                  <div className="feedback-send">
                    <select className="selectreason" id="reasonone" name="Negative Feedback" onChange={(answer) => handleChange_Q2_negative(answer, qstTwo)}>
                      <option>समस्या श्रेणी/Issue category:</option>
                      <option value="1">आधिकारिक और कमांडिग </option>
                      <option value="2">गैर -सहायक</option>
                      <option value="3">धैर्य से न सुनना </option>
                      <option value="4">सम्मान और मर्यादा पूर्वक बात न करना
                      </option>
                      <option value="5">अन्य </option>
                    </select>
                    {/* {
                      showhide === '5' ? (
                        <input
                          type="text"
                          name="reasoninputtwo"
                          className="reasoninput"
                          maxLength={10}
                          placeholder="कृपया कारण निर्दिष्ट करें"
                          onChange={(e) => handleChange(e)}
                        />

                      )
                        : null
                    } */}

                  </div>
                }
                {
                  (feedbackOne === '4'|| feedbackOne === '5') &&
                  <div className="feedback-send">
                    <select className="selectreason" id="reasonone" name="Positive Feedback" onChange={(answer) => handleChange_Q2_positive(answer, qstTwo)}>
                      <option>सकािात्मक प्रततफिया/ Positive Feedback:</option>
                      <option value={1}>उचित मार्गदर्शन के साथ सहायक </option>
                      <option value={2}>धैर्य से सुनना</option>
                      <option value={3}>
                        सम्मान और मर्यादा पूर्वक व्यवहार किया गया
                      </option>
                      <option value={4}>अन्य</option>
                    </select>

                    {/* {
                      showhide === '4' ? (
                        <input
                          type="text"
                          name="reasoninputtwo"
                          className="reasoninput"
                          maxLength={10}
                          placeholder="कृपया कारण निर्दिष्ट करें"
                          onChange={(e) => handleChange(e)}
                        />

                      )
                        : null
                    } */}
                  </div>


                }



              </li>



              {/* Question 3rd */}
              <li>
                <span className="text">
                  क्या पयिवेक्षक/सुपरवाइजर ने आपकी समस्याओ को सुना और समाधान के लिए
                  मदद की ?
                </span>
                <div className="emoji">
                  <span className={`emoji-icon ${activeEmoji3 === 11 && 'active'}`} onClick={() => handlefeedbackThree('1', 11, qstThree)}>
                    <img src="/images/terrible.svg" alt="terrrible" />
                    <label>उपयोगी नहीं </label>
                  </span>
                  <span className={`emoji-icon ${activeEmoji3 === 12 && 'active'}`} onClick={() => handlefeedbackThree('2', 12, qstThree)}>
                    <img src="/images/not-good.svg" alt="not good" />
                    <label>थोड़ा उपयोगी </label>
                  </span>
                  <span className={`emoji-icon ${activeEmoji3 === 13 && 'active'}`} onClick={() => handlefeedbackThree('3', 13, qstThree)}>
                    <img src="/images/ok.svg" alt="ok" />
                    <label>ठीक </label>
                  </span>
                  <span className={`emoji-icon ${activeEmoji3 === 14 && 'active'}`} onClick={() => handlefeedbackThree('4', 14, qstThree)}>
                    <img src="/images/good.svg" alt="good" />
                    <label>उपयोगी</label>
                  </span>
                  <span className={`emoji-icon ${activeEmoji3 === 15 && 'active'}`} onClick={() => handlefeedbackThree('5', 15, qstThree)}>
                    <img src="/images/very_good.svg" alt="very good" />
                    <label>बहुत उपयोगी </label>
                  </span>
                </div>

                {(show  === '1' ||  show === '2' || show === '3') &&
                  <div className="feedback-send">
                    <select className="selectreason" id="reasonone" name="questionthird" onChange={(answer) => handleChangeThree_negative(answer)}>
                      <option>समस्या श्रेणी/Issue category:</option>
                      <option value="1">आधिकारिक और कमांडिग </option>
                      <option value="2">गैर -सहायक</option>
                      <option value="3">धैर्य से न सुनना </option>
                      <option value="4">

                        सम्मान और मर्यादा पूर्वक बात न करना
                      </option>
                      <option value="5">अन्य </option>
                    </select>

                    {/* {
                      showhide === '1' ? (
                        <input
                          type="text"
                          name="reasoninputthree"
                          className="reasoninput"
                          placeholder="कृपया कारण निर्दिष्ट करें"
                          onChange={(e) => handleChange(e)}
                        />

                      )
                        : null
                    } */}
                  </div>
                }
                {(show === '4' || show === '5' ) &&

                  <div className="feedback-send">
                    <select className="selectreason" id="reasonone" name="questionthird" onChange={(answer) => handleChangeThree_positive(answer)}>
                      <option>सकािात्मक प्रततफिया/ Positive Feedback:</option>
                      <option value="1">उचित मार्गदर्शन के साथ सहायक </option>
                      <option value="2">धैर्य से सुनना</option>
                      <option value="3">

                        सम्मान और मर्यादा पूर्वक व्यवहार किया गया
                      </option>
                      <option value="5">अन्य</option>
                    </select>

                    {/* {
                      showhide === 'अन्य' ? (
                        <input
                          type="text"
                          name="reasoninputthree"
                          className="reasoninput"
                          placeholder="कृपया कारण निर्दिष्ट करें"
                          onChange={(e) => handleChange(e)}
                        />

                      )
                        : null
                    } */}
                  </div>


                }

              </li>
            </ul>
            {/* submit the form here  */}
            <button
              name="submit"
              className="submitinput"
              type="submit"
              disabled=""
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
            src="/images/feedback-icon.svg"
            alt="feedback"
          />
          <h3>Feedback submitted successfully</h3>
        </div>
      </div>
    </div>
  );
}

export default Feedback;