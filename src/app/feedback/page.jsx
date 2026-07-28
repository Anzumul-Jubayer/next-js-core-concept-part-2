import FeedbackCard from "@/components/cards/FeedbackCard";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "feedbacks",
};
const getFeedback = async () => {
  const res = await fetch("http://localhost:3000/api/feedback/", {
    cache: "force-cache",
    next: { revalidate: 60 },
  });

  return await res.json();
};

const FeedbackPage = async () => {
  const feedbacks = await getFeedback();

  return (
    <div className="">
      <h2 className="text-2xl font-bold">Feedback: {feedbacks.length}</h2>
      <div className="my-5">
        <Link href={"/feedback/add"} className="btn">
          Add Feedback
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback._id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
