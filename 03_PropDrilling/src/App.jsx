import React from "react";
import Card from "./components/Card";
const App = () => {
  return (
    <div className="parent">
      <Card
        user="Ritwik"
        age={22}
        img="https://plus.unsplash.com/premium_photo-1758893734322-172b22ba5278?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715"
      />
      <Card
        user="Rishik"
        age={24}
        img="https://plus.unsplash.com/premium_photo-1759661469246-3258ad3797a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
      />
      <Card
        user="Rohit"
        age={26}
        img="https://images.unsplash.com/photo-1758846182585-c37d8c2946c2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500"
      />
    </div>
  );
};

export default App;
