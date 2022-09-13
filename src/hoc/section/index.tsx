import React from "react";

const withFetchAPI = (
  WrappedComponents: React.FC<any>,
  data: any[],
  title?: string
) => {
  return <WrappedComponents data={data} title={title} />;
};

export default withFetchAPI;
