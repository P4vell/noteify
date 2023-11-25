import Image from "next/image";

type AvatarProps = {
  imageUrl: string | null;
};

export const Avatar = ({ imageUrl }: AvatarProps) => {
  return (
    <Image
      src={imageUrl || "/images/default.jpg"}
      alt="User avatar"
      width={26}
      height={26}
      className="rounded-full"
    />
  );
};