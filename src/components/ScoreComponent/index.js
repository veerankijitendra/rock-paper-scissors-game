import {
  ScoreComponentCon,
  ScoreHeading,
  PlayingThingsPara,
  ScoreCon,
  ScorePara,
} from './styledComponent'

const ScoreComponent = props => {
  const {score} = props
  return (
    <ScoreComponentCon>
      <div>
        <PlayingThingsPara>ROCK</PlayingThingsPara>
        <PlayingThingsPara>PAPER</PlayingThingsPara>
        <PlayingThingsPara>SCISSORS</PlayingThingsPara>
      </div>
      <ScoreCon>
        <ScorePara>Score</ScorePara>
        <ScoreHeading>{score}</ScoreHeading>
      </ScoreCon>
    </ScoreComponentCon>
  )
}

export default ScoreComponent
