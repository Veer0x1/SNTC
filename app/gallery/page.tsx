import React, { FunctionComponent } from "react";
import Gallery from "@/components/Gallery/Gallery";

interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Gallery />
      </div>
    </>
  );
};

export default page;
