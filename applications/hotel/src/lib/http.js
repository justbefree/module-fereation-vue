/*
* @Author: Just be free
* @Date:   2022-01-07 11:23:49
* @Last Modified by:   Just be free
* @Last Modified time: 2022-01-07 11:24:02
* @E-mail: justbefree@126.com
*/
import axios from "axios";
import * as qs from "qs";
const formData = (config, type) => {
  const headers = config.headers;
  delete config.headers;
  const contentType = type || "application/x-www-form-urlencoded;charset=utf-8";
  const instance = axios.create({
    headers: {
      "Content-Type": contentType,
      ...headers
    },
    ...config
  });
  return instance;
};

const json = (config) => {
  const headers = config.headers;
  delete config.headers;
  const instance = axios.create({
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      ...headers
    },
    ...config
  });
  return instance;
};

const post = (url, params, config = {}) => {
  return formData(config)
    .post(url, qs.stringify(params))
    .then(res => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch(e => {
      console.log(e);
    });
};
const upload = (url, params, config = {}) => {
  return formData(config, "multipart/form-data;charset=utf-8")
    .post(url, params)
    .then(res => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch(e => {
      console.log(e);
    });
};
const get = (url, params, config = {}) => {
  return formData(config)
    .get(url + "?" + qs.stringify(params))
    .then(res => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch(e => {
      console.log(e);
    });
};
const postJSON = (
  url,
  params,
  config = {}
) => {
  return json(config)
    .post(url, params)
    .then(res => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch(e => {
      console.log(e);
    });
};
const methods = { post, get, postJSON, upload };
const Http = (args) => {
  return methods[args];
};
export default Http;
