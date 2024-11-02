import { getDeviconClassName } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

type TagCardProps = {
  _id: string;
  name: string;
  questions: number;
  showCount?: boolean;
  compact?: boolean;
};

export default function TagCard({
  _id,
  name,
  questions,
  showCount,
  compact,
}: TagCardProps) {
  const iconClass = getDeviconClassName(name);

  return (
    <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2">
      <Badge variant="secondary" className="rounded px-4 py-2 uppercase">
        <div className="flex-center space-x-2">
          <i className={`${iconClass} text-sm`}></i>
          <span>{name}</span>
        </div>
      </Badge>
      {showCount && <p className="text-sm font-medium">{questions}</p>}
    </Link>
  );
}
