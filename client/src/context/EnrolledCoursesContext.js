import { createContext, useState, useEffect } from 'react';

export const EnrolledCoursesContext = createContext([]);

export const EnrolledCoursesProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const courseList = JSON.parse(localStorage.getItem('userCourses'))
    if( courseList ) {
      setEnrolledCourses(courseList)
    }
}, [])

  console.log('CourseContext State : ' , enrolledCourses)

  return (
    <EnrolledCoursesContext.Provider value={{enrolledCourses, setEnrolledCourses}}>
      {children}
    </EnrolledCoursesContext.Provider>
  );
};
