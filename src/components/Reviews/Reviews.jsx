import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReview } from 'Services/fetch';

export default function Reviews() {
  const { id } = useParams(null);
  const [review, setReview] = useState([]);
  useEffect(() => {
    const fetch = () => {
      fetchReview(id)
        .then(response => response.json())
        .then(items => setReview(items.results));
    };

    fetch();
  }, [id]);
  console.log(review.length);

  return (
    <ul>
      {review.length === 0
        ? "We haven't  any reviews for this movie"
        : review.map(review => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
    </ul>
  );
}
