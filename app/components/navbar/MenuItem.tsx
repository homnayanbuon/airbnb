"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="font-semibold px-4 py-3 hover:bg-neutral-200 transition"
    >
      {label}
    </div>
  );
};

export default MenuItem;
