import classNames from "classnames";

interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return (
    <h1
      className={classNames(
        "my-20 text-4xl md:text-6xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return (
    <p
      className={classNames(
        "mb-12 text-lg primary-text md:text-xl",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="max-w-5xl mx-auto text-center">{children}</div>;
};
