interface StepCardProps {
  number: number;
  text: string;
}

const StepCard = ({ number, text }: StepCardProps) => (
  <div className="flex items-center gap-3 rounded-xl bg-card px-4 py-3 shadow-sm">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
      {number}
    </div>
    <p className="text-sm font-medium text-foreground">{text}</p>
  </div>
);

export default StepCard;
