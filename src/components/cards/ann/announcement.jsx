import React from 'react';
import './Announcement.css';

const Announcement = () => {
  const announcements = [
    { title: "Outing schedule for every department", date: "Today, 13 Sep 2021" },
    { title: "Meeting HR Department", date: "Yesterday, 12:30 PM" },
    { title: "IT Department need two more talents for UX/UI Designer position", date: "Yesterday, 09:15 AM" }
  ];

  return (
    <div className="announcement-container">
      {announcements.map((announcement, index) => (
        <div key={index} className="announcement">
          <h3>{announcement.title}</h3>
          <p>{announcement.date}</p>
        </div>
      ))}
      <button className="see-all-button">See All Announcements</button>
    </div>
  );
};

export default Announcement;
