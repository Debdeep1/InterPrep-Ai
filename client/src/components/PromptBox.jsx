import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai'
import './styles/cards.css'
function PromptBox() {

    const [formData, setFormData] = useState({
        message: '',
    });
    const [interviewRounds, setInterviewRounds] = useState([]);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData.message); // Log all form data together
        run(formData.message)
    }
    const genAI = new GoogleGenerativeAI('AIzaSyAR1YKo1i15xU6HbEY3Htgl14nb16bVwZQ');
    async function run(userprompt) {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = userprompt + `generate interview questions, as rounds and try to have all possible 
        rounds that can exist for the given role, like in real life and send them as a JSON object with a 
        key named "rounds". Each round should have a key named "roundName" with a string value 
        representing the round name, and another key named "questions" with an array of strings 
        containing the interview questions for that round. Here's an example of the desired JSON format:
{
  "rounds": [
    {
      "roundName": "Technical Screening",
      "questions": [
        "Explain the concept of React components.",
        "What is the difference between useState and useEffect hooks?"
      ]
    },
    ...etc
  ]
}
Please generate interview questions and all possible interview rounds following the format mentioned above.
`
        const result = await model.generateContent(prompt);
        const response = await result.response;
        var text = response.text().replace(/```/g, '');
        text = text.replace(/json/g, '');
        const parsedData = JSON.parse(text);
        console.log(parsedData);
        setInterviewRounds(parsedData.rounds);
    }
    return (
        <>
           {interviewRounds.length === 0 && (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            )}
            {interviewRounds.length > 0 && (
                <div className='cards-container'>
                    <h2>Interview Rounds - {formData.message} role</h2>
                    <div className='cards'>
                        {interviewRounds.map(round => (
                            <div key={round.roundName} className="card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_lNB_iVKEb0rFydhn-_sRknoR5zEX1G75LvrNfFDo1g&s" alt="Card Image" />
                                <h2>{round.roundName}</h2>
                                <div className="card-content">
                                    <ul>
                                        {round.questions.map((question, index) => (
                                            <li key={index}>{question}</li>
                                        ))}
                                    </ul>
                                </div>
                                <button className="proceed-button">Proceed</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
export default PromptBox;
