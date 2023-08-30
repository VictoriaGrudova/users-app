import React from 'react';

export const Success = ({ count }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Successful!</h3>
      <p>{count} users have been sent an invitation.</p>
      <button onClick={() => window.location.reload()} className="Btn">Back</button>
    </div>
  );
};
