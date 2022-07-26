import ListItem from "./ListItem";

const NumberList = (props: any) => {
  const numbers = props.numbers;
  const listItems = numbers.map((number: number) =>
    <ListItem key={number.toString()} value={number} />
  )
  return (
    <ul>{listItems}</ul>
  );
};

export default NumberList;