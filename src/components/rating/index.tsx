interface RandomStarsProps {
    starCount: number;
  }
  
  const RandomStars: React.FC<RandomStarsProps> = ({ starCount }) => {
    return (
      <span>
        {Array.from({ length: Math.floor(starCount) }, (_, index) => (
          <i key={index} className="fa-solid fa-star mr-[2px]"></i>
        ))}
      </span>
    );
  };
  
  export default RandomStars;
  