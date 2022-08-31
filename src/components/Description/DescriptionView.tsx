import React, { useContext } from "react";
import { Context } from "./DescriptionProvider";
import IShow from "./types";

const DescriptionView = () => {
  const { show }: { show: IShow } = useContext(Context);
  return (
    <div>
      <h1>{show.name}</h1>
      <div>
        <img src={show?.image?.medium ?? ""} alt={show.name} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: show.summary }} />
    </div>
  );
};

export default DescriptionView;
