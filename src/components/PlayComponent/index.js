import {PlayButton, PlayImage} from '../../styledComponent'

const PlayComponent = props => {
  const {choicesList} = props
  const {imageUrl, id} = choicesList[0]

  return (
    <>
      <PlayButton type="button">
        <PlayImage src={imageUrl} alt={id} />
      </PlayButton>
    </>
  )
}

export default PlayComponent
