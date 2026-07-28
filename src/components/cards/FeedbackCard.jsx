"use client";
const FeedbackCard = ({ feedback }) => {
  const { _id, message, date } = feedback;
  const formattedDate = new Date(date).toLocaleString("en-US", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="bg-white border rounded-xl shadow p-5">
      {" "}
      <h3 className="font-semibold text-lg">
        {" "}
        Feedback #{_id.slice(-5)}{" "}
      </h3>{" "}
      <p className="text-gray-600 mt-2">{message}</p>{" "}
      <p className="text-sm text-gray-400 mt-3"> {formattedDate} </p>{" "}
      <div className="flex gap-3 mt-5">
        {" "}
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          {" "}
          Update{" "}
        </button>{" "}
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg">
          {" "}
          Delete{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};
export default FeedbackCard;
