import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import UnderDevelopment from '../UnderDevelopment';
import SpeakersList from '../mainCompnonents/SpeakersList';

function StatusWrapper() {
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('Site under maintenance');

  useEffect(() => {
    const fetchStatus = async () => {
      const ref = doc(db, 'siteStatus', 'appStatus');
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        setStatus(data.status || 'offline');
        setMessage(data.message || 'Site under maintenance');
      } else {
        setStatus('offline');
      }
    };
    fetchStatus();
  }, []);

  if (status === null) return <div>Loading...</div>;

  return status === 'online' ? <SpeakersList /> : <UnderDevelopment message={message} />;
}

export default StatusWrapper;
