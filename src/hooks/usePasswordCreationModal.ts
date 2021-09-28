import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPassword, editPassword } from '../core/store/actions/passwords';

export default function usePasswordCreationModal(setShowModal: Function) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [tagId, setTagId] = useState('');

  const cleanForm = () => {
    setName('');
    setDescription('');
    setUsername('');
    setEmail('');
    setPassword('');
    setUrl('');
    setTagId('');
  };

  const handleEdit = (token: string | number) => {
    dispatch(editPassword({ token, name, description, username, email, password, url, tagId }));
    setShowModal(false);
    cleanForm();
  };

  const handleCreate = (token: string | number) => {
    dispatch(createPassword({ token, name, description, username, email, password, url, tagId }));
    setShowModal(false);
    cleanForm();
  };

  const handleSetTag = (tag: any) => setTagId(tag);

  return {
    name,
    setName,
    description,
    setDescription,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    url,
    setUrl,
    tagId,
    setTagId: handleSetTag,
    handleCreate,
    handleEdit,
  };
}
