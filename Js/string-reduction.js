const StringReduction = function (str = "") {
  let stringReduction = new String("");
  let stringReplacements = {
    ab: "c",
    ac: "b",
    bc: "a",
    ca: "b",
    cb: "b",
  };

  let flag = false;

  for (let i = 0; i < str.length; i++) {
    if (i !== str.length - 1) {
      if (str[i] + str[i + 1] in stringReplacements) {
        stringReduction += stringReplacements[str[i] + str[i + 1]];
        i++;
      } else {
        stringReduction += str[i];
      }
    } else {
      stringReduction += str[i];
    }
  }

  if (flag === true) return StringReduction(stringReduction);
  else return stringReduction.length;
};

// console.log(StringReduction("acab"));
