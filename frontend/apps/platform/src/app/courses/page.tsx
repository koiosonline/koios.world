"use client"

import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

const GET_COURSES = gql`
  query GetCourses {
    courses {
      data {
        attributes {
          Name
        }
      }
    }
  }
`;


const Page = () => {
  const { loading, error, data } = useQuery(GET_COURSES);

  console.log('loading', loading)
  console.log('error', error)
  console.log('data', data)

  useEffect(() => {
    if (data) {
      console.log('data', data)
    }
  }
  , [data]);
  
  return (
    <div>
      <h1 className="">Hello World</h1>
    </div>
  );
};

export default Page;
