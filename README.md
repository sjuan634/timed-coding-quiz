# Timed Coding Quiz

## Description

This web app is a timed quiz. When the user clicks the start button they are presented with questions to answer. If they answer incorrectly they are penalized by losing 15 seconds from the remaining time. The quiz if over if the user answers all the questions or if the time runs out. Once the quiz is over the user enters their initials to log their score. The score is saved in local storage and  can be viewed by clicking View Highscores in the top left corner.

## User Story
```md
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```md
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```


## Usage
![Timed Quiz Demo](./images/timed-quiz_demo.gif)