import React from 'react';

interface TooltipProps {
  target: React.ReactNode;
  content: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ target, content }) => {
  const [isTooltipVisible, setTooltipVisible] = React.useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="relative inline-block">
      <div
        className="cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {target}
      </div>
      {isTooltipVisible && (
        <div className="absolute bg-gray-200 p-2 rounded-lg shadow-md">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;