import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "./Grid";
import parse from "html-react-parser";

export default function OutlinedCard({
  questionCounter,
  questionsArray,
  nextQuestion,
  setResult,
  result,
}) {
  const currentQuestion = questionsArray[questionCounter - 1];
  
  // Memorizza le risposte randomizzate solo una volta per ogni domanda
  const shuffledOptions = React.useMemo(() => {
    return [
      ...currentQuestion.incorrect_answers,
      currentQuestion.correct_answer,
    ].sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

  return (
    <Box sx={{ minWidth: 275 }} style={{ margin: 20 }}>
      {questionsArray.length > 0 ? (
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              Question: {parse(currentQuestion.question)}
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Category: {parse(currentQuestion.category)}
            </Typography>

            {shuffledOptions.map((options, index) => {
              return (
                <Grid
                  key={index}
                  nextQuestion={nextQuestion}
                  options={parse(options)}
                  setResult={setResult}
                  result={result}
                  correctAnswer={currentQuestion.correct_answer}
                />
              );
            })}
          </CardContent>
        </Card>
      ) : (
        ""
      )}
    </Box>
  );
}
