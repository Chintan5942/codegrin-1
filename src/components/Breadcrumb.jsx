import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ROUTES } from '../constants/RoutesContants';
import { Icon } from '@iconify/react/dist/iconify.js';

const Breadcrumb = ({ 
  separator = <Icon icon="mdi:chevron-right" className="w-5 h-5" />,
  className = "",
  homeLabel = "Home"
}) => {
  const location = useLocation();

  // Route mapping for display names
  const routeNames = {
    [ROUTES.HOME]: "Home",
    [ROUTES.SERVICES]: "Services",
    [ROUTES.PORTFOLIO]: "Portfolio", 
    [ROUTES.COURSES]: "Courses",
    [ROUTES.BLOG]: "Blogs",
    [ROUTES.BLOG_DETAILS]: "Blog Details",
    [ROUTES.ABOUT]: "About",
    [ROUTES.CONTACT]: "Contact",
    [ROUTES.FAQ]: "FAQ's",
    [ROUTES.TERMS]: "Terms & Conditions",
    [ROUTES.PRIVACY]: "Privacy Policy",
  };

  // Generate breadcrumb items based on current path
  const generateBreadcrumbs = () => {
    const currentPath = location.pathname;
    
    // If we're on home page, don't show breadcrumbs
    if (currentPath === ROUTES.HOME) {
      return [];
    }

    const breadcrumbs = [
      {
        label: homeLabel,
        path: ROUTES.HOME,
        current: false
      }
    ];

    // Handle Service Details page specifically
    if (currentPath === ROUTES.SERVICE_DETAILS && location.state?.service) {
      // Add Services page
      breadcrumbs.push({
        label: "Services",
        path: ROUTES.SERVICES,
        current: false
      });
      
      // Add current service title
      breadcrumbs.push({
        label: location.state.service.title,
        path: currentPath,
        current: true
      });
      
      return breadcrumbs;
    }

    // Handle Course Details page specifically
    if (currentPath === ROUTES.COURSE_DETAILS && location.state?.course) {
      // Add Courses page
      breadcrumbs.push({
        label: "Courses",
        path: ROUTES.COURSES,
        current: false
      });
      
      // Add current course title
      breadcrumbs.push({
        label: location.state.course.category,
        path: currentPath,
        current: true
      });
      
      return breadcrumbs;
    }

    // Handle Blog Details page specifically
    if (currentPath === ROUTES.BLOG_DETAILS && location.state?.blog) {
      // Add Courses page
      breadcrumbs.push({
        label: "Blog",
        path: ROUTES.BLOG,
        current: false
      });
      
      // Add current course title
      breadcrumbs.push({
        label: location.state.blog.title,
        path: currentPath,
        current: true
      });
      
      return breadcrumbs;
    }



    // Handle other routes
    const currentPageName = routeNames[currentPath];
    if (currentPageName) {
      breadcrumbs.push({
        label: currentPageName,
        path: currentPath,
        current: true
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't render if no breadcrumbs
  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center flex-wrap gap-2 text-sm md:text-md mb-4 ${className}`}
    >
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={`${breadcrumb.path}-${index}`}>
          {breadcrumb.current ? (
            <span 
              className="text-white font-semibold px-0 md:px-2 py-1"
              aria-current="page"
            >
              {breadcrumb.label}
            </span>
          ) : (
            <Link 
              to={breadcrumb.path}
              className="text-primary hover:text-primary-light px-0 md:px-2 py-1 rounded-md transition-all duration-200 no-underline"
            >
              {breadcrumb.label}
            </Link>
          )}
          
          {index < breadcrumbs.length - 1 && (
            <span 
              className="text-gray-400 font-medium select-none" 
              aria-hidden="true"
            >
              {separator}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
