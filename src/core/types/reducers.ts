/**
 * @description Password types
 */
export declare type Password = {
  token: string | number;
  name: string;
  description?: string;
  username?: string;
  email: string;
  password: string;
  url?: string;
  tagId: number | string;
}

export declare type PasswordState = {
  passwords: Password[];
}

/**
 * @description Tags types
 */
export declare type Tag = {
  id: number | string;
  name: string;
  icon: string;
}

export declare type TagState = {
  selectedTag: Tag;
  tags: Tag[];
}

/**
 * @description Notification types
 */
export declare type Notification = {
  type: 'error' | 'success' | 'warning';
  message: string;
  descripton?: string;
  duration?: number;
  isClosable?: boolean;
}

export declare type NotificationState = {
  notifications: Notification[];
}

/**
 * @description Search types
 */
export declare type SearchState = {
  search: string;
}
