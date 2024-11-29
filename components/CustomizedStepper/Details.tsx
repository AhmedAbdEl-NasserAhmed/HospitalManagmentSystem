const Details = ({ className, item }: { className: string; item: any }) => {
  return (
    <div className="flex gap-1 flex-col">
      <h3 className={className}>{item.title}</h3>
      <p className="text-textMuted">{item.description}</p>
    </div>
  );
};

export default Details;
