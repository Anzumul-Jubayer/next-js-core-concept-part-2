import React from 'react';
import ReviewsPage from './ReviewsPage';
export const metadata = {
  // title: "All Reviews ",
  title:{
    absolute:"Satisfied user"
  },
  description: "Best fast food in Belkuchi",
};
const page = () => {
  return (
    <div>
      <ReviewsPage/>
    </div>
  );
};

export default page;