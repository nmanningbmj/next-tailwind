import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function TopicSummary() {
  const router = useRouter();
  const topicId = router.query.id;
  const [topicData, setTopicData] = useState(null);

  useEffect(() => {
    if (topicId) {
      fetch(
        `http://live.contentds-api.tf.aws.bmjgroup.com/content?id=${topicId}&lang=en-gb&type=poce_cm`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            Accept: "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setTopicData(data))
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [topicId]);

  console.log(topicData);

  if (!topicData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ml-4">
      <Link className="hover:underline hover:text-cyan-500" href="/topic-list">
        Topic list
      </Link>
      <h1 className="mt-4">Topic ID {topicId}</h1>
      <h2>{topicData.topic.lang}</h2>
      <h2>{topicData.topic.metadata["topic-title"]}</h2>
    </div>
  );
}

export default TopicSummary;
