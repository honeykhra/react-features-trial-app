import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <div>
      <ColorRing
        visible={visibility}
        height="200"
        width="200"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#152C5B", "#FF498B", "#3252DF", "#D9D9D9", "#585757"]}
      />
      <p onClick={() => setVisibility(!visibility)}>Toggle loader</p>
    </div>
  );
};

export default Loader;
