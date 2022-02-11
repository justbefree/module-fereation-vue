/*
 * @Author: Just be free
 * @Date:   2022-01-07 18:45:17
 * @Last Modified by:   Just be free
 * @Last Modified time: 2022-01-07 18:47:34
 * @E-mail: justbefree@126.com
 */
import axios from "axios";
interface AnyObject {
  [propName: string]: any;
}
import * as qs from "qs";
const formData = (config: AnyObject, type?: string) => {
  const headers = config.headers;
  delete config.headers;
  const contentType = type || "application/x-www-form-urlencoded;charset=utf-8";
  const instance = axios.create({
    headers: {
      "Content-Type": contentType,
      ...headers,
    },
    ...config,
  });
  return instance;
};

const json = (config: AnyObject) => {
  const headers = config.headers;
  delete config.headers;
  const instance = axios.create({
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      ...headers,
    },
    ...config,
  });
  return instance;
};

const post = (url: string, params: AnyObject, config = {}): Promise<any> => {
  return formData(config)
    .post(url, qs.stringify(params))
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
const upload = (url: string, params: AnyObject, config = {}): Promise<any> => {
  return formData(config, "multipart/form-data;charset=utf-8")
    .post(url, params)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
const get = (url: string, params: AnyObject, config = {}): Promise<any> => {
  return formData(config)
    .get(url + "?" + qs.stringify(params))
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
const postJSON = (
  url: string,
  params: AnyObject,
  config = {}
): Promise<any> => {
  return json(config)
    .post(url, params)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
const methods = { post, get, postJSON, upload };
export type HttpMethodTypes = "get" | "post" | "postJSON" | "upload";
const Http = (args: keyof typeof methods) => {
  return methods[args];
};
export default Http;
