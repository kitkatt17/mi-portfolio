import React from 'react';
import { Icon } from 'semantic-ui-react';

const GoUpArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Icon
      name="angle up"
      size="big"
      className="go-up-arrow"
      onClick={scrollToTop}
    />
  );
};

export default GoUpArrow;
