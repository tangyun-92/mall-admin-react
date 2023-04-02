// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 登录以后返回token POST /admin/login */
export async function loginUsingPOST(
  body: API.UmsAdminLoginParam,
  options?: { [key: string]: any },
) {
  return request<API.result>('/admin/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户所有权限（包括+-权限） GET /admin/permission */
export async function getPermissionListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPermissionListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.result>('/admin/permission', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 用户注册 POST /admin/register */
export async function registerUsingPOST(
  body: API.UmsAdminRegisterParam,
  options?: { [key: string]: any },
) {
  return request<API.result>('/admin/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
