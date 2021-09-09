import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTag, editTag } from '../core/store/actions/tags';

export default function useTagCreationModal(setShowModal: Function) {
  const dispatch = useDispatch();

  const [tagName, setTagName] = useState('');
  const [tagIcon, setTagIcon] = useState('');

  const clearForm = () => {
    setTagIcon('');
    setTagName('');
  };

  const handleEdit = (id: string | number) => {
    dispatch(editTag({id: id, name: tagName, icon: tagIcon }));

    clearForm();
    setShowModal(false);
  };

  const handleCreate = (id: string | number) => {
    dispatch(createTag({ id: id, name: tagName, icon: tagIcon }));

    clearForm();
    setShowModal(false);
  };

  return {
    tagName,
    tagIcon,
    setTagName,
    setTagIcon,
    handleCreate,
    handleEdit,
  };
}
