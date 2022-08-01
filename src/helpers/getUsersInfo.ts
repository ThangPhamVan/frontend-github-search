import { TOKEN, TOKEN_TYPE } from 'src/constant';
import { IUser } from 'src/types';

/**
 * Note: Search API doesn't have total followers and following for each user, so I need to call another API to get the information.
 * TODO: refactor later when the API is supported
 */
const getInfoUsersInParallel = (users: IUser[]) => {
  return Promise.all(
    users.map(
      async ({ url }) =>
        (await (
          await fetch(url, {
            method: 'GET',
            headers: {
              Authorization: `${TOKEN_TYPE} ${TOKEN}`,
            },
          })
        ).json()) as IUser
    )
  );
};

export default getInfoUsersInParallel;
