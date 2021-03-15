import { useEffect, useState } from "react";

const Message = () => {
  const [coors, setCoors] = useState({ x: 0, y: 0 });

  const { x, y } = coors;

  useEffect(() => {
    const mouseMove = (e) => {
      setCoors({
        x: e.x,
        y: e.y,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <p>
        x: {x} y: {y}
      </p>
    </div>
  );
};

export default Message;
