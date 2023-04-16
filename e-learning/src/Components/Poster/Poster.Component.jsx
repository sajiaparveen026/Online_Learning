import React from 'react'
import { Link } from 'react-router-dom';

const CoursesPoster = (props) => {
    return  (
        <Link to={"/courses"}>
          <div className="flex flex-col items-start gap-2 px-1 md:px-3">
            <div className="h-30 md:h-80 w-60">
              <img
                src={props.image}
                alt="poster"
                className="w-full h-full rounded-md"
              />
            </div>
            <h3
              className={`text-lg font-bold ${
                props.isDark ? "text-white" : "text-gray-700"
              }`}
            >
              {props.title}
            </h3>
          </div>
        </Link>
      );
}
 

export default CoursesPoster
