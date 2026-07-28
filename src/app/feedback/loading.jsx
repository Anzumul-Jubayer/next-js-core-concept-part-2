'use client'

import React from 'react';

const Loading = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow animate-pulse space-y-4"
          >
            <div className="h-5 w-32 bg-gray-300 rounded"></div>

            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 w-4/5 bg-gray-300 rounded"></div>
            </div>

            <div className="h-3 w-28 bg-gray-300 rounded"></div>

            <div className="flex gap-3 pt-2">
              <div className="h-10 w-24 rounded-lg bg-gray-300"></div>
              <div className="h-10 w-24 rounded-lg bg-gray-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;