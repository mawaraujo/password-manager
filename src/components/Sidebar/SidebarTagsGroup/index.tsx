import React from 'react';
import { Box } from '@chakra-ui/layout';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Notification, Tag, TagState } from '../../../core/types/reducers';
import { createTag, deleteTag, selectTag, resetSelectedTag } from '../../../core/store/actions/tags';
import { SidebarTagsMenuComponent } from '../SidebarTagsMenu';
import { SidebarTagsContentComponent } from '../SidebarTagsContent';
import { createNotification } from '../../../core/store/actions/notifications';
import { Props } from './definitions';

function SidebarTags(props: Props) {
  const {
    TAGS_STATE,
    selectTagDispatch,
    deleteTagDispatch,
    resetSelectedTagDispatch,
    createNotificationDispatch,
    handleTagEditSelected,
  } = props;

  const handleSelectedTag = (tag: Tag) => selectTagDispatch(tag);

  const handleDeleteTag = (tag: Tag) => {
    deleteTagDispatch(tag);
    createNotificationDispatch({ type: 'success', message: `${tag.name} tag removed successfully` });

    if (TAGS_STATE.selectedTag.id === tag.id) resetSelectedTagDispatch();
  };

  return (
    <Box
      className="scroll-style"
      maxHeight={300}
      height="100%"
      overflowY="auto"
      mt={3}
      color="white">
      {
        TAGS_STATE.tags && TAGS_STATE.tags.map((item: Tag) => (
          <Box
            key={'__tag_item__' + item.id}
            _hover={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
            cursor="pointer"
            className={`app-box-item ${TAGS_STATE.selectedTag.id === item.id ? 'selected' : ''}`}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px={4}>

            <SidebarTagsContentComponent
              tag={item}
              handleSelectedTag={handleSelectedTag} />

            { item.id !== 0 && (
              <SidebarTagsMenuComponent
                tag={item}
                handleTagEditSelected={handleTagEditSelected}
                handleDeleteTag={handleDeleteTag} />
            )}
          </Box>
        ))
      }
    </Box>
  );
}

const mapStateToProps = (state: { tags: TagState }) => {
  return {
    TAGS_STATE: state.tags,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createTagDispatch: (tag: Tag) => dispatch(createTag(tag)),
    deleteTagDispatch: (tag: Tag) => dispatch(deleteTag(tag)),
    selectTagDispatch: (tag: Tag) => dispatch(selectTag(tag)),
    resetSelectedTagDispatch: () => dispatch(resetSelectedTag()),
    createNotificationDispatch: (notification: Notification) => dispatch(createNotification(notification)),
  };
};

export const SidebarTagsGroupComponent = connect(mapStateToProps, mapDispatchToProps)(SidebarTags);
