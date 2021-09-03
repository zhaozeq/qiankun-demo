import request from '@/services/request';
import type { CurrentUser, ListItemDataType } from './data.d';

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  return request('/currentUserDetail23', { errorHandler: (e) => console.log(e) });
}

export async function queryFakeList(params: { count: number }): Promise<{ data: { list: ListItemDataType[] } }> {
  return request('/fake_list_Detail', {
    params,
  });
}
