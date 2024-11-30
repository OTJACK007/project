'use client';

export function TimeGrid() {
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0">
      {hours.map((hour) => (
        <div
          key={hour}
          className="border-t border-gray-200 h-12"
        >
          <div className="sticky left-0 w-16 pr-2 text-right text-xs text-gray-500">
            {`${hour.toString().padStart(2, '0')}:00`}
          </div>
        </div>
      ))}
    </div>
  );
}