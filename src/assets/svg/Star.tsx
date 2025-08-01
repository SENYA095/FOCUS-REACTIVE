import React from "react";

interface StarProps {
  className?: string;
}

const Star: React.FC<StarProps> = ({ className = "" }) => {
      return (
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  className={className}
            >
                  <path
                        d="M6.97257 0.0267944L8.43452 4.52622H13.1655L9.33805 7.30702L10.8 11.8064L6.97257 9.02564L3.14513 11.8064L4.60708 7.30702L0.779639 4.52622H5.51061L6.97257 0.0267944Z"
                        fill="#00E56D"
                  />
            </svg>
      );
};

export default Star;
