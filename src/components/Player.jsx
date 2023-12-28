import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onNameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newPlayerName, setPlayerNewName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);

    
    if (isEditing) onNameChange(symbol, newPlayerName);
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    const capitalizedValue = value.toUpperCase();
    setPlayerNewName(capitalizedValue);
  };

  let playerName = <span className="player-name">{newPlayerName}</span>;

  if (isEditing) {
    playerName = (
      <input type="text" value={newPlayerName} onChange={handleOnChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
