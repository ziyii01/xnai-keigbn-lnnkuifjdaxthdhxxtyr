function weeks_processing(data) {
  const len = data.length;
  let result = [];
  let out = [];
  for (let i = 0; i < len - 3; i++) {
    result = [];
    const weeks_list = data[i].match(/\d+/g);
    if (weeks_list.length == 1) {
      result.push(Number(weeks_list[0]));
    }
    if (data[i].includes("单")) {
      for (let j = Number(weeks_list[0]); j < Number(weeks_list[1]) + 1; j++) {
        result.push(j++);
      }
    } else if (data[i].includes("双")) {
      for (let j = Number(weeks_list[0]); j < Number(weeks_list[1]) + 1; j++) {
        result.push(j++);
      }
    } else {
      for (let j = Number(weeks_list[0]); j < Number(weeks_list[1]) + 1; j++) {
        result.push(j);
      }
    }
    out = out.concat(result);
  }
  return out;
}

function scheduleHtmlParser(html) {
  //除函数名外都可编辑
  //传入的参数为上一步函数获取到的html
  //可使用正则匹配
  //可使用解析dom匹配，工具内置了$，跟jquery使用方法一样，直接用就可以了，参考：https://cnodejs.org/topic/5203a71844e76d216a727d2e
  let result = [];
  let item = [];
  let dict = {};
  let temp = [];
  $(".mtt_item_kcmc ").each(function (i, elem) {
    item = [];
    dict = {};
    temp = [];
    let data = $(this).text();
    for (let i of data.split(" ")) {
      if (i != "") {
        item.push(i);
      }
    }
    dict["name"] = item[0].split("[")[0];
    temp = item[2].split(",");
    dict["position"] = temp[temp.length - 1];
    dict["teacher"] = item[1];
    dict["weeks"] = weeks_processing(temp);
    dict["day"] = temp[temp.length - 3].match(/\d+/g)[0];
    dict["sections"] = temp[temp.length - 2].match(/\d+/g);
    result.push(dict);
  });
  return result;
}
