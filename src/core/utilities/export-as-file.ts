import { TagState, PasswordState } from '../types/reducers';

export const exportAsJSONFile = (TAGS: TagState, PASSWORDS: PasswordState) => {
  const dataStr = JSON.stringify({ tags: TAGS.tags, passwords: PASSWORDS.passwords });
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

  const exportFileDefaultName = new Date().toISOString().slice(0, 10) + ' LOCKY_BACKUP_FILE.json';

  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
  linkElement.remove();
};
