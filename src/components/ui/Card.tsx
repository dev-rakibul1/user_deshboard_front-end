import { FC } from "react";

interface CardProps {
  title: string;
  value: string;
}

const Card: FC<CardProps> = ({ title, value }) => {
  return (
    <div className="bg-white shadow rounded p-4 w-full md:w-1/4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-xl mt-2">{value}</p>
    </div>
  );
};

export default Card;
