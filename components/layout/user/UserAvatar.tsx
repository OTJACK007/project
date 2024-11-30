'use client';

interface UserAvatarProps {
  initials: string;
  name: string;
}

export function UserAvatar({ initials, name }: UserAvatarProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
        <span className="text-sm font-medium text-muted-foreground">{initials}</span>
      </div>
      <div className="flex-shrink-0">
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">Voir le profil</p>
      </div>
    </div>
  );
}