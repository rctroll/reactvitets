import { createContext, HTMLAttributes, useContext } from 'react';
import styles from './collapsible.module.scss';

interface CollapsibleProps {
  defaultOpen?: boolean;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children?: React.ReactNode;
  className?: string;
}

const CollapsibleContext = createContext<CollapsibleProps | null>(null);

const useCollapsible = () => {
  const context = useContext(CollapsibleContext);

  if (!context) {
    throw new Error('useCollapsible should be used within Collapsible component!');
  }

  return context;
};

const Collapsible = ({
  defaultOpen,
  open,
  onOpenChange,
  children,
  className = '',
}: CollapsibleProps) => {
  return (
    <CollapsibleContext.Provider value={{ open, onOpenChange }}>
      <div
        data-state={defaultOpen || open}
        className={`${className} ${styles.collapsible} ${styles.collapsible_trigger}`}
      >
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
};

interface CollapsibleTriggerProps extends HTMLAttributes<HTMLButtonElement> {}

const CollapsibleTrigger = ({ children, className = '' }: CollapsibleTriggerProps) => {
  const { open, onOpenChange } = useCollapsible();

  return (
    <button
      data-state={open}
      onClick={() => onOpenChange(!open)}
      className={`${className} ${styles.collapsible__trigger}`}
    >
      {children}
    </button>
  );
};

interface CollapsibleContentProps extends HTMLAttributes<HTMLDivElement> {}

const CollapsibleContent = ({ children, className = '' }: CollapsibleContentProps) => {
  const { open } = useCollapsible();

  return (
    <div data-state={open} className={`${styles.collapsible__content} ${className}`}>
      {children}
    </div>
  );
};

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
