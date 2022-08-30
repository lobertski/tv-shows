import React from "react";

const withFetchAPI: React.FC<any> = (WrappedComponents: any, data: any) => {
  return <WrappedComponents data={data} />;
};

export default withFetchAPI;
