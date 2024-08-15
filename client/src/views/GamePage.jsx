import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import burger from "../assets/burger.gif";

export default function GamePage({ socket }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState({});
  const [stateRoomCode, setStateRoomCode] = useState("");
  const [stateQuestions, setStateQuestions] = useState([]);
  const [stateCurrentQuestion, setStateCurrentQuestion] = useState(0);
  const [userNameState, setUserNameState] = useState("");
  const [userAnswer, setUserAnswer] = useState("");

  function checkAnswer(answer) {
    const isEquivalent = !answer.localeCompare(
      stateQuestions[stateCurrentQuestion].correctAnswer,
      undefined,
      { sensitivity: "accent" }
    );

    if (isEquivalent) {
      const payload = {
        username: userNameState,
        roomCode: stateRoomCode,
        currentQuestion: stateCurrentQuestion,
      };

      socket.emit("game:answerCorrect", payload);
      socket.on("game:nextQuestion", ({ currentQuestion, correctUser }) => {
        setStateCurrentQuestion(currentQuestion);
      });
    }
  }

  useEffect(() => {
    const username = `mamang${Math.random()}`;
    setUserNameState(username);
    socket.connect();

    if (location.state.roomMaster) {
      //kalo roomMaster
      socket.emit("game:initiate", location.state.questionSet, username);
      socket.on("game:successJoin", (payload) => {
        if (payload) {
          const { roomCode, questions, currentQuestion } = payload;
          setStateRoomCode(roomCode);
          setStateQuestions(questions);
          setStateCurrentQuestion(currentQuestion);
        }
      });
    } else {
      socket.emit("game:join", location.state.roomCode, username);
      socket.on("game:successJoin", (payload) => {
        if (payload) {
          const { roomCode, questions, currentQuestion } = payload;
          setStateRoomCode(roomCode);
          setStateQuestions(questions);
          setStateCurrentQuestion(currentQuestion);
        }
      });
    }

    socket.on(
      "game:nextQuestion",
      ({ currentQuestion, correctUser }, isEnd, leaderboard) => {
        if (isEnd) {
          setStateCurrentQuestion(currentQuestion);
          if (correctUser === username) {
            alert("Jawabanmu benar, Permainan Berakhir");
          } else {
            alert(
              `${correctUser} telah menjawab dengan benar, Permainan Berakhir`
            );
          }
          navigate("/leaderboard", { state: { leaderboard } });
        } else {
          setStateCurrentQuestion(currentQuestion);
          if (correctUser === username) {
            alert("Jawabanmu benar");
          } else {
            alert(`${correctUser} telah menjawab dengan benar`);
          }
        }
      }
    );
    return () => {
      socket.off();
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-slate white flex justify-center fixed">
        <div className="w-4/5 h-4/5 bg-slate-500 mt-5 border border-2 border-slate-200 rounded-3xl flex">
          <div className="w-[30%] h-full bg-slate-300 rounded-xl"></div>
          <div className="w-[70%] h-full bg-slate-700">
            <div className="w-full h-[10%] bg-yellow-100">
              Code:{stateRoomCode}{" "}
            </div>
            <div className="w-full h-[10%] bg-yellow-100">
              {" "}
              Clue: {stateQuestions[stateCurrentQuestion]?.clue}
            </div>
            <div className="w-full h-[70%] relative bg-slate-500 overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-contain z-10"
                src={stateQuestions[stateCurrentQuestion]?.imgUrl}
                alt="Burger"
              />
              <div className="absolute inset-0 w-full h-full bg-slate-200 bg-opacity-20 z-20 grid grid-cols-3 grid-rows-3 gap-0">
                <div className="border border-black">
                  <div
                    className="bg-slate-300 w-full h-full"
                    onClick={(e) => (e.target.style.display = "none")}
                  >
                    {" "}
                  </div>
                </div>
                <div className="border border-black">
                  <div
                    className="bg-slate-300 w-full h-full"
                    onClick={(e) => (e.target.style.display = "none")}
                  >
                    {" "}
                  </div>
                </div>
                <div className="border border-black">
                  <div
                    className="bg-slate-300 w-full h-full"
                    onClick={(e) => (e.target.style.display = "none")}
                  >
                    {" "}
                  </div>
                </div>
                <div className="border border-black">
                  <div
                    className="bg-slate-300 w-full h-full"
                    onClick={(e) => (e.target.style.display = "none")}
                  >
                    {" "}
                  </div>
                </div>
                <div className="border border-black">
                  <div
                    className="bg-slate-300 w-full h-full"
                    onClick={(e) => (e.target.style.display = "none")}
                  >
                    {" "}
                  </div>
                </div>
                <div className="border border-black">
                  <div
                    className="bg-slate-300 w-full h-full"
                    onClick={(e) => (e.target.style.display = "none")}
                  >
                    {" "}
                  </div>
                </div>
                <div className="border border-black">
                  <div
                    className="bg-slate-300 w-full h-full"
                    onClick={(e) => (e.target.style.display = "none")}
                  >
                    {" "}
                  </div>
                </div>
                <div className="border border-black">
                  <div
                    className="bg-slate-300 w-full h-full"
                    onClick={(e) => (e.target.style.display = "none")}
                  >
                    {" "}
                  </div>
                </div>
                <div className="border border-black">
                  <div
                    className="bg-slate-300 w-full h-full"
                    onClick={(e) => (e.target.style.display = "none")}
                  >
                    {" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[10%] bg-slate-100 flex justify-center px-4 py-3">
              <input
                type="text"
                className="border-l border-t border-b border-gray-200 rounded-l-md w-[80%] text-base md:text-lg px-3 py-2"
                placeholder="Enter Your Answer Here"
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              <button
                className="bg-orange-500 hover:bg-orange-600 hover:border-orange-600 text-white font-bold capitalize px-3 py-2 text-base md:text-lg rounded-r-md border-t border-r border-b border-orange-500"
                onClick={(e) => {
                  e.preventDefault();
                  checkAnswer(userAnswer);
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
