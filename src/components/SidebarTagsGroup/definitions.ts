import { TagState, Tag, Notification } from '../../core/types/reducers';

export declare type Props = {
  TAGS_STATE: TagState;
  createTagDispatch: (tag: Tag) => void;
  selectTagDispatch: (tag: Tag) => void;
  deleteTagDispatch: (tag: Tag) => void;
  resetSelectedTagDispatch: () => void;
  createNotificationDispatch: (notification: Notification) => void;
  handleTagEditSelected: (tag: Tag) => void;
}
