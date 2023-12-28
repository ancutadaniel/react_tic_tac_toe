const Log = ({ turns }) => {
  return (
    <ol id="log">
      <h2>Log</h2>
      <ul id="log-list">
        {turns.map((turn) => {
          return (
            <li key={`${turn.square.row}${turn.square.col}`}>
              {turn.player} selected {turn.square.row},{turn.square.col}
            </li>
          );
        })}
      </ul>
    </ol>
  );
};

export default Log;
