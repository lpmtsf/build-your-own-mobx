import { useState, useEffect } from 'react';

const Delayed = ({ children, waitBeforeShow = 500, triggerRerender}: any) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(false)

    const timer = setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);


    return () => clearTimeout(timer);
  }, [waitBeforeShow, triggerRerender]);

  return isShown ? children : null;
};

export default Delayed;
