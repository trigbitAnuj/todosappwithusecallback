import React from "react";

function Count({ count, increment }) {
  React.useEffect(() => {
    console.log("count component render");
  });
  return (
    <div>
      Count:{count}
      <button onClick={increment}>Add Count</button>
    </div>
  );
}

export default React.memo(Count);
