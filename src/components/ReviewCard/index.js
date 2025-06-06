import React from 'react';

const ReviewCard = ({ rating, content, date, userName, userImage }) => {
  const validRating = Math.min(Math.max(Number(rating) || 0, 0), 5);

  return (
    <div className="h-au w-full text-white border-2 border-amber-50 rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <img
          src={userImage || "favicon-16x16.png"}
          alt={userName}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">{userName}</h2>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </div>
      <p className="mb-4">{content}</p>
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < validRating ? 'text-yellow-500' : 'text-gray-400'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-6.18 3.245L5.36 10.64 0 6.635l7.91-1.153L10 0l2.09 5.482L20 6.635l-5.36 3.995L16.18 18.245z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;