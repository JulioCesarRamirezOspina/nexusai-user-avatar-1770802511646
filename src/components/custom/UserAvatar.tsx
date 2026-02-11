'use client';

import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export interface UserAvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away' | 'busy';
  className?: string;
}

const sizeMap = {
  xs: 'h-6 w-6 text-[10px]',
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-16 w-16 text-xl',
  xl: 'h-24 w-24 text-3xl',
};

const statusMap = {
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  away: 'bg-yellow-500',
  busy: 'bg-red-500',
};

export function UserAvatar({ 
  src, 
  alt = 'User avatar', 
  fallback = 'U', 
  size = 'md', 
  status, 
  className 
}: UserAvatarProps) {
  return (
    <div className={cn('relative inline-flex', className)}>
      <Avatar className={cn(sizeMap[size], 'rounded-full border border-border shadow-sm')}>
        <AvatarImage src={src} alt={alt} className="aspect-square h-full w-full" />
        <AvatarFallback className="flex h-full w-full items-center justify-center rounded-full bg-muted font-medium text-muted-foreground">
          {fallback.substring(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      {status && (
        <span 
          className={cn(
            'absolute bottom-0 right-0 block rounded-full ring-2 ring-background',
            statusMap[status],
            size === 'xs' || size === 'sm' ? 'h-2 w-2' : size === 'md' ? 'h-2.5 w-2.5' : 'h-4 w-4'
          )}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default UserAvatar;