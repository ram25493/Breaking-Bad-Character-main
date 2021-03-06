import React, {useContext} from 'react'
import DataContext from './DataContext'

const IndividualCharacter = () => {
     const {renderIndividualCharacter, singleChar} = useContext(DataContext);
     const { name, portrayed, nickname, birthday, status, img } = singleChar;
  return (
    <div className="individual-character">
      <div className="individual-character-avatar">
        <img src={img} alt="character" />
      </div>
      <div className="individual-character-info">
        <h1>{name}</h1>
        <p>Actor name : {portrayed}</p>
        <p>Nick name: {nickname}</p>
        <p>Birthday: {birthday}</p>
        <p>Status: {status}</p>
      
      <div>
      <button className="back" onClick={() => renderIndividualCharacter(false)}>Back</button>
      </div>
      </div>
    </div>
  );
}

export default IndividualCharacter