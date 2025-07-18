import React from "react";

interface FooterProps {
  className?: string;
}
const FooterIcon: React.FC<FooterProps> = ({ className = "" }) => {
      return (
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={className}
            >
                  <path d="M0 1H15V16" stroke="white" stroke-width="2" />
            </svg>
      );
};

export default FooterIcon;
