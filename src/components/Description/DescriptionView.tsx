import React, { useContext } from "react";
import { Context } from "./DescriptionProvider";
import IShow from "./types";
import "./style.css";

const DescriptionView = () => {
  const { show }: { show: IShow } = useContext(Context);
  return (
    <div className="section-container">
      <section>
        <h1>{show.name}</h1>
        <figure className="figure-container">
          <img src={show?.image?.medium ?? ""} alt={show.name} />
        </figure>
      </section>

      <article
        className="summary-show"
        dangerouslySetInnerHTML={{ __html: show.summary }}
      />

      <section className="show-info">
        <h3>Shows Info</h3>
        <span>
          {show?.webChannel
            ? `Web channel: ${show?.webChannel ?? ""}`
            : `Network: ${show?.network?.name ?? ""}`}
        </span>
        <br></br>
        <span>
          Schedule:
          {` ${show?.schedule?.days.join(", ") ?? ""} at ${
            show?.schedule?.time ?? ""
          }`}
        </span>
        <br></br>
        <span>Status: {show?.status ?? ""}</span>
        <br></br>
        <span>Show Type: {show?.type ?? ""}</span>
        <br></br>
        <span>Genres: {show?.genres?.join(", ") ?? ""}</span>
        <br></br>
        <span>Episodes ordered:</span>
        <br></br>
        <span>Created by:</span>
        <br></br>
        <span>Official Site: {show?.network?.officialSite ?? ""}</span>
      </section>
    </div>
  );
};

export default DescriptionView;
