import { useEffect, useState } from "react";

const useOffline = () => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const handleOffline = () => setStatus(true);

    const handleOnline = () => setStatus(false);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return status; 
};

export default useOffline;
