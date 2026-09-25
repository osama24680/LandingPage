interface IProps {
  head: string;
  paragraph: string;
  color?: string;
}
const HeadLine = ({ head, paragraph, color }: IProps) => {
  return (
    <div className="headLine">
      {color ? <h2 style={{ color }}>{head}</h2> : <h2>{head}</h2>}
      {color ? <p style={{ color }}>{paragraph}</p> : <p>{paragraph}</p>}
    </div>
  );
};

export default HeadLine;
