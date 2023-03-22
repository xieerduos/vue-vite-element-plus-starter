/**
 * @file todos api
 * @author 程序员李钟意
 */

import request from '@/utils/request';

export type TodoItem = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export function getTodos(params: Record<string, unknown> = {}): Promise<{data: TodoItem[]}> {
  return request({method: 'get', url: '/api/todos/', params});
}

export function postTodos(data: any): Promise<any> {
  return request({method: 'get', url: '/api/todos/', data});
}
