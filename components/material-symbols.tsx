type MaterialSymbolProps = {
  children: string;
  className?: string;
};

export function MaterialSymbol({ children, className = "" }: MaterialSymbolProps) {
  return <span className={`material-symbols-outlined ${className}`.trim()}>{children}</span>;
}
