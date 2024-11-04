import React, { useState, useEffect } from 'react';

const ProgressiveTimer = () => {
  const [timeElapsed, setTimeElapsed] = useState('');

  useEffect(() => {
    const startDate = new Date('2023-11-15T00:00:00');

    // Function to calculate the time difference with correct pluralization
    const calculateTimeElapsed = () => {
      const now = new Date();
      const diff = now - startDate;

      // Calculate total days, weeks, and remaining days
      const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
      const weeks = Math.floor(totalDays / 7);
      const days = totalDays % 7;

      // Format weeks and days with correct pluralization
      const weeksText = weeks === 1 ? '1 week' : `${weeks} weeks`;
      const daysText = days === 1 ? '1 day' : `${days} days`;

      return `${weeksText}, ${daysText}`;
    };

    // Set initial time elapsed immediately
    setTimeElapsed(calculateTimeElapsed());

    // Start interval to update time every second
    const timer = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>{`It has been ${timeElapsed} without seeing ror4`}</h2>
    </div>
  );
};

export default ProgressiveTimer;
