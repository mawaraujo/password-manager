import { Password, Tag } from '../types/reducers';

export const importAsJSONFile = (data: Blob | null, callback: CallableFunction) => {
  if (!data) return callback(null);

  const fileReader: FileReader = new FileReader();
  fileReader.readAsText(data, 'UTF-8');

  fileReader.onload = (e) => {
    try {
      if (e && e.target && e.target.result && e.target.result) {
        const jsonInfo: {tags: Tag[], passwords: Password[]} = JSON.parse(e.target.result as string);

        if (!jsonInfo.passwords || !jsonInfo.tags) return callback(null);
        return callback(jsonInfo);
      }

      return callback(null);
    } catch (error) {
      return callback(null);
    }
  };
};
