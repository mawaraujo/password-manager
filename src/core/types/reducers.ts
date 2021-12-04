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

/**
 * @description Sidebar types
 */
export declare type SidebarState = {
  showSidebar: Boolean;
}

/**
 * @description User types
 */
export declare type UserState = {
  hasAccess: Boolean;
}

/**
 * @description User password types
 */
export declare type UserPasswordState = {
  password: String | null;
}


/**
 * @description App reducers list
 */
export declare type AppState = {
  passwords: PasswordState;
  tags: TagState;
  notifications: NotificationState;
  search: SearchState;
  sidebar: SidebarState;
  user: UserState;
  userPassword: UserPasswordState;
}
