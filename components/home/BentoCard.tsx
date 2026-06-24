import Image from "next/image";

type BentoCardImage = {
  alt: string;
  src: string;
};

type BentoCardProps = {
  icon: string;
  title: string;
  description: string;
  className: string;
  iconClassName: string;
  titleClassName: string;
  descriptionClassName: string;
  iconWrapperClassName?: string;
  image?: BentoCardImage;
};

export function BentoCard({
  icon,
  title,
  description,
  className,
  iconClassName,
  titleClassName,
  descriptionClassName,
  iconWrapperClassName = "mb-8",
  image,
}: BentoCardProps) {
  const content = (
    <>
      <div className={iconWrapperClassName}><span className={`material-symbols-outlined ${iconClassName}`}>{icon}</span></div>
      <h3 className={titleClassName}>{title}</h3>
      <p className={descriptionClassName}>{description}</p>
    </>
  );

  return (
    <div className={className}>
      {image ? (
        <>
          <div className="flex-1">{content}</div>
          <div className="relative w-full md:w-1/3 aspect-video bg-background rounded-lg overflow-hidden grayscale contrast-125">
            <Image
              className="object-cover"
              alt={image.alt}
              src={image.src}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </div>
        </>
      ) : (
        content
      )}
    </div>
  );
}
