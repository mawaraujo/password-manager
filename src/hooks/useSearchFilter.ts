import { useEffect, useState } from 'react';
import { Password } from '../core/types/reducers';
import { containsValue as cT } from '../core/utilities';

export function useSearchFilter(search: string, passwords: Password[]) {
  const [data, setData] = useState(passwords);
  const [isEmpty, setIsEmpty] = useState(false);

  /**
   * Filter stored credentials with search
   * @return {void}
   */
  const filter = (): void => {
    if (!passwords || !passwords.length) return setIsEmpty(true);
    if (!search) return setData(passwords);

    setData(
      passwords.filter((pass: Password) => (
        cT(pass.name, search) || cT(pass.email, search) || cT(pass?.username, search)
      )),
    );

    if (!data) return setIsEmpty(true);
  };

  useEffect(() => (setIsEmpty(false), filter()), [passwords, search]);

  return {
    data,
    isEmpty,
  };
}
