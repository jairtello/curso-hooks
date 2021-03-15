import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, loading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div className="container mt-5">
      <h1>BreakinBad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button onClick={increment} className="btn btn-primary">
        Next Quote
      </button>
    </div>
  );
};

export default MultipleCustomHooks;
