type TechLabelProps = {
  name: string;
};

export default function TechLabel({ name }: TechLabelProps) {
  return (
    <span className="tech-label">
      {name}
    </span>
  );
}

