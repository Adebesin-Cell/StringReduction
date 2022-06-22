const a = {
  user: {
    id: 1,
    name: {
      firstName: "James",
      lastName: "Ibori",
    },
    location: {
      city: "Ikoyi",
      state: "Lagos",
      address: "One expensive house like that",
    },
  },
};

const FlattenObject = function (obj = {}) {
  let result = {};

  for (const i in obj) {
    if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
      const temp = FlattenObject(obj[i]);
      for (const j in temp) {
        result[i + "." + j] = temp[j];
      }
    } else {
      result[i] = obj[i];
    }
  }

  return result;
};

const getKeyStr = function (obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
};

const getKey = function (string = "") {
  const keyIndex = string.lastIndexOf(".");
  const key = string.slice(keyIndex + 1);
  return key;
};

const GetPathFunction = function (object = {}, key = "", query = "") {
  const path = [];

  const keyExist = function (obj = {}) {
    if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {
      return false;
    } else if (obj.hasOwnProperty(key) && obj[key] === query) {
      return true;
    } else if (Array.isArray(obj)) {
      console.log("hello");
    }
  };
};

const GETPATH = function (obj, query) {
  const flattenedData = FlattenObject(obj);

  const key = getKeyStr(flattenedData, query);

  const singleKey = getKey(key);
};

GETPATH(a, "One expensive house like that");
