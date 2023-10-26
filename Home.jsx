import React from "react";

const Home = () => {
  const containerStyle = {
   
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', 
    color: 'white',

  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to Digital Campus</h1>
      <h5>The digital campus offers a single point of access to critical resources 
        through an online, user-friendly portal that connects all constituents, 
        from prospective and current students to alumni and staff.</h5>
    </div>
  );
};

export default Home;