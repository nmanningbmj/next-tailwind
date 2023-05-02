import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

function topicList() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://live.contentds-api.tf.aws.bmjgroup.com/topic-mapping/all", {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const dataArray =
    data &&
    data.map((item, index) => {
      return (
        <Link href={`topic/${item.poceTopicId}`}>
          <div className="mb-4" key={index}>
            <h2 className="text-xl hover:underline hover:text-cyan-500">
              {item.poceTopicId}
            </h2>
          </div>
        </Link>
      );
    });

  return (
    <div className="ml-4">
      <Link className="text-3xl font-bold  hover:underline" href="/">
        Home
      </Link>
      <h1 className="mt-6 mb-4 text-xl font-semibold">Topic List</h1>
      {dataArray}
    </div>
  );
}

export default topicList;
