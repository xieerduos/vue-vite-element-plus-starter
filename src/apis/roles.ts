/**
 * @file 系统管理 => 角色管理 api
 * @author 程序员李钟意
 */

import request from '@/utils/request';

// 角色管理 => 获取用户列表
export function getRoles(params: Record<string, unknown> = {}): Promise<any> {
  return request({method: 'get', url: '/api/roles/', params});
}

// 角色管理 => 根据角色id获取用户权限
export function getRolesByIdPermission(roleId: number): Promise<any> {
  return request({method: 'get', url: `/api/roles/${roleId}/`});
}

// 角色管理 => 添加用户
export function postRoles(data: any): Promise<any> {
  return request({method: 'post', url: '/api/roles/', data});
}

// 角色管理 => 修改用户
export function putRoles(id: number, data: any): Promise<any> {
  return request({method: 'put', url: `/api/roles/${id}/`, data});
}

// 角色管理 => 删除用户
export function deleteRoles(id: number): Promise<any> {
  return request({method: 'delete', url: `/api/roles/${id}/`});
}
