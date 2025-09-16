import React from 'react';
import Breadcrumb from './Breadcrumb';

const PageTitle = ({ 
  title,

  breadcrumbClassName = "",
  containerClassName = "mt-40",
  showBreadcrumb = true
}) => {
  return (
    <div className={`w-full ${containerClassName}`}>
      {/* Dynamic Breadcrumb */}
      {showBreadcrumb && (
        <Breadcrumb className={breadcrumbClassName} />
      )}
      {/* Title */}
      <h1 className="text-6xl font-bold">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
