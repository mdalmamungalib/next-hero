import React from "react";

const page = ({ params }) => {
  console.log(params);

  if(params?.new.length === 3){
    return <h1>{params?.new[2]}</h1>;
  }
  if(params?.new.length === 2){
    return <h1>{params?.new[1]}</h1>;
  }
  if(params?.new.length === 1){
    return <h1>{params?.new[0]}</h1>;
  }
  return (
    <div>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Error inventore, labore ad reiciendis laudantium rerum ipsa
        amet quibusdam qui eligendi quidem commodi accusamus
        doloremque libero?
      </h1>
    </div>
  );
};

export default page;
