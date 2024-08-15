//==== PERTANYAAN ====//
const questionSet = {};
//==== PERTANYAAN ====//

const getQuestionSet = (choosen) => {
  return questionSet[choosen];
};

const enterGame = (choosen, username, id) => {
  const questions = getQuestionSet(choosen);

  if (id) {
    const roomCode = id.slice(0, 5);
    return {
      roomCode,
      username,
      questions,
    };
  } else {
    return {
      username,
      questions,
    };
  }
};

module.exports = { enterGame, getQuestionSet };
